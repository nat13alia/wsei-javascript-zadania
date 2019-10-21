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
