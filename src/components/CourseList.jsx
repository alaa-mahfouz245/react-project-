import React from "react";
import CourseItem from "./CourseItem";
import "./CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
