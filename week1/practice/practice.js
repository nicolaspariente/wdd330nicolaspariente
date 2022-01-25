function changeblue() {
  document.body.style.backgroundColor = "blue";
}
function changegreen() {
  document.body.style.backgroundColor = "green";
}
function save() {
  let text = document.querySelector("#textarea").value;
  localStorage.setItem("user", text);
}
function publish() {
  let publish = localStorage.getItem("user");
  document.querySelector("#publish").innerHTML = publish;
}
