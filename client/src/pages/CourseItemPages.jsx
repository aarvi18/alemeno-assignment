// CourseItemPages.jsx
import React, { useState, useEffect } from "react";
import CourseItem from "../components/CourseItem";
import courseModel from "../api/courseModel";
import { toast } from 'react-hot-toast';

const CourseItemPages = () => {
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("selectedCourses")) || []
  );
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add state for search query

  useEffect(() => {
    localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
  }, [selectedCourses]);

  const handleCourseBooking = (course) => {
    const isCourseSelected = selectedCourses.some((selectedCourse) => selectedCourse.id === course.id);
    if (isCourseSelected) {
      toast.error("Your course is already added!");
    } else {
      setSelectedCourses([...selectedCourses, course]);
      toast.success("Your course has been added!");
    }
  };

  const filteredCourses = courseModel.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  ); // Step 2: Function to filter courses based on search query

  return (
    <div className="courseItemPages">
      <div className="searchBox">
        <input 
          className="searchInput"
          type="text"
          placeholder="Search by course name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Handle input change
        />
      </div>
      <div className="courseList">
        {filteredCourses.map((course) => (
          <CourseItem key={course.id} course={course} onBookNow={handleCourseBooking} />
        ))}
      </div>
    </div>
  );
};

export default CourseItemPages;
