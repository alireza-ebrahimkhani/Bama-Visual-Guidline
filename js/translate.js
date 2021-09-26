let sideBar_transSwitch = document.querySelector('.sideBar_transSwitch');
let sideBar_transPin = document.querySelector('.sideBar_transPin');
function toggleSwitch(){
    sideBar_transSwitch.classList.toggle('sideBar_transSwitch--active');
    sideBar_transPin.classList.toggle('sideBar_transPin--active');
    var fa = document.querySelectorAll(".fa");
    fa.forEach(eachFa => {
        eachFa.classList.toggle('fa--show');
    });
}


