document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     // Zadanie 0
     const title = document.querySelector('.title');
     function getDataAnimation(element){
         let elAnim = element.dataset.animation;
         return elAnim;
     }
     console.log(getDataAnimation(title));

     // Zadanie 1
     const elWithhomeId1 = document.getElementById('home');
     console.log(elWithhomeId1);

     const elWithhomeId2 = document.querySelector('#home');
     console.log(elWithhomeId2);

     const firstLiWithDataDirectionAttr = document.querySelector('li[data-direction]')
     console.log(firstLiWithDataDirectionAttr);
     
     const firstWithBlockClass = document.querySelector('.block');
     console.log(firstWithBlockClass);

     // Zadanie 2
     const allLisWithinNav = document.querySelectorAll("nav li");
     console.log(allLisWithinNav);

     const allParagraphsWithinDivs = document.querySelectorAll("div p");
     console.log(allParagraphsWithinDivs);

     const allDivsWithinArticles = document.querySelectorAll("article div");
     console.log(allDivsWithinArticles);

     // Zadanie 3
    let articlesWithFirstClass = document.querySelectorAll('article.first');
    console.log(articlesWithFirstClass);

    for(let i = 0; i < articlesWithFirstClass.length; i++){
         let h1s = articlesWithFirstClass[i].getElementsByTagName('h1');
         console.log(h1s.length);
     }
});
