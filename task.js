function show(data) {
	console.log(data);
}

function Car(carName, brand, prodYear) {
	this.model = car;
	this.brandName = brand;
	this.productionYear = prodYear;
}

let brand = prompt("Enter brand name");
let carName = prompt("Enter model");
let prodYear = prompt("Enter production year");

let car = _.create(Car.prototype, {model: carName, brandName: brand, productionYear: prodYear});
show("Object: ");
show(car);

let carInvert = _.invert(car);
show("Inverted object: ")
show(carInvert);

let carPick = _.pick(car, 'brandName', 'productionYear');
let carOmit = _.omit(car, 'model');

show("Filtered by pick method: ");
show(carPick);
show("Filtered by omit method: ");
show(carOmit);