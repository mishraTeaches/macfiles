let instance;
class Car {
  constructor(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  toString() {
    // return `${this.model} has done ${this.miles} miles`;
    console.log(this);
  }
}

// Usage:

// We can create new instances of the car
let civic = new Car("Honda Civic", 2009, 20000);
let mondeo = new Car("Ford Mondeo", 2010, 5000);

// and then open our browser console to view the output of
// the toString() method being called on these objects
//console.log(civic.toString());
mondeo.toString();
