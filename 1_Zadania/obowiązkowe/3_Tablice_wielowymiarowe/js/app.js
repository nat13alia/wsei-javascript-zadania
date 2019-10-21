var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Zadanie 0
function checkArray(arr){
    let checked = [];
    for(let i = 0; i < arr.length; i++) {
        let check = true;
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j]%2 != 0){
                check = false;
                break;
            }
        }
        checked.push(check);
    }
    return checked;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];

console.log(checkArray(arr));

// Zadanie 1
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

// Zadanie 2

for(let i = 0; i < task2Array.length; i++){
    console.log(task2Array[i]);
}

for(let i = 0; i < task2Array.length; i++){
    console.log(task2Array[i].length);
}

for(let i = 0; i < task2Array.length; i++){
    for (let j = 0; j < task2Array.length; j++)
        console.log(task2Array[i][j]);
}

// Zadanie 3

function print2DArray(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

// Zadanie 4
var table = [ [1, 2], [0, 4, 6, 8], [4, 5, 6, 7, 8]];
print2DArray(table);



