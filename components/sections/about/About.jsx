export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="site-shell about-grid">
        <div>
          <p className="eyebrow">Background / 02</p>
          <h2 id="about-heading">
            Technology meets
            <br />
            business context.
          </h2>
        </div>
        <div className="about-copy">
          <p className="about-opening">
            I’m Hayeen (Hanyu Xue), a Perth-based Master of Information
            Technology graduate from UWA.
          </p>
          <p>
            My project work focuses on web interfaces, server-side data and
            service integrations. I’m looking for a junior software development
            role where I can keep building these skills.
          </p>
          <p>
            Alongside my projects, I work in procurement. Coordinating requests,
            suppliers and delivery follow-up gives me practical experience with
            business processes and changing requirements.
          </p>
          <div className="experience-entry">
            <p className="small-label">Current experience</p>
            <h3>Procurement Coordinator</h3>
            <p>
              Eco Sakura Energy Pty. Ltd. <span>Aug 2025–Present</span>
            </p>
            <p className="experience-detail">
              Purchasing requests, quote comparison, supplier communication and
              delivery follow-up using ERP systems and Excel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
