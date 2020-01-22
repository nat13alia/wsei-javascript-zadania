document.addEventListener('DOMContentLoaded', function(e) {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})


// 1. Po przeniesieniu tagu <script> do sekcji <head> w konsoli pojawia się błąd: Uncaught TypeError: Cannot read property 'classList' of null
// Wynika to z faktu iż umieszczając kod w tagu <head> powoduje to jego egzekucję, jeszcze zanim doszło do utworzenia elementów tagu <body>

// 2. Po umieszczeniu kodu wewnątrz eventu DOMContentLoaded błąd znika, gdyż kod wykonuje się po załadowaniu treści dokumentu

// 3. Po przeniesieniu tagu <script> z powrotem na koniec pliku, nie ma żadnej różnicy, kod wykonuje się poprawnie.