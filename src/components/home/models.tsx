import { models } from "@/data/landing";

export function Models() {
  return (
    <section className="section models reveal">
      <div className="section-heading">
        <p className="eyebrow">03 / FIND YOUR FIT</p>
        <h2>
          A royal fit for
          <br />
          <span>your Mercedes-Benz.</span>
        </h2>
        <p>Big presence for the models you love.</p>
      </div>
      <div className="model-columns">
        {models.map((group) => (
          <div key={group.type}>
            <h3 className="model-category">{group.type}</h3>
            {group.items.map(([name, details]) => (
              <div className="model-row" key={name}>
                <h4>{name}</h4>
                <p>{details}</p>
                <span>21″</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="fitment-note">
        Fitment varies by model, year and specification. Confirm wheel size, offset and clearance in the
        catalogue before buying.
      </p>
    </section>
  );
}
