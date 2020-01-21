
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Deklaracja funkcji "sortArray"
function sortArray() {

    // Deklaracja wraz z inicjalizacją tablicy 
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Wywołanie funkcji "sort" na tablicy "points"
    // Funkcja "sort" przyjmuje jako parametr funkcję porównującą
    // Jeżeli funkcja porównująca nie jest podana to elementy zostaną posortowane leksykograficznie (czyli np. 41 przed 6)
    points.sort(function (a, b) {
        // Zwrócenie różnicy a - b
        return a - b;
    });

    // Zwrócenie posortowanej tablicy
    return points;  
}

// Wywołanie funkcji "sortArray"
sortArray();
