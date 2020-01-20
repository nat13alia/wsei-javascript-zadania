// Zadanie 0a
let country = {
    capital: 'Warsaw',
    population: 38000000,
    president: 'A. Duda',
    primeMinisters: ['M. Morawiecki']
}
console.log(country.capital);
console.log(country.population);
console.log(country.president);
console.log(country.primeMinisters);

// Zadanie 0b

let timeMachine = {
    shape: 'rectangle',
    model: 'MXY',
    run: function(date, place) {
        console.log(`You've just got back in time to ${date} ${place}.`);
    }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run('06-13-1996', 'London');

// Zadanie 1
let book = {
    name: 'Harry Potter and the Goblet of Fire',
    author: 'J.K.Rowling',
    numberOfPages: 895
}

console.log(book.name);
console.log(book.author);
console.log(book.numberOfPages);

// Zadanie 2 
person = {
    name: 'Natalia',
    age: 23,
    sayHello: function(){
        console.log('hello');
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

// Zadanie 3
let recipe = {
    title: 'Spaghetti Bolognese',
    servings: 0
}

recipe.ingredients = ['pasta', 'onion', 'tomato sauce', 'minced meat'];

console.log('Title: ' + recipe.title);
console.log('Number of servings: ' + recipe.servings);
console.log('Ingredients: ' + recipe.ingredients);

// Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);