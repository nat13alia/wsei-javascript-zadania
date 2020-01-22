document.addEventListener('DOMContentLoaded', function(e){
    let buttons = document.getElementsByTagName("button");
    var counter = document.querySelector(".counter");

    for (let b of buttons) {
      b.addEventListener("click", function(e){
        counter.innerHTML++;
      });
    }
});