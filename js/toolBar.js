let index = document.querySelector(".index");
let toolBar_wrapper = document.querySelector(".toolBar_wrapper");
let sideBar = document.querySelector(".sideBar");
let index_dynamicTitle = document.querySelector(".index_dynamicTitle");
let index_nav = document.querySelector(".index_nav");

index_dynamicTitle.addEventListener("click", () => {
  index_nav.classList.toggle("index_nav--open");
  index_dynamicTitle.classList.toggle("index_dynamicTitle--open");
});

window.addEventListener("scroll", () => {
  let active_link = document.querySelector(".is-active-link");
  index_nav.classList.remove("index_nav--open");
  index_dynamicTitle.classList.remove("index_dynamicTitle--open");
  index_dynamicTitle.innerHTML = active_link.innerHTML;
});
