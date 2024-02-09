const courseModel = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Closed",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    instructor: "Jane Smith",
    description:
      "Deep dive into advanced JavaScript concepts and master modern development techniques.",
    enrollmentStatus: "Open",
    thumbnail: 'https://www.shutterstock.com/image-vector/vector-design-avatar-dummy-sign-600nw-1290556063.jpg',
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "ES6 and Beyond",
        content:
          "Explore ES6 features like arrow functions, destructuring, and spread syntax.",
      },
      {
        week: 2,
        topic: "Async JavaScript",
        content:
          "Learn asynchronous programming with Promises and async/await.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 202,
        name: "Diana Prince",
        email: "diana@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "Data Science Fundamentals",
    instructor: "Dr. David Johnson",
    description:
      "Gain foundational knowledge in data science, including statistics, data analysis, and machine learning concepts.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Familiarity with statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content:
          "Overview of data science, its applications, and career paths.",
      },
      {
        week: 2,
        topic: "Statistics for Data Science",
        content: "Fundamental statistical concepts for data analysis.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 301,
        name: "Emma Watson",
        email: "emma@example.com",
      },
      {
        id: 302,
        name: "Franklin Adams",
        email: "frank@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 4,
    name: "Web Development Bootcamp",
    instructor: "Sarah Lee",
    description:
      "Comprehensive bootcamp covering HTML, CSS, JavaScript, and front-end frameworks.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "16 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content:
          "Learn the basics of HTML, including tags, elements, and structure.",
      },
      {
        week: 2,
        topic: "Styling with CSS",
        content: "Explore CSS properties, selectors, and layout techniques.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 401,
        name: "George Miller",
        email: "george@example.com",
      },
      {
        id: 402,
        name: "Hannah Baker",
        email: "hannah@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 5,
    name: "Python for Beginners",
    instructor: "Michael Brown",
    description: "Introduction to Python programming language for beginners.",
    enrollmentStatus: "Closed",
    thumbnail: "your.image.here",
    duration: "6 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["None"],
    syllabus: [
      {
        week: 1,
        topic: "Python Basics",
        content: "Introduction to Python syntax, variables, and data types.",
      },
      {
        week: 2,
        topic: "Control Flow",
        content: "Learn about conditional statements and loops in Python.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 501,
        name: "Isabella Clark",
        email: "isabella@example.com",
      },
      {
        id: 502,
        name: "Jack Wilson",
        email: "jack@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 6,
    name: "Machine Learning Fundamentals",
    instructor: "Dr. Emily Chen",
    description: "Introduction to machine learning algorithms and techniques.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Familiarity with statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning concepts and applications.",
      },
      {
        week: 2,
        topic: "Linear Regression",
        content: "Understanding linear regression models and implementation.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 601,
        name: "Liam Thompson",
        email: "liam@example.com",
      },
      {
        id: 602,
        name: "Olivia Martinez",
        email: "olivia@example.com",
      },
      // Additional enrolled students...
    ],
  },
];

export default courseModel;
