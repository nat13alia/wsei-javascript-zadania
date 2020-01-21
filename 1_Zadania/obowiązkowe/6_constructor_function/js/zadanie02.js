// Zadanie 2
function Calculator(){
    this.historyOfOperations = [];
}

Calculator.prototype.add = function(num1, num2){
    let result = num1 + num2;
    this.historyOfOperations.push("Added " + num1 + " to " + num2 + ". Got result: " + result +".");
    return result;
}

Calculator.prototype.multiply = function(num1, num2){
    let result = num1 * num2;
    this.historyOfOperations.push("Multiplied " + num1 + " by " + num2 + ". Got result: " + result +".");
    return result;
}

Calculator.prototype.subtract = function(num1, num2){
    let result = num1 - num2;
    this.historyOfOperations.push("Subtracted " + num2 + " from " + num1 + ". Got result: " + result +".");
    return result;
}

Calculator.prototype.divide = function(num1, num2){ 
    let result;
    if(num2 != 0){
        result = num1/num2;
        this.historyOfOperations.push("Divided " + num1 + " by " + num2 + ". Got result: " + result +".");
        return result;
    } else {
        this.historyOfOperations.push("Cannot divide by 0!");
        return null;
    }
}

Calculator.prototype.printOperations = function(){
    for(let i = 0; i < this.historyOfOperations.length; i++){
        console.log(this.historyOfOperations[i]);
    }
}

Calculator.prototype.clearOperations = function(){
    this.historyOfOperations = [];
}

let myCalc = new Calculator();

myCalc.add(6, 3);
myCalc.multiply(6, 3);
myCalc.subtract(6, 3);
myCalc.divide(6, 3);
myCalc.divide(6, 0);
myCalc.printOperations();
myCalc.clearOperations();
myCalc.add(4, 5);
myCalc.printOperations();


