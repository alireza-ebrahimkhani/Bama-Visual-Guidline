let index = document.querySelector(".index");
let toolBar_wrapper = document.querySelector(".toolBar_wrapper");
let body_wrapper = document.querySelector(".body_wrapper");
let sideBar = document.querySelector(".sideBar");
let index_dynamicTitle = document.querySelector(".index_dynamicTitle");
let index_nav = document.querySelector(".index_nav");
let toc_item = document.querySelectorAll(".toc-list-item");
let index_is_open = false;
index_dynamicTitle.addEventListener("click", () => {
  index_nav.classList.toggle("index_nav--open");
  index_dynamicTitle.classList.toggle("index_dynamicTitle--open");
  index_is_open = true;
});

toc_item.forEach(thisToc_item => {
  thisToc_item.addEventListener("click", () => {
  index_nav.classList.remove("index_nav--open");
    index_dynamicTitle.classList.remove("index_dynamicTitle--open");
    index_is_open = false;
  });
});
$(window).on('scroll', _.throttle( closeIndex, 1000, {trailing: false}));  
function closeIndex(){
  
  if (index_is_open = true){
    index_nav.classList.remove("index_nav--open");
    index_dynamicTitle.classList.remove("index_dynamicTitle--open");
    index_is_open = false;
  }
}
$(window).on('scroll', _.throttle( changeTitle, 1000, {trailing: false}));  
function changeTitle(){
  let active_link = document.querySelector(".is-active-link");
  index_nav.classList.remove("index_nav--open");
  index_dynamicTitle.classList.remove("index_dynamicTitle--open");
  index_dynamicTitle.innerHTML = active_link.innerHTML;
}
if(window.outerWidth <= 1024){
  toolBar_wrapper.appendChild(index);
}else{
  body_wrapper.appendChild(index);
}
window.addEventListener("resize" , function(){ 
if(window.outerWidth <= 1024){
  toolBar_wrapper.appendChild(index);
}else{
  body_wrapper.appendChild(index);
}
});
