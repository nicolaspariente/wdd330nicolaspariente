const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html",
  },
  {
    label: "Week2 notes",
    url: "week2/index.html",
  },
];

function create_links(element) {
  let ol = document.querySelector(".ol");
  let li_element = document.createElement("li");
  let a = document.createElement("a");
  a.href = element.url;
  a.innerHTML = element.label;
  console.log(a);
  li_element.appendChild(a);
  ol.appendChild(li_element);
}
links.forEach(create_links);
