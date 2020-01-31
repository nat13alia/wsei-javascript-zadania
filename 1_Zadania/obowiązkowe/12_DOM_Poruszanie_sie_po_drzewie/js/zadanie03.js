document.addEventListener("DOMContentLoaded", (event) => {
    let divs = document.getElementsByTagName("div");
  
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseenter", function(event) {
            this.firstElementChild.firstElementChild.style.background = "#FF0000";this.firstElementChild.lastElementChild.style.background = "#0000FF";
            
            for (let j = 1; j < this.firstElementChild.children.length - 1; j++) {
                this.firstElementChild.children[j].style.background = "#00FF00";
        }
      });
    }
  });


