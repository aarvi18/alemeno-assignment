import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyCourses } from '../api/courseModel';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = dummyCourses.find(course => course.id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>Course Details</h1>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites:</p>
      <ul>
        {course.prerequisites.map((prerequisite, index) => (
          <li key={index}>{prerequisite}</li>
        ))}
      </ul>
      <p>Syllabus:</p>
      <ul>
        {course.syllabus.map((item, index) => (
          <li key={index}>
            <strong>Week {item.week}: </strong>
            {item.topic} - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
