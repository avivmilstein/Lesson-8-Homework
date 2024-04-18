// Q1 DOM

function getFullName(str) {
  //   debugger;
  let fullName = str;
  let space = fullName.indexOf(" ");
  const mainDiv = document.getElementById("main-div");
  const firstName = document.createElement("p");
  const lastName = document.createElement("p");
  firstName.textContent = fullName.substring(0, space);
  lastName.textContent = fullName.substring(space, fullName.length);
  firstName.style.color = "red";
  firstName.style.textDecoration = "underline";
  lastName.style.fontSize = "50px";
  lastName.style.border = "1px solid black";
  mainDiv.append(firstName, lastName);
}
getFullName("Aviv milstein");

// Q2 DOM

const forSellProducts = [
  { name: "Computer", description: "MacBook 13 air", price: 7000 },
  { name: "TV", description: "Smart TV by Samsung", price: 4000 },
  { name: "Iphone", description: "model 15 by Apple", price: 3500 },
  { name: "Microwave", description: "by Electra", price: 500 },
  { name: "fridge", description: "by LG", price: 4500 },
];

const filterPrices = () => {
  const priceTyped = document.getElementById("max-price").value;
  const afterFilter = forSellProducts.filter(
    (value) => value.price <= priceTyped
  );
  const mainDiv = document.getElementById("products");
  mainDiv.innerHTML = " ";
  afterFilter.forEach((product) => {
    const productDiv = document.createElement("div");
    console.log(product);
    productDiv.textContent = ` ${product.name} ${product.description} ${product.price}`;
    mainDiv.append(productDiv);
  });
};

// Q3 Class

class Drive {
  constructor(name, date, distance) {
    this.name = name;
    this.date = date;
    this.distance = distance;
  }
  getDistance() {
    console.log("this.distance", this.distance);
    return this.distance;
  }
}

class Car {
  driveArr = [];
  constructor(company, model, available, kilometrage) {
    this.company = company;
    this.model = model;
    this.available = available;
    this.kilometrage = kilometrage;
  }

  addRide(Drive) {
    this.driveArr.push(Drive);
    this.kilometrage += Drive.distance;
  }

  getKilometersSum() {
    this.driveArr.forEach((element) => {
      this.kilometrage += element.distance;
    });
  }
}

const aviv = new Drive("Aviv", "10.05.1988", 300);
const yotam = new Drive("Yotam", "11.05.1988", 400);
const teslaCar = new Car("Tesla", "X", true, 0);
const audiCar = new Car("Audi", "Q3", true, 0);
const susitaCar = new Car("Susita", "Q", false, 30000);
aviv.getDistance();
yotam.getDistance();
teslaCar.addRide(aviv);
teslaCar.addRide(yotam);
teslaCar.getKilometersSum();

class Company {
  allCars = [];
  mosrDrivenCar = 0;

  constructor(name) {
    this.name = name;
  }

  addCar(Car) {
    this.allCars.push(Car);
    // console.log(this.allCars)
  }

  getMostDrivenCar() {
    // debugger
    let highestKilometr = 0;
    console.log("allCars", this.allCars.length);
    this.allCars.forEach((car, index) => {
      for (let i = 0; i < this.allCars.length; i++) {
        let mostDrivenCar = this.allCars[index].kilometrage;
        let otherCars = this.allCars[i].kilometrage;
        if (mostDrivenCar > otherCars) {
          highestKilometr = mostDrivenCar;
        } else if (mostDrivenCar < otherCars) {
          return;
        }
      }
      console.log("highestKilometr", highestKilometr);
    });
    return highestKilometr;
  }

  getAvailableCars() {
    for (let i = 0; i < this.allCars.length; i++) {
      let availableCar = this.allCars[i];
      if (availableCar.available) {
        console.log(availableCar);
      }
    }
  }

  addDriveToCar(name, ride) {
    // debugger
    for (let i = 0; i < this.allCars.length; i++) {
      if (this.allCars[i].company == name) {
        this.allCars[i].addRide(ride);
        console.log("name", name, "ride", ride);
        console.log("this.allCars[i]", this.allCars[i].driveArr.length);
      }
    }
  }
}

const autoTel = new Company("AutoTel");
autoTel.addCar(teslaCar);
autoTel.addCar(audiCar);
autoTel.addCar(susitaCar);
autoTel.getMostDrivenCar();
autoTel.getAvailableCars();
autoTel.addDriveToCar("Audi", aviv);
autoTel.addDriveToCar("Audi", yotam);
console.log(audiCar);
