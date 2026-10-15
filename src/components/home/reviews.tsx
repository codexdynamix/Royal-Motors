import { Quote } from "lucide-react";
import { reviews } from "@/data/landing";

export function Reviews() {
  return (
    <section className="section reviews reveal">
      <div className="review-heading">
        <div>
          <p className="eyebrow">04 / REAL CARS. REAL EXPERIENCES.</p>
          <h2>
            The Royal Motors
            <br />
            <span>customer showcase.</span>
          </h2>
        </div>
        <div className="rating-placeholder">
          <span className="stars">★★★★★</span>
          <strong>5/5</strong>
          <p>Customer stories from Harare, Bulawayo and Mutare</p>
        </div>
      </div>
      <p className="placeholder-label">CUSTOMER STORIES</p>
      <div className="review-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.meta}>
            <div className="customer-photo customer-photo-real">
              <img src={review.photo} alt={review.alt} loading="lazy" />
            </div>
            <div className="review-body">
              <Quote size={20} />
              <p>{review.quote}</p>
              <strong>{review.name}</strong>
              <span>{review.meta}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
