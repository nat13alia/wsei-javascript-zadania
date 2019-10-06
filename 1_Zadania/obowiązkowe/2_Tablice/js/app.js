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