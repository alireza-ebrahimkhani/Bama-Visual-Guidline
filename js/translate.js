let toolBar_transSwitch = document.querySelector(".toolBar_transSwitch");
let toolBar_transPin = document.querySelector(".toolBar_transPin");
function toggleSwitch() {
  toolBar_transSwitch.classList.toggle("toolBar_transSwitch--active");
  toolBar_transPin.classList.toggle("toolBar_transPin--active");
  var fa = document.querySelectorAll(".fa");
  fa.forEach((eachFa) => {
    eachFa.classList.toggle("fa--show");
  });
}
