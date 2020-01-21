let parentElements = document.getElementsByClassName('parent');

// Zadanie 0a
for(let i = 0; i < parentElements.length; i++){
    parentElements[i].addEventListener('mouseenter', function(e){
        this.children[0].style.display = "block";
    });

    parentElements[i].addEventListener('mouseleave', function(e){
        this.children[0].style.display = "none";
    });
}


// Zadanie 0b
for(let i = 0; i < parentElements.length; i++){
    parentElements[i].addEventListener('mouseleave', function(){
        function hideChildrenElement(element){
            element.firstElementChild.style.display = "none";
        }

        hideChildrenElement(this);
    });
}

