// JavaScript Document

  let accordion = document.querySelectorAll(".accordion");
  accordion.forEach(thisAccordion => {
    let accordion_header = thisAccordion.querySelectorAll(".accordion_header");
    let accordion_body = thisAccordion.querySelectorAll(".accordion_body");
    //let accordion_item = thisAccordion.querySelectorAll(".accordion_item");
	let accordion_lineII = thisAccordion.getElementsByClassName("accordion_lineII");
		
    accordion_header.forEach(thisAccordion_header => {
			let accordion_icon = document.createElement("DIV"); 
			accordion_icon.classList.add('accordion_icon');
			let accordion_lineI = document.createElement("DIV"); 
			accordion_lineI.classList.add('accordion_lineI');
			let accordion_lineII = document.createElement("DIV");
			accordion_lineII.classList.add('accordion_lineII')
			accordion_icon.appendChild(accordion_lineI);
			accordion_icon.appendChild(accordion_lineII);
			thisAccordion_header.appendChild(accordion_icon);
    });
    accordion_header.forEach(thisAccordion_header => {
      thisAccordion_header.addEventListener('click', function () {
			if (thisAccordion_header.nextElementSibling.classList.contains('accordion_body--active'))	{
				this.nextElementSibling.classList.remove('accordion_body--active');
				this.lastChild.lastChild.classList.remove('accordion_lineII--open');
			} else{
				for(let i = 0; i < accordion_lineII.length; i++ ){
					accordion_lineII[i].classList.remove('accordion_lineII--open');
				}
				accordion_body.forEach(thisAccordion_body => {
          thisAccordion_body.classList.remove('accordion_body--active');
					});
				this.nextElementSibling.classList.add('accordion_body--active');
				this.lastChild.lastChild.classList.add('accordion_lineII--open');
				}
      });
  });
  });

