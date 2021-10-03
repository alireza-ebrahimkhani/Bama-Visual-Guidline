let header_hamIco = document.querySelector('.header_hamIco');
let header_line = document.querySelector('.header_line');
let header_popup = document.querySelector('.header_popup');
let header_close = document.querySelector('.header_close');
let toolBar_logo = document.querySelector('.toolBar_logo');
let body = document.querySelector('body');
let menu_is_open = false;

header_hamIco.addEventListener('click' , ()=>{
    header_popup.classList.toggle('header_popup--open');
    header_line.classList.toggle('header_line--open');
    header_hamIco.classList.toggle('header_hamIco--open');
    header_close.classList.toggle('header_close--open');
    menu_is_open = true;
})
header_popup.addEventListener('click' , (e)=>{
    e.stopPropagation();
    e.preventDefault();
})
header_close.addEventListener('click' , ()=>{
    if (menu_is_open = true){
        header_popup.classList.remove('header_popup--open');
        header_line.classList.remove('header_line--open');
        header_hamIco.classList.remove('header_hamIco--open');
        header_close.classList.toggle('header_close--open');
        menu_is_open = false;
    }
}, true)

$(window).on(
    'DOMMouseScroll mousewheel', 
    _.throttle(
       onScroll, 
       1000, 
       {trailing: false}
    )
  );  
  function onScroll () {
    if (menu_is_open = true){
        header_popup.classList.remove('header_popup--open');
        header_line.classList.remove('header_line--open');
        header_hamIco.classList.remove('header_hamIco--open');
        header_close.classList.toggle('header_close--open');
        menu_is_open = false;
    }
  }
 
//index
