document.addEventListener("DOMContentLoaded", function(e){
    var windowWidth = document.getElementById("windowWidth");
    var windowHeight = document.getElementById("windowHeight");
  
    windowWidth.innerHTML = window.innerWidth;
    windowHeight.innerHTML = window.innerHeight;
  
    window.addEventListener("resize", function(e){
      windowWidth.innerHTML = window.innerWidth;
      windowHeight.innerHTML = window.innerHeight;
    });
  });