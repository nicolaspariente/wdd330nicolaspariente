let id = 1;

addEventListener("keydown", (event) => {
  console.log(`You pressed the ${event.key} character`);
  if (event.key === "ArrowDown") {
    if (id != 3 && id != 4) {
      delete_classes();
      id = id + 2;
      document.getElementById(`${id}`).className = "color";
    }
  } else if (event.key === "ArrowUp") {
    if (id != 1 && id != 2) {
      delete_classes();
      id = id - 2;
      document.getElementById(`${id}`).className = "color";
    }
  } else if (event.key === "ArrowRight") {
    if (id != 2 && id != 4) {
      delete_classes();
      id = id + 1;
      document.getElementById(`${id}`).className = "color";
    }
  } else if (event.key === "ArrowLeft") {
    if (id != 1 && id != 3) {
      delete_classes();
      id = id - 1;
      document.getElementById(`${id}`).className = "color";
    }
  }
});

function delete_classes() {
  Array.from(document.querySelectorAll(".container div.color")).forEach((div) =>
    div.classList.remove("color")
  );
}
