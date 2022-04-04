const objPerson = {
    name: ["Smith", "Tom"],
    age: 32,
    gender: "Male",
    hobby: ["music", "playing"],
    funcPersonDetails: function() {
        console.log(this.gender)
    }
}

objPerson.gender = "human";

// objPerson.funcPersonDetails();

function person(name, surname){
  var personName = name;
  var lastName = surname;
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}


function people(name, price){
    Product.call(this, name, price);
}
console.log(new people('cheese', 5).name);


const objPeople = new people();
console.log("======================")
console.log(objPeople.personName);

person.prototype.alterDisplayname = function(){
    return this.name;
}

const personObj = new person("santanu");


function Vehicle() {
    this.amount = 1000;
  }
  
  function Car() {
     Vehicle.call(this); //calling the Vehicle function and bind the properties to this (or where the inheritance is really effectuated)
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  var car = new Car();
  
  console.log(car.amount);
// console.log(personObj.alterDisplayname())

// console.log(personObj);


// Compare Shallow and Deep cloning

const obj1 = {
    a: 10,
    b: 20
}

const obj2 = obj1;

console.log("obj1", obj1);
console.log("obj2", obj2);

obj2.b = 40;

console.log("obj1", obj1);
console.log("obj2", obj2);

const obj4 = Object.create(obj1);
console.log("obj4", obj4);

const obj5 = {...obj1};
console.log("obj5", obj5);

obj5.b = 50;
console.log("obj1", obj1);
console.log("obj5", obj5);


const obj6 = JSON.parse(JSON.stringify(obj1));
obj6.b = 60;
console.log("obj6", obj6);