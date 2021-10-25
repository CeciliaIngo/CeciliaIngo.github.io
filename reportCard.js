//Report Card Simulation
/*Program should:
  -use functions
  *-ask user what four classes they take
  *-ask users what they got on four tests in each subject
  *-calculates their test average
  *-calculates their letter grade in each class
  3-calculates their overall GPA
  -prints all information like a report card
*/
//I recommend using 3 or 4 functions

//Call functions below here

var className1 = prompt("What class are you taking?");
var classAvg1 = gradePrompt(className1);
var class1Letter = letterGrade(classAvg1);

var className2 = prompt("What class are you taking?");
var classAvg2 = gradePrompt(className2);
var class2Letter = letterGrade(classAvg2);

var className3 = prompt("What class are you taking?");
var classAvg3 = gradePrompt(className3);
var class3Letter = letterGrade(classAvg3);

var className4 = prompt("What class are you taking?");
var classAvg4 = gradePrompt(className4);
var class4Letter = letterGrade(classAvg4);

var GPA1 = indGPA(classAvg1);
var GPA2 = indGPA(classAvg2);
var GPA3 = indGPA(classAvg3);
var GPA4 = indGPA(classAvg4);

var totalGPA = overallGPA(GPA1, GPA2, GPA3, GPA4);

//Define functions below here


//function1: grades and test average 

function gradePrompt(className){
  var grade1 = Number(prompt("What is your grade for test 1?"));
  var grade2 = Number(prompt("What is your grade for test 2?"));
  var grade3 = Number(prompt("What is your grade for test 3?"));
  var grade4 = Number(prompt("What is your grade for test 4?"));
  document.write("<li>" + className + " Test1: " + grade1 + "</li>");
  document.write("<li>" + className + " Test2: " + grade2 + "</li>");
  document.write("<li>" + className + " Test3: " + grade3 + "</li>");
  document.write("<li>" + className + " Test4: " + grade4 + "</li>");
  var testAverage = (grade1 + grade2 + grade3 + grade4) / 4; 
  document.write("<p>" + "Your average is " + testAverage + "</p>");
  return testAverage;
}


//function2: letter grade

function letterGrade(testAverage){
var letter;
  
  if (testAverage >= 93) {
      letter = ("A");
  }
  else if (testAverage >= 85) {
      letter = ("B");
  }
  else if (testAverage >= 75) {
      letter = ("C");
  }
  else if (testAverage >= 67) {
      letter = ("D");
  }
  else if (testAverage >= 0) {
      letter = ("F");
  }

  document.write("<h3>" + "Your letter grade is " + letter + "</h3>"); 
}


//function3: individual GPA

function indGPA(testAverage){
var gradePointAverage;  

  if (testAverage >= 93) {
      gradePointAverage = 4.0;
  }
  else if (testAverage >= 85) {
      gradePointAverage = 3.0;
  }
  else if (testAverage >= 75) {
      gradePointAverage = 2.0;
  }
  else if (testAverage >= 67) {
      gradePointAverage = 1.0;
  }
  else if (testAverage >= 0) {
      gradePointAverage = 0.0;
  }
  return gradePointAverage;
}


//function4: overall GPA

function overallGPA(GPA1, GPA2, GPA3, GPA4){
  var averageGPA = (GPA1 + GPA2 + GPA3 + GPA4)/4;
  document.write("<h2>" + "Your cumulative GPA is " + averageGPA + "</h2>");
  return averageGPA;
}
