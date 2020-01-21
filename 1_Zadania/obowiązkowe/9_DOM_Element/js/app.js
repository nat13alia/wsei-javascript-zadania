document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children; // tablica
    var banner = document.querySelector(".ban"); 
    var blocks = document.querySelectorAll(".block"); // tablica
    var links = document.querySelector(".links").children; // tablica

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0
    let getDatasInfo = function(elements){
        let tab = [];

        for(let i = 0; i < elements.length; i++) {
            tab.push(elements[i].dataset.color);
        }

        return tab;
    }
    console.log(getDatasInfo(links));

    // Zadanie 1
    console.log('home element - TAG NAME: ' + homeElement.tagName + 
                 ', CLASS NAME: ' + homeElement.classList);
    
    for(let i = 0; i < childElements.length; i++){
        console.log('child element no. ' + i +  ' - TAG NAME: ' + childElements[i].tagName + ', CLASS NAME: ' + childElements[i].classList);
    }

    console.log('banner - TAG NAME: ' + banner.tagName + 
                 ', CLASS NAME: ' + banner.classList);
    
    for(let i = 0; i < blocks.length; i++){
        console.log('block no. ' + i +  ' - TAG NAME: ' + blocks[i].tagName + ', CLASS NAME: ' + blocks[i].classList);
    }
    
    for(let i = 0; i < links.length; i++){
        console.log('link no. ' + i +  ' - TAG NAME: ' + links[i].tagName + ', CLASS NAME: ' + links[i].classList);
    }

    // Zadanie 2
    for(let i = 0; i < blocks.length; i++){
        console.log('block no. ' + i +  ' - innerHTML: ' + blocks[i].innerHTML + ', outerHTML: ' + blocks[i].outerHTML);
    }
    // innerHTML => wyświetla kod HTML znajdujący się wewnątrz danego elementu
    // outerHTML => wyświetla kod HTML znajdujący się wewnątrz danego elementu oraz dany element

    // Zadanie 3
    let mainFooter = document.querySelector('#mainFooter')

    function getId(element) {
        let id = element.getAttribute('id');
        return id;
    }
    getId(mainFooter);
    console.log(getId(mainFooter));

    // Zadanie 4
    function getTags(elements) {
        let tab = [];

        for(let i = 0; i < elements.length; i++){
            tab.push(elements[i].tagName);
        }
        return tab;
    }
    getTags(childElements);
    console.log(getTags(childElements));

    // Zadanie 5
    function getClassInfo(element) {
        let elementClasses = element.classList;
        let listOfClasses = [];
 
        for (let i = 0; i < elementClasses.length; i++) {
            listOfClasses.push(elementClasses[i]);
        }
 
        return listOfClasses;
    }
    getClassInfo(banner);
    console.log(getClassInfo(banner));

    // Zadanie 6
    const allLisWithinNav = document.querySelectorAll('nav li');
    function setDataDirection(elements){
        for(let i = 0; i < elements.length; i++){
            if(elements[i].dataset.direction == undefined){
                // elements[i].dataset.direction == "top";
                elements[i].setAttribute('data-direction', 'top');
            }
        }
    }
    setDataDirection(allLisWithinNav);
});
