
let calculator_submit = document.querySelector('.calculator_submit');
let calculator_item = document.querySelectorAll('.calculator_item');
let calculator_artboard = document.querySelector('.calculator_artboard');

calculator_submit.addEventListener('click' , ()=>{
    let calculator_width = document.querySelector('.calculator_width').value;
    let calculator_height = document.querySelector('.calculator_height').value;
    let calculator_figure = document.querySelectorAll('.calculator_figure > img');
    calculator_figure.forEach(thisfigure =>{
        thisfigure.style.display = 'none';
    })
    let ratio = calculator_width / calculator_height;
    let sSide;
    if(ratio > 1.33){
        calculator_figure[1].style.display = 'block';
        sSide = calculator_height;
    }else if(ratio < 0.75){
        calculator_figure[2].style.display = 'block';
        sSide = calculator_width;
    }else{
        calculator_figure[0].style.display = 'block';
        sSide = calculator_height;
    }
    let bwmUnit=sSide * 0.07;
    calculator_item[0].innerHTML = Math.floor(bwmUnit * 1);
    calculator_item[1].innerHTML = Math.floor(bwmUnit * 1.75);
    calculator_item[2].innerHTML = Math.floor(bwmUnit * 1.2);
    calculator_item[3].innerHTML = Math.floor(bwmUnit * 0.8);
    calculator_item[4].innerHTML = Math.floor(bwmUnit * 0.65); 
    calculator_item[5].innerHTML = Math.floor(bwmUnit * 0.45);
    calculator_item[6].innerHTML = Math.floor(bwmUnit * 0.35);
    calculator_item[7].innerHTML = Math.floor(bwmUnit * 0.6);
    calculator_item[8].innerHTML = Math.floor(bwmUnit * 0.35);
    calculator_item[9].innerHTML = Math.floor(bwmUnit * 0.25);
    calculator_item[10].innerHTML = Math.floor(bwmUnit * 0.20);
});
