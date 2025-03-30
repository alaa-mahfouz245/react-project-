import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Roles from "./components/Roles";
import StudentsForm from "./components/StudentsForm";
import CoursesDetails from "./components/CoursesDetails";
import Academic from "./components/Academic"
import "./App.css";
import StudentTable from "./components/Students";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
        <Header toggleSidebar={toggleSidebar} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<StudentsForm/>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/corsesdetails" element={<CoursesDetails />} />
            <Route path="/students/StudentTable" element={<StudentTable/>}/>
            <Route path="academic" element={<Academic/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
