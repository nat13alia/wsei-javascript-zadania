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
        newArr.push(Math.abs(item - avg));
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

// Zadanie 3

function printTable(array) {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printTable(["a", "b", "c", "d", "e"]);

// Zadanie 4

function multiply(array) {
    let mulRes = array[0];
    for(let i = 1; i < array.length; i++){
        mulRes *= array[i];
    }
    console.log(mulRes);
    return mulRes;
}

multiply([1,2,3,4,5,6,7]);
multiply([1,1,1,1]);
multiply([2,8,3,7]);

// Zadanie 5

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
}

console.log(getEvenAverage([1,2,3,4,5,6,7]));
console.log(getEvenAverage([1,1,1,1]));
console.log(getEvenAverage([2,8,3,7,4]));

// Zadanie 6
function sortArray(array) {
    array.sort((a, b) => a-b);
    console.log(array);
    return array;
}

sortArray([145,11,3,64,4,6,10])

// Zadanie 7
function addArrays(arr1, arr2){
    let arrSum = [];
    if (arr1.length > arr2.length) {
        for(let i = 0; i < arr2.length; i++){
            arrSum[i] = arr1[i] + arr2[i];
        }

        for(let i = arr2.length; i < arr1.length; i++){
            arrSum[i] = arr1[i];
        }
    } else if (arr1.length == arr2.lengt) {
        for(let i = 0; i < arr1.length; i++){
            arrSum[i] = arr1[i] + arr2[i];
        }
    } else {
        for(let i = 0; i < arr1.length; i++){
            arrSum[i] = arr1[i] + arr2[i];
        }

        for(let i = arr1.length; i < arr2.length; i++){
            arrSum[i] = arr2[i];
        }
    }
    console.log(arrSum);
    return arrSum;
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);






