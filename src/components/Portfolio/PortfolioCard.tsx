import type { PortfolioItem } from "../../data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, index }) => {
  return (
    <div
      className="portfolio-item anim-fade-up"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="image">
        <img src={item.image} alt={item.title} loading="lazy" />
      </div>
      <div className="hover-items">
        <h3>{item.title}</h3>
        {item.techStack && item.techStack.length > 0 && (
          <div className="tech-tags">
            {item.techStack.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        {item.links.length > 0 && (
          <div className="icons">
            {item.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                className="icon"
                target="_blank"
                rel="noopener noreferrer"
                // title={linkLabelMap[link.type]}
              >
               {/* // <i className={linkIconMap[link.type]}></i> */}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
