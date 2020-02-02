document.addEventListener("DOMContentLoaded", function(){
  var btn = document.getElementById('remove');

  var list = document.querySelector(".list");

  btn.addEventListener("click", function() {
    var childrenCounter = list.children.length;

    for (var i = 0; i < childrenCounter; i++) {
      list.removeChild(list.firstElementChild);
    }
  });
});