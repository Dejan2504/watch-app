'use strict';

const body = document.querySelector('body');
const timeContainer = document.querySelector('.time');
const dateContainer = document.querySelector('.date');

const updateTime = function(){
    const date =  new Date();
    
    timeContainer.innerHTML = date.toLocaleTimeString();
    dateContainer.innerHTML = date.toLocaleDateString();

    if(date.getHours < 7 && date.getHours > 18){
        body.style.backgroundImage = 'url(img/biel-morro-J_F_003jcEQ-unsplash.jpg)';
        timeContainer.style.color = 'white';
        dateContainer.style.color = 'white';
    } else{
        body.style.backgroundImage = 'url(img/diana-serbichenko-5dpSx2hBtj0-unsplash.jpg)';
        timeContainer.style.color = '#fefbd8';
        dateContainer.style.color = '#fefbd8';
    }
};

setInterval(updateTime, 1000);