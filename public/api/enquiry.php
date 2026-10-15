<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

$name = htmlspecialchars(trim($data['name'] ?? 'Not provided'));
$phone = htmlspecialchars(trim($data['phone'] ?? 'Not provided'));
$make = htmlspecialchars(trim($data['make'] ?? 'Not provided'));
$yearModel = htmlspecialchars(trim($data['yearModel'] ?? 'Not provided'));
$inches = htmlspecialchars(trim($data['inches'] ?? 'Not specified'));
$holes = htmlspecialchars(trim($data['holes'] ?? 'Not specified'));
$tyreSizes = htmlspecialchars(trim($data['tyreSizes'] ?? 'Not specified'));
$notes = htmlspecialchars(trim($data['notes'] ?? 'None'));

$subject = "Royal Motors Rim Options Enquiry: " . $make . " " . $yearModel . " (" . $name . ")";

// Two recipient email addresses to receive the submission separately (not cc'd):
$recipients = [
    'nicticjnr@gmail.com',
    'codexdynamix@gmail.com'
];

$domain = !empty($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'royalmotors.co.zw';
$originUrl = "https://" . preg_replace('/:\d+$/', '', $domain);

// 1. Dispatch separately to each recipient via FormSubmit HTTPS API (guaranteed Gmail inbox delivery)
$postData = [
    '_subject' => $subject,
    '_template' => 'table',
    'Customer Name' => $name,
    'Phone / WhatsApp' => $phone,
    'Vehicle Make' => $make,
    'Year & Model' => $yearModel,
    'Rim Size' => $inches,
    'Stud Holes' => $holes,
    'Tyre Sizes' => $tyreSizes,
    'Notes / Preference' => $notes,
    'Date Submitted' => date('Y-m-d H:i:s')
];

$jsonPayload = json_encode($postData);

foreach ($recipients as $recipient) {
    if (function_exists('curl_init')) {
        $ch = curl_init('https://formsubmit.co/ajax/' . urlencode($recipient));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonPayload);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Accept: application/json',
            'Referer: ' . $originUrl . '/',
            'Origin: ' . $originUrl,
            'User-Agent: RoyalMotorsFitment/2.0'
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 6);
        @curl_exec($ch);
        @curl_close($ch);
    }
}

// 2. Local Hostinger PHP mail() fallback
$body = "New Rim Options & Vehicle Fitment Enquiry\n";
$body .= "==========================================\n\n";
$body .= "Customer Name: " . $name . "\n";
$body .= "Phone / WhatsApp: " . $phone . "\n";
$body .= "Vehicle Make: " . $make . "\n";
$body .= "Year & Model: " . $yearModel . "\n";
$body .= "Rim Size: " . $inches . "\n";
$body .= "Stud Holes: " . $holes . "\n";
$body .= "Tyre Sizes: " . $tyreSizes . "\n";
$body .= "Notes: " . $notes . "\n";
$body .= "Date: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: Royal Motors <noreply@" . $domain . ">\r\n";
$headers .= "Reply-To: " . $name . " <noreply@" . $domain . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

foreach ($recipients as $recipient) {
    @mail($recipient, $subject, $body, $headers, "-f noreply@" . $domain);
}

// 3. Local audit log
@file_put_contents(__DIR__ . '/.enquiries.log', date('[Y-m-d H:i:s] ') . $jsonPayload . "\n", FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Thank you for your enquiry. Your rim options request has been received.'
]);
