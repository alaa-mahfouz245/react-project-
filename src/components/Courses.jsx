import React, { useState } from "react";
import "./Courses.css";
import image from "../mouse.jpg";
import { Link } from "react-router-dom";
const Courses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Course Title",
      group: "Course Group",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.",
      image: image,
    },
    {
      id: 2,
      title: "Course Title",
      group: "Course Group",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.",
      image: image,
    },
    {
      id: 3,
      title: "Course Title",
      group: "Course Group",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia suscipit sunt totam deserunt esse quia, vitae quaerat, nemo itaque id vero incidunt? Fugit laboriosam quam officiis necessitatibus tenetur sapiente nam.",
      image: image,
    },
  ]);

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <div className="filters">
        <select>
          <option>All Years</option>
          <option>2023</option>
        </select>
        <select>
          <option>All Groups</option>
          <option>Group A</option>
          <option>Group B</option>
        </select>
        <button className="add-course">Add Course</button>
      </div>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3>
              <Link to={`/corsesdetails`}>{course.title}</Link>
            </h3>
            <p className="course-group">{course.group}</p>
            <p className="course-description">{course.description}</p>
            <div className="course-actions">
              <button className="edit-btn">✏️</button>
              <button className="delete-btn">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
