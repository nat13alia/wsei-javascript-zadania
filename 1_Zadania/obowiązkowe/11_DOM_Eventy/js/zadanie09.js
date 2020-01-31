document.addEventListener("DOMContentLoaded", function () {
  var a = document.getElementById("a");
  var b = document.getElementById("b");

  // Tutaj this wskazuje na obiekt document (Ponieważ kontext wywołania funkcji addEventListener to właśnie document)
  console.log("obiekt document: ", this);

  a.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id a
    console.log("a: ", this);
  });

  b.addEventListener("click", function (event) {
    // Tutaj this wskazuje na element DOM o id b
    console.log("b: ", this);

    function innerFuncOne(b) {  
      // b jest przekazane jako argument funkcji za pomocą parametru
        b.style.backgroundColor = "blue"; // zmiana backgroundColor dla przekazanego do funkcji poprzez parametr argumentu
        console.log("innerFuncOne: ", b.style.backgroundColor); // wyświetla informację
      }
      innerFuncOne(this); // this wskazuje na parametr funkcji - element b
  });

})
