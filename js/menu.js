'use strict';

  const burgerEl = document.querySelector('.js-burger');
  const menu = document.querySelector('.js-sidebar');
  
  burgerEl.onclick = (event) => {
    event.preventDefault();
    menu.classList.toggle('visible');
    burgerEl.classList.toggle('close');
  }

