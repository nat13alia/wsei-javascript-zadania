// Zadanie 1

function countHello(number) {
    let counter = 1;
    let interval = setInterval(() => {
        if(counter == number){
            clearInterval(interval);
        }
        console.log('Hello', counter);
        counter++;
    }, 500)
}

countHello(5);
