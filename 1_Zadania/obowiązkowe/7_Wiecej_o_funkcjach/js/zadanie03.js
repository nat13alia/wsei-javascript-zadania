czesc(); // funkcja wywołana poprawnie

function czesc(){
    console.log('cześć!');
}

czesc(); // funkcja wywołana poprawnie

funkcja(); // Cannot access 'funkcja' before initialization

let funkcja = function witaj(){
    console.log('witaj!');
}

funkcja(); // funkcja wywołana poprawnie

// Dla wyrażeń funkcyjnych nie jest możliwym wywowałnie ich przed ich deklaracją 

// Natomiast dla funkcji jest to możliwe