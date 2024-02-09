// CourseItem.js
import React from "react";

import "./CourseItem.css";

const CourseItem = ({ course, onBookNow }) => {
  const { enrollmentStatus } = course;

  const isEnrollmentClosed = enrollmentStatus === "Closed";
  
  return (
    <div className="course-card">
      <h2>{course.name}</h2>
      <span>{course.description}</span>
      <span>Course Duration: {course.duration}</span>
      <span>Location: {course.location}</span>
      <span>Enrollment: {course.enrollmentStatus}</span>
      <button className="btn" onClick={() => onBookNow(course)} disabled={isEnrollmentClosed}>
        {isEnrollmentClosed ? "Enrollment Closed" : "Book Now"}
      </button>
    </div>
  );
};

export default CourseItem;
