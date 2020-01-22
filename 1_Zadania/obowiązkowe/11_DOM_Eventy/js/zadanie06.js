document.addEventListener("DOMContentLoaded", (event) => {
    var gX = document.getElementById("globalX");
    var gY = document.getElementById("globalY");
    var lX = document.getElementById("localX");
    var lY = document.getElementById("localY");
  
    var div = document.querySelector("div");
  
    div.addEventListener("mousemove", (event) => {
      gX.innerHTML = event.clientX;
      gY.innerHTML = event.clientY;
      lX.innerHTML = event.offsetX;
      lY.innerHTML = event.offsetY;
    });
  });