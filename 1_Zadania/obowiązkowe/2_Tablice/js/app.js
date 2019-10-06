// Zadanie 0
const distFromAverage = (arr) => {
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

distFromAverage([1,2,3,4,5,6,7])

// Zadanie 1

const fruits = ["apple", "orange","banana", "apricot", "strawberry"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.forEach(fruit => {
    console.log(fruit);
})

// Zadanie 3

// function

// Zadanie 4

function multiply(array) {
    let mulRes = array[0];
    for(let i = 1; i < array.length; i++){
        mulRes *= array[i];
    }
    console.log(mulRes);
    return 
}

multiply([1,2,3,4,5,6,7])

function getEvenAverage(array) {
    let evenSum = 0;
    let evenCounter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenSum += array[i];
            evenCounter++;
        }
    }
    let evenAvg = evenSum / evenCounter;
    if (evenCounter == 0){
        return null;
    }
    else {
        return evenAvg;
    }
    console.log(evenAvg);
}

getEvenAverage([1,2,3,4,5,6,7])
getEvenAverage([1,1,1,1])

// Zadanie 6
function sortArray(array) {
    array.sort((a, b) => a-b);
    console.log(array);
    return array;
}

sortArray([145,11,3,64,4,6,10])
