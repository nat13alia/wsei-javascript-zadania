// Zadanie 0
car = {
    brand: 'Mercedes',
    color: 'Black',
    numberOfKilometers: 0,
    printCarinfo: function(){
        return this.color + ' ' + this.brand + ', ' + this.numberOfKilometers + 'km.';
    },
    drive: function(km){
        this.numberOfKilometers += km;
    }
}

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

// Zadanie 1
car.reviews = ['2018-09-04'];

car.addNewReview = function(date){
    this.reviews.push(date);
}

car.showReviews = function(){
    return this.reviews;
}

console.log(car.reviews);
car.addNewReview('2019-02-02');
console.log(car.showReviews());

// Zadanie 3
stairs = {
    step: 0,
    up: function(){
        this.step++;
    },
    down: function(){
        this.step--;
    },
    printStep: function(){
        console.log(this.step);
    },
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
