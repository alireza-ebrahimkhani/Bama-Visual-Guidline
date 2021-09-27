let index = document.querySelector('.index');
let toolBar_wrapper = document.querySelector('.toolBar_wrapper');   
let sideBar = document.querySelector('.sideBar');  
let index_title = document.querySelector('.index_title');
let index_nav = document.querySelector('.index_nav');


if( window.outerWidth <= 1024){
    toolBar_wrapper.appendChild(index);
    index_title.addEventListener('click' , ()=>{
    index_nav.classList.toggle('index_nav--open');
    index_title.classList.toggle('index_title--open');
})
}else{
    sideBar.appendChild(index);
    index_title.innerHTML= 'contents';
}

window.addEventListener('scroll', ()=>{
    if( window.outerWidth <= 1024){
    let active_link = document.querySelector('.is-active-link');
    //index_nav.classList.remove('index_nav--open');
    //index_title.classList.remove('index_title--open');
    index_title.innerHTML=active_link.innerHTML;
    }else{
        index_title.innerHTML= 'contents';
    }
})
window.addEventListener("resize" , function(){ 
    if( window.outerWidth <= 1024){
        toolBar_wrapper.appendChild(index);
        
        index_title.addEventListener('click' , ()=>{
            index_nav.classList.toggle('index_nav--open');
        })
    }else{
        sideBar.appendChild(index);
        index_title.innerHTML= 'contents';
    }
});