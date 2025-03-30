import React from "react";
import "./AcademicManager.css";

const AcademicManager = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Create New Academic Year</h2>
        
        {/* Select Group */}
        <div className="form-group">
          <label>Select Group</label>
          <select>
            <option>Select Group</option>
            <option>Group A</option>
            <option>Group B</option>
            <option>Group C</option>
          </select>
        </div>

        {/* Create Terms */}
        <div className="form-group">
          <h3>Create Terms</h3>
          <input type="text" placeholder="Term Name" />
          <input type="date" />
          <input type="date" />
          <button className="btn blue">Add Term</button>
        </div>

        {/* Assign Courses to Terms */}
        <div className="form-group">
          <h3>Assign Courses to Terms</h3>
          <div className="row">
            <select>
              <option>Select a Term</option>
              <option>First Term</option>
              <option>Second Term</option>
            </select>
            <select>
              <option>Select a Course</option>
              <option>Course A</option>
            <option>Course B</option>
            <option>Course C</option>
            </select>
            <button className="btn red">Assign Course</button>
          </div>
        </div>

        {/* Assign Admins to Courses */}
        <div className="form-group">
          <h3>Assign Admins to Courses</h3>
          <div className="row">
            <select>
              <option>Select a Course</option>
              <option>Course A</option>
            <option>Course B</option>
            <option>Course C</option>
            </select>
            <select>
            <option>Select Admin</option>
            <option>Admin A</option>
            <option>Admin B</option>
            <option>Admin C</option>
            </select>
            <button className="btn black">Assign Admin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicManager;
