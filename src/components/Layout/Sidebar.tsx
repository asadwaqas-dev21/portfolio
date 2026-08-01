import { useLocation, Link } from "react-router-dom";
import { navItems } from "../../data/navigation";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="controls">
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className={`control ${location.pathname === item.path ? "active-btn" : ""}`}
          title={item.label}
        >
          <i className={item.icon}></i>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
