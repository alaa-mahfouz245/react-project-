import { FaBars, FaBell, FaUser } from "react-icons/fa";
import "./Header.css";
const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h2>Examination Management System - Courses</h2>
      <div className="header-icons">
        <FaBell className="icon" />
        <FaUser className="icon" />
      </div>
    </header>
  );
};

export default Header;
