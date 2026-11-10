export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="section-caption">
        A little background
      </h2>
      <p className="about-opening">
        An IT education.
        <br />A practical business perspective.
      </p>
      <p className="about-context">
        My work in procurement involves turning requests into coordinated action
        across suppliers and delivery schedules. It gives me a close view of the
        business processes that software needs to support.
      </p>
      <div className="experience-entry">
        <div className="entry-label">
          <span>Experience</span>
          <span>Aug 2025–Present</span>
        </div>
        <h3>Procurement Coordinator</h3>
        <p className="experience-company">Eco Sakura Energy Pty. Ltd.</p>
        <p className="experience-detail">
          Purchasing requests, quote comparison, supplier communication and
          delivery follow-up using ERP systems and Excel.
        </p>
      </div>
    </section>
  );
}
