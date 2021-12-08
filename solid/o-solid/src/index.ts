// O - Open/Closed principle (Open to extend and closed to modify)

import TypeVehicle from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const type = TypeVehicle.MOTORCYCLE;
let vehicle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car('black', 2020, 2.0, 5, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle('black', 2020, 500);
} else {
  console.log('??')
}