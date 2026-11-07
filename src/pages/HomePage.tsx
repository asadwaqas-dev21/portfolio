import { useEffect, useState } from "react";
import { heroSocialLinks } from "../data/socialLinks";
import { RESUME_DOWNLOAD_LINK } from "../data/about";
import "../styles/home.scss";

const roles = [
  "Mobile App Developer",
  "Frontend Web Developer",
  "Full-Stack Developer",
];

const heroStats = [
  { value: "15+", label: "Projects" },
  { value: "2+", label: "Years Exp." },
  { value: "4+", label: "Companies" },
];

const techStack = [
  "Flutter",
  "Dart",
  "Bloc",
  "GetX",
  "Provider",
  "Python",
  "Django",
  "Next.js",
  "React",
  "Firebase",
  "Supabase",
  "REST APIs",
];

// Icons that circle the photo; angle is their position on the orbit
const orbitIcons = [
  { name: "Flutter", angle: 0, img: "/img/flutter.png" },
  { name: "React", angle: 90, icon: "fab fa-react", color: "#22d3ee" },
  { name: "Python", angle: 180, icon: "fab fa-python", color: "#a78bfa" },
  { name: "JavaScript", angle: 270, icon: "fab fa-js", color: "#facc15" },
];

const HomePage: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 400);
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayText((prev) => prev.slice(0, -1)),
        40
      );
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <header className="home" id="home">
      <div className="home-inner">
        <div className="home-text">
          <span className="home-eyebrow anim-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="wave">👋</span> Hello, I'm
          </span>

          <h1 className="home-name anim-fade-up" style={{ animationDelay: "0.25s" }}>
            Asad <span className="home-name-accent">Waqas</span>
          </h1>

          <p className="home-role anim-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="home-role-prefix">I'm a</span>
            <span className="home-typing">{displayText}</span>
            <span className="home-cursor"></span>
          </p>

          <p className="home-desc anim-fade-up" style={{ animationDelay: "0.55s" }}>
            I craft high-performance cross-platform mobile apps with
            <strong> Flutter</strong> &amp; <strong>Dart</strong> (BLoC, GetX, Provider), robust backends with <strong>Django &amp; Python</strong>, and responsive web experiences with <strong>Next.js</strong>.
          </p>

          <div className="home-actions anim-fade-up" style={{ animationDelay: "0.7s" }}>
            <a href={RESUME_DOWNLOAD_LINK} className="ui-btn ui-btn-primary" download>
              Download Resume
              <i className="fas fa-arrow-down"></i>
            </a>
            <a
              href="https://www.kambohtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ui-btn ui-btn-ghost"
            >
              My Company
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="home-stats anim-fade-up" style={{ animationDelay: "0.85s" }}>
            {heroStats.map((stat) => (
              <div className="home-stat" key={stat.label}>
                <span className="home-stat-value">{stat.value}</span>
                <span className="home-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="home-social anim-fade-up" style={{ animationDelay: "1s" }}>
            <span className="home-social-label">Find me on</span>
            <div className="home-social-icons">
              {heroSocialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`home-social-link ${link.cssClass}`}
                  title={link.name}
                  aria-label={link.name}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="home-visual anim-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="home-orbit">
            {orbitIcons.map((item) => (
              <span
                key={item.name}
                className="home-orbit-slot"
                style={{ "--angle": `${item.angle}deg` } as React.CSSProperties}
              >
                <span className="home-orbit-icon" title={item.name}>
                  {item.img ? (
                    <img src={item.img} alt={item.name} />
                  ) : (
                    <i className={item.icon} style={{ color: item.color }}></i>
                  )}
                </span>
              </span>
            ))}
          </div>

          <div className="home-photo-frame">
            <div className="home-photo">
              <img
                src="/img/hero_executive.png"
                alt="Asad Waqas - Software Engineer"
              />
            </div>
          </div>

          <div className="home-card card-top">
            <span className="home-card-icon"><i className="fas fa-mobile-alt"></i></span>
            <div>
              <strong>Mobile Apps</strong>
              <span>Android &amp; iOS</span>
            </div>
          </div>

          <div className="home-card card-bottom">
            <span className="home-card-icon"><i className="fas fa-code"></i></span>
            <div>
              <strong>Web Apps</strong>
              <span>Next.js &amp; React</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-marquee" aria-label="Tech stack">
        <div className="home-marquee-track">
          {[...techStack, ...techStack].map((tech, i) => (
            <span className="home-marquee-item" key={i} aria-hidden={i >= techStack.length}>
              {tech}
              <i className="fas fa-star-of-life"></i>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default HomePage;
