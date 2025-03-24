import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./CourseItem.css";

const CourseItem = ({ course }) => {
  return (
    <div className="course-item">
      <h2>{course.title}</h2>
      <p>
        Year: {course.year} | Group: {course.group}
      </p>
      <div className="buttons">
        <button className="edit-btn">
          <FaEdit /> Edit
        </button>
        <button className="delete-btn">
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
