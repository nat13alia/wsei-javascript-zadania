  document.addEventListener("DOMContentLoaded", function() {
    var formControl = document.querySelector(".form-control");
    var btn = document.querySelector("button");
    var imgs = document.getElementsByTagName("img");

    showSelectedSystem();
  
    imgs[0].setAttribute("alt", "Os X");
  
    formControl.addEventListener("click", function() {
        showSelectedSystem();
    })
  
    function showSelectedSystem() {
      for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].getAttribute("alt") == formControl.value) {
            imgs[i].style.display = "block";
        } else {
            imgs[i].style.display = "none";
        }
      }
    }
  
  });