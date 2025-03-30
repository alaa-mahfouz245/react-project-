import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUser,
  FaUserGraduate,
  FaBook,
  FaClipboard,
  FaUsers,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "" : "hidden"}`}>
      <div className="sidebar-header">Examination Management System</div>
      <ul>
          <Link to="/dashboard">
        <li>
            <FaTachometerAlt />
            <span>Dashboard</span>
        </li>
          </Link>
          <Link to="/admins">
        <li>
            <FaUser />
            <span>Admins</span>
        </li>
          </Link>
          <Link to="/students">
        <li>
            <FaUserGraduate />
            <span>Students</span>
        </li>
          </Link>
          <Link to="/courses">
        <li>
            <FaBook />
            <span>Courses</span>
        </li>
          </Link>
          <Link to="/exams">
        <li>
            <FaClipboard />
            <span>Exams</span>
        </li>
          </Link>
          <Link to="/roles">
        <li>
            <FaUsers />
            <span>Roles</span>
        </li>
          </Link>
          <Link to="/academic">
        <li>
            <FaUsers />
            <span>Group</span>
        </li>
          </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
