document.addEventListener("DOMContentLoaded", function(){
    let prev = document.getElementById("prevPicture");
    let next = document.getElementById("nextPicture");
    let imgs = document.getElementsByTagName("li");
    let picIndex = 0;
  
    imgs[picIndex].classList.add("visible");
  
    prev.addEventListener("click", function(){
        imgs[picIndex].classList.remove("visible");
        picIndex--;
  
      if (picIndex < 0) {
        picIndex = imgs.length - 1;
      }
  
      imgs[picIndex].classList.add("visible");
    });
  
    next.addEventListener("click", function(){
        imgs[picIndex].classList.remove("visible");
        picIndex++;
  
      if (picIndex >= imgs.length) {
        picIndex = 0;
      }
  
      imgs[picIndex].classList.add("visible");
    })
  
  });