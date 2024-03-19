window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

const burgerKnap = document.querySelector("#burger_knap");
const sideBar = document.querySelector("#minSidebar");
const closeKnap = document.querySelector("#closebtn_id");
burgerKnap.addEventListener("click", openNav);

function openNav() {
  console.log("openNav");
  sideBar.classList.add("open");
  closeKnap.addEventListener("click", closeNav);
}

function closeNav() {
  console.log("closeNav");
  sideBar.classList.remove("open");
}
