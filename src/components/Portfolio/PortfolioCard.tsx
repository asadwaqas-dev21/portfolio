import type { PortfolioItem, PortfolioLink } from "../../data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const linkMeta: Record<PortfolioLink["type"], { icon: string; label: string }> = {
  playstore: { icon: "fab fa-google-play", label: "Play Store" },
  web: { icon: "fas fa-external-link-alt", label: "Visit Website" },
  youtube: { icon: "fab fa-youtube", label: "Watch Demo" },
  android: { icon: "fab fa-android", label: "Download APK" },
  github: { icon: "fab fa-github", label: "Source Code" },
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index }) => {
  return (
    <article
      className="project-card anim-fade-up"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="project-media">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="project-body">
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        {item.techStack && item.techStack.length > 0 && (
          <div className="project-tags">
            {item.techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        )}
        {item.links.length > 0 && (
          <div className="project-links">
            {item.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={linkMeta[link.type].icon}></i>
                {link.label ?? linkMeta[link.type].label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default PortfolioCard;
