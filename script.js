'use strict';

const body = document.querySelector('body');
const timeContainer = document.querySelector('.time');
const dateContainer = document.querySelector('.date');

const updateTime = function(){
    const date =  new Date();
    
    timeContainer.innerHTML = date.toLocaleTimeString();
    dateContainer.innerHTML = date.toLocaleDateString();

    if(date.getHours() < 7 || date.getHours() > 18){
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80)';
        timeContainer.style.color = 'white';
        dateContainer.style.color = 'white';
    } else{
        body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1659342313448-3f5115622e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)';
        timeContainer.style.color = '#fefbd8';
        dateContainer.style.color = '#fefbd8';
    }
};

setInterval(updateTime, 1000);