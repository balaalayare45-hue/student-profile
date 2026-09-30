//student profile
const studentName = "Abduweli Mohamed";
const age = 21;
const country = "kenya";
const university = "Daha International University";
const course = "Computer Science";
let studentStatus = "Active Student";

//subject scores
const subject1Score = 78;
const subject2Score = 64;

//calculations
let totalScore = subject1Score + subject2Score;
let averageScore = totalScore / 2;
let isAdult = age >= 18;
let hassPassed = averageScore >= 50;

console.log("Student Profile")
console.log("Name:",studentName);
console.log("Age:", +age);
console.log("Country:", country);
console.log("university:", university);
console.log("course:", course);
console.log("Student Status:", studentStatus);
console.log("subject 1 Score:", subject1Score);
console.log("Subject 2 Score:", subject2Score);
console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore);
console.log("Is The Student an adult:", isAdult);
console.log("Is The Average Greater Than or Equal To 50?:", hassPassed);
