import '../styles/Services.css'; 

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>Responsive, pixel-perfect UI using HTML, CSS, JavaScript, and React.js.</p>
          </div>
          <div className="service-card">
            <h3>Backend Development</h3>
            <p>Robust APIs and logic using Node.js, Express, and MongoDB.</p>
          </div>
          <div className="service-card">
            <h3>Full-Stack Web Apps</h3>
            <p>Complete MERN stack solutions for startups and businesses.</p>
          </div>
          <div className="service-card">
            <h3>Website Redesign</h3>
            <p>Modernize and optimize your existing website for speed and UX.</p>
          </div>
          <div className="service-card">
            <h3>Landing Pages</h3>
            <p>High-converting landing pages for products, portfolios, and marketing.</p>
          </div>
          <div className="service-card">
            <h3>SEO Optimization</h3>
            <p>Boost your visibility with clean, semantic HTML and performance tuning.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
