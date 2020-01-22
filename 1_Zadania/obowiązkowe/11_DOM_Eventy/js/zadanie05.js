document.addEventListener('DOMContentLoaded', function(e){
    let divs = document.getElementsByTagName('div');

    for(let i = 0; i < divs.length; i++){
        divs[i].addEventListener('click', function(e){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    }
});