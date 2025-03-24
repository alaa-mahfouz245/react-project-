import React from "react";
import "./StudentsForm.css";

const StudentsForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Add Student</h2>
      <p className="form-subtitle">Enter your details to add new student</p>
      <form className="student-form">
        <input
          type="text"
          placeholder="First Name"
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          className="form-input"
        />
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="form-input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="University ID"
          required
          className="form-input"
        />
        <select className="form-input">
          <option>Group A</option>
          <option>Group B</option>
          <option>Group C</option>
        </select>
        <button type="submit" className="submit-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default StudentsForm;
