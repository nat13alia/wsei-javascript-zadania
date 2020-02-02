document.addEventListener("DOMContentLoaded", function(e){
    let imgs = document.getElementsByTagName("li");
    let body = document.querySelector("body");
  
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", function(e){
        var newDiv = document.createElement("div");
        newDiv.classList.add("fullScreen");
  
        var newImg = document.createElement("img");
        var imgSrc = this.firstElementChild.getAttribute("src");
        newImg.setAttribute("src", imgSrc);
  
        var newBtn = document.createElement("button");
        newBtn.classList.add("close");
        newBtn.innerHTML = "Back to gallery";
  
        newBtn.addEventListener("click", function(e){
          body.removeChild(newDiv);
        });
  
        newDiv.appendChild(newImg);
        newDiv.appendChild(newBtn);
  
        body.appendChild(newDiv);
      });
    }
  });

  
 