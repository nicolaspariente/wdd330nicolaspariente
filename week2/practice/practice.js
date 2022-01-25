var grades = [];
const save = () => {
  let name = document.querySelector("#name").value;
  let grade = parseInt(document.querySelector("#grade").value);
  if (name && grade && grade < 11) {
    grades.push(grade);
    let li = document.createElement("li");
    let ul = document.querySelector("#show");
    ul.appendChild(li);
    li.innerHTML = `${name} = ${grade} points <br>`;
  }
};

function average() {
  let total = grades.reduce((acc, x) => acc + x);
  let average = total / grades.length;
  document.querySelector(
    "#result"
  ).innerHTML = `The grade average of all students is ${average}`;
}
