import Transport from "./Transport";
import IVehicle from "./Vehicles/Interfaces/IVehicle";
import Bicycle from "./Vehicles/Bicycle";

export default class TransportBicycle extends Transport {

  createTransport(): IVehicle {
    return new Bicycle();
  }
  
}