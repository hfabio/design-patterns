import Transport from "./Transport";
import Car from "./Vehicles/Car";
import IVehicle from "./Vehicles/Interfaces/IVehicle";

export default class TransportCar extends Transport {

  protected createTransport(): IVehicle {
    return new Car();
  }

}