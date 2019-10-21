// Zadanie 0

const distFromAvarage = (arr) => {
    let avg = 0;
    let sum = 0;
    arr.forEach(item => {
        sum += item;  
    });

    avg = sum / arr.length;
    let newArr = [];

    arr.forEach(item => {
        newArr.push(item - avg);
    });
    console.log(newArr);
    return newArr;
}

distFromAvarage([1,2,3,4,5,6,7]);
distFromAvarage([1,1,1,1]);
distFromAvarage([2,8,3,7]);

// Zadanie 1

const fruits = ["apple", "orange", "banana", "apricot", "strawberry"];

console.log(fruits[0]);

console.log(fruits[fruits.length - 1]);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


