import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

const Layout: React.FC = () => {
  return (
    <div className="main-content">
      <div className="site-bg" aria-hidden="true">
        <span className="site-orb orb-1"></span>
        <span className="site-orb orb-2"></span>
        <span className="site-orb orb-3"></span>
        <span className="site-grid"></span>
      </div>
      <Outlet />
      <Sidebar />
      <ThemeToggle />
    </div>
  );
};

export default Layout;
