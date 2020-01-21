document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0
    const ex5 = document.querySelectorAll('.ex5 li');
    
    for(let i = 0; i < ex5.length; i += 2){
        ex5[i].style.background = 'green';
    }

    ex5[4].classList.add('big');

    for(let i = 0; i < ex5.length; i += 3){
        ex5[i].style.textDecoration = 'underline';
    }

    // Zadanie 1

    let chrome = document.querySelector('.chrome');
    let edge = document.querySelector('.edge');
    let firefox = document.querySelector('.firefox');

    edge.style.backgroundImage = 'url(./assets/img/edge.png)';
    firefox.style.backgroundImage = 'url(./assets/img/firefox.png)';

    chrome.nextElementSibling.setAttribute('href', 'http://www.google.com');
    edge.nextElementSibling.setAttribute('href', 'http://www.edge.com');
    firefox.nextElementSibling.setAttribute('href', 'http://www.firefox.com');

    chrome.nextElementSibling.innerHTML = 'Chrome';
    firefox.nextElementSibling.innerHTML = 'Firefox';

    chrome.style.width = '100px';

    // Zadanie 2
    const name = document.querySelector('#name');
    const favColor = document.querySelector('#fav_color');
    const favMeal = document.querySelector('#fav_meal');

    name.innerHTML = 'Natalia Krawczyk';
    favColor.innerHTML = 'blue';
    favMeal.innerHTML = 'spaghetti';

    // Zadanie 3
    const ul = document.querySelector('.ex3 ul');

    ul.classList.add('menu');

    for(let i = 0; i < ul.children.length; i++){
        ul.children[i].classList.add('menuElement');
        ul.children[i].classList.remove('error');
    }

    // Zadanie 4
    let ex4 = document.querySelectorAll('.ex4 li');
    for(let i = 0; i < ex4.length; i++){
        ex4[i].setAttribute('data-id', i+1)
    }

    
});