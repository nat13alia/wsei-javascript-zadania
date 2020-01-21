/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Deklaracja funkcji "jeden"
function jeden() {

    // Deklaracja wraz z inicjalizacją zmiennej "zmienna1" dostępnej dla funkcji "jeden" oraz każdej innej funkcji, która jest w niej zagnieżdżona
    var zmienna1 = 1;

    //Deklaracja funkcji "dwa"
    function dwa() {

        // Wypisanie w konsoli zmiennej "zmienna1" z poziomu funkji "dwa"
        console.log(zmienna1);

        // Deklaracja wraz z inicjalizacją zmiennej "zmienna2"
        var zmienna2 = 3;
    }

    // Wywołanie funkcji 2
    dwa();

    // Wypisanie zawartości zmiennej "zmienna2" z poziomu funkcji "jeden"; ponieważ funkcja "jeden" nie ma dostępu do zmiennych lokalnych funkcji "dwa", która jest w niej zagnieżdżona, operacja ta nie powiedzie się
    console.log(zmienna2)
}

// Wywołanie funkcji "jeden", w consoli pojawi się błąd
jeden()