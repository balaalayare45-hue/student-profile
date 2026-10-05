let studentName = "Abduweli mohamed omar";
let score = 75;
let attendance = 85;

let grade;
let message;

//Determine the grade
if(score >= 90){
    grade = "A";
    message = "Excellent Woork";
}else if (score >= 80){
    grade = "B";
    message = "Good job!";
}else if (score >= 70){
    grade = "C";
    message = "Keep improving!";
}else if (score >= 60){
    grade = "D";
    message = "You can do better!";
}else{
    grade = "f";
    message = "You need to work harder";
}

//Determine pass or fail
let status;

if (score >= 50 && attendance >= 75){
    status = "passed";
}else{
   status = "Failed";
}

//Display the result
console.log("Student:" + studentName);
console.log("Grade:" +  grade);
console.log("Status:" + status);
console.log("message");