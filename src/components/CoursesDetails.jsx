import React from "react";
import "./Mathematics101.css"; 
import { FaFileAlt, FaEye, FaPlus, FaTrash } from "react-icons/fa";

const Mathematics101 = () => {
  const lectures = [
    "Week 1: Introduction",
    "Week 2: Deep Dive",
    "Week 3: Advanced Topics",
  ];

  const categories = ["Lectures", "Assignments", "Exams"];

  return (
    <div className="container">
      <div className="header-course">
        <h1>Mathematics 101</h1>
        <p>
          <strong>Code:</strong> MATH101
        </p>
        <p>
          <strong>Group:</strong> A
        </p>
        <p>
          <strong>Admins:</strong> Dr. John Doe, Prof. Jane Smith
        </p>
      </div>

      <h2 className="attachments-title">Categorized Attachments</h2>

      <div className="categories-container">
        <div className="categories">
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <h2>{category}</h2>
              <div className="lectures">
                {lectures.map((lecture, i) => (
                  <div className="lecture" key={i}>
                    <div>
                      <FaFileAlt /> {lecture}
                    </div>
                    <div className="actions">
                      <FaEye title="View" />
                      <FaPlus title="Add" />
                      <FaTrash title="Delete" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="upload-btn">Upload File</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mathematics101;
