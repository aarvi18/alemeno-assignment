// Dashboard.jsx
import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("selectedCourses")) || []
  );

  useEffect(() => {
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  const handleCourseRemoval = (courseId) => {
    setSelectedCourses(
      selectedCourses.filter((course) => course.id !== courseId)
    );
  };

  return (
    <div className="dashboard">
      <h2>Your Selected Courses</h2>
      <div className="dashboard-Card">
        <ul>
          {selectedCourses.map((course) => (
            <li key={course.id}>
              <h3>Course Name : {course.name}</h3>
              <span>Instructor Name : {course.instructor}</span>
              <span>Description : {course.description}</span>
              <img src={course.thumbnail} alt="Course Thumbnail" />

              <button
                className="btn btn-remove"
                onClick={() => handleCourseRemoval(course.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
