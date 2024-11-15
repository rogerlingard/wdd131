const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
};
const stepsHtml = steps.map(listTemplate).join('');
document.querySelector("#myList").innerHTML = stepsHtml;

const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = [4, 3, 4]; // Example GPA points
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

const words = ["apple", "banana", "pear", "grape"];
const shortWords = words.filter((word) => word.length < 6);

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
if (luckyIndex !== -1) {
  console.log(`Lucky number found at index: ${luckyIndex}`);
} else {
  console.log('Lucky number not found');
}