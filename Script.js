function runScript() {
  const students = [
    {
      id: 1,
      name: "Alice",
      age: 22,
      courses: ["HTML", "CSS"],
      active: true,
      grade: 85,
    },
    {
      id: 2,
      name: "Bob",
      age: 28,
      courses: ["JS", "React"],
      active: false,
      grade: 92,
    },
    {
      id: 3,
      name: "Charlie",
      age: 24,
      courses: ["HTML", "JS"],
      active: true,
      grade: 78,
    },
    {
      id: 4,
      name: "Diana",
      age: 30,
      courses: ["Node", "Supabase"],
      active: true,
      grade: 95,
    },
    {
      id: 5,
      name: "Ethan",
      age: 19,
      courses: ["CSS", "Bootstrap"],
      active: false,
      grade: 60,
    },
    {
      id: 6,
      name: "Fiona",
      age: 26,
      courses: ["JS", "Git"],
      active: true,
      grade: 88,
    },
  ];
  let totalCoursesForAllStudents = 0;
  students.forEach((student) => {
    console.log(student.name);
    totalCoursesForAllStudents += student.courses.length;
    console.log(`"Hello ${student.name}, welcome to review week!"`);
    console.log(`"Student ${student.name} has a grade of ${student.grade}"`);
  });
  console.log(
    `Total number of courses taken by all students is ${totalCoursesForAllStudents}`,
  );

  const upperCased = students.map((student) => {
    return student.name.toUpperCase();
  });
  console.log(upperCased);

  const summaryStrings = students.map((student) => {
    return `${student.name} is ${student.age} years old`;
  });
  console.log(summaryStrings);

  const gradeBooster = students.map((student) => {
    return student.grade + 5;
  });
  console.log(`Student's boosted grade is ${gradeBooster}`);

  const liList = students.map((student) => {
    return `<li>${student.name}</li>`;
  });
  console.log(liList);

  const actives = students.filter((student) => student.active);
  console.log("Active students:");
  actives.forEach((student) => {
    console.log(student); // This will log each student object
  });

  const over90s = students.filter((student) => student.grade > 90);
  console.log("Students with grades over 90:");
  over90s.forEach((student) => {
    console.log(student);
  });

  const over25s = students.filter((student) => student.age > 25);
  console.log("Students who are over 25:");
  over25s.forEach((student) => console.log(student));

  const takeJS = students.filter((student) => student.courses.includes('JS'));
  console.log("Students who take JS:");
  takeJS.forEach((student) => console.log(student));

}

runScript();
