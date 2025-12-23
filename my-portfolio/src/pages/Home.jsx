import { Link } from "react-router-dom";
import "./Home.css";

const featured = [
  { id: 1, title: "Boat House Booking", desc: "Frontend / React", color: "#FDE68A" },
  { id: 2, title: "Stenoisis Detection", desc: "Machine Learning Project", color: "#BFDBFE" },
  { id: 3, title: "Investment Platform", desc: "Full-stack App", color: "#C7F9CC" },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero">

        <div className="hero-inner container">
          <div className="hero-left">
            <h1 className="hero-title">
              Why You Need Me🤔? 
            </h1>
            <p className="hero-sub">
              I build wonderful Full stack applications with beautiful interfaces and
              thoughtful UX. Welcome to my portfolio — explore projects, read my story,
              or get in touch.☺️
            </p>

            <div className="hero-ctas">
              <Link to="/about" className="btn primary">
                About Me
              </Link>
              <Link to="/contact" className="btn ghost">
                Contact Me
              </Link>
            </div>

            <div className="hero-stats" aria-hidden>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">3+</div>
                <div className="stat-label">Known Stacks</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="mockup-card">
              <div className="mockup-body">
                <h3>Mohamed Hajith A</h3>
                <p>Full Stack Developer</p>
                <br></br>
                <div className="mockup-tags">
                  <span>5'8</span>
                  <span>B.E</span>
                  <span>Techie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="featured container">
        <h2 className="section-title">FEATURED PROJECTS</h2>

        <div className="projects-row">
          {featured.map((p) => (
            <article key={p.id} className="project-card" style={{ background: p.color }}>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <Link to="/projects" className="project-link">See details →</Link>
            </article>
          ))}
        </div>
      </section>

      {/* Short about / CTA */}
      <section className="mini-about container">
        <div className="about-left">
          <h2>LET'S BUILD TOGETHER</h2>
          <p>
            I focus on fast loading, accessible interfaces and maintainable code. If you
            have an idea, I’ll help make it real.
          </p>
        </div>
        <div className="about-right">
          <Link to="/contact" className="btn primary large">Let's Start</Link>
        </div>
      </section>
    </main>
  );
}
