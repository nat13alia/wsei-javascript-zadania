// Zadanie 0

// 1.
const elementWithFirstClass = document.querySelector('.first');
let firstChild = elementWithFirstClass.firstElementChild;
let thirdChild = firstChild.children[2];

console.log(thirdChild);

// 2. 
const elementWithIdSecond = document.querySelector('#second');
let parentElement = elementWithIdSecond.parentElement;
let fourthChild = parentElement.children[3];

console.log(fourthChild);

// 3.
let elementWithExDataAttr = document.querySelector('[data-ex="third"]')
let grandfather = elementWithExDataAttr.parentElement.parentElement;
let lastChild = grandfather.children[grandfather.children.length - 1];
let firstChildOfLastChild = lastChild.firstElementChild;
let mediumChild = firstChildOfLastChild.children[Math.floor(firstChildOfLastChild.children.length/2)];

console.log(mediumChild);

// 4. 
let divWithClassForth = document.querySelector('div.forth');
let parentOfDiv = divWithClassForth.parentElement;
let firstChildWithArticle;

for(let i = 0; i < parentOfDiv.children.length; i++){
    if(parentOfDiv.children[i].tagName == "ARTICLE"){
        firstChildWithArticle = parentOfDiv.children[i];
        break
    }
}

let secondChildWithP;
let counter = 0;

for(let i = 0; i < firstChildWithArticle.children.length; i++){
    if(firstChildWithArticle.children[i].tagName == "P"){
        counter++;
        if(counter == 2){
            secondChildWithP = firstChildWithArticle.children[i];
        }
    }
}

console.log(secondChildWithP);

