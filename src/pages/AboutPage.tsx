import { useEffect, useRef, useState } from "react";
import SkillBar from "../components/About/SkillBar";
import StatCard from "../components/About/StatCard";
import Timeline from "../components/About/Timeline";
import { skills, stats, education, career, RESUME_DOWNLOAD_LINK } from "../data/about";

const AboutPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`container about active ${visible ? "page-visible" : ""}`}
      id="about"
      ref={ref}
    >
      <div className="page-header anim-fade-up">
        <span className="page-tag"><i className="fas fa-user"></i> About</span>
        <h1 className="page-title">
          Know <span className="highlight">About Me</span>
        </h1>
        <p className="page-subtitle">
          A passionate software engineer building impactful products across platforms.
        </p>
      </div>

      <div className="about-container">
        <div className="left-about anim-fade-up" style={{ animationDelay: "0.2s" }}>
          <h4>Who I Am</h4>
          <p>
            I'm a Full-Stack Mobile App Developer and Frontend Web Developer with 2+ years of experience developing, integrating and deploying production-ready mobile and web applications. I am skilled in building cross-platform Android and iOS applications using Flutter and responsive web applications using Next.js.
          </p>
          <p>
            I have experience with Firebase, Supabase, PostgreSQL, RESTful APIs, and basic backend development using Python and Django. I constantly grow alongside my work -- always building, always improving.
          </p>
          <div className="btn-con">
            <a href={RESUME_DOWNLOAD_LINK} className="main-btn" download>
              <span className="btn-text">Download Resume</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
        <div className="right-about anim-fade-up" style={{ animationDelay: "0.4s" }}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>

      <div className="about-stats anim-fade-up" style={{ animationDelay: "0.5s" }}>
        <h4 className="section-heading">
          <i className="fas fa-code"></i> My Skills
        </h4>
        <div className="progress-bars">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>

      <div className="anim-fade-up" style={{ animationDelay: "0.6s" }}>
        <h4 className="section-heading">
          <i className="fas fa-clock"></i> My Timeline
        </h4>
        <Timeline title="Education" items={education} />
        <Timeline title="Career" items={career} />
      </div>
    </section>
  );
};

export default AboutPage;
