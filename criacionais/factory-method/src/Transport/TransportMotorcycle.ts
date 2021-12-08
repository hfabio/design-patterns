import Transport from "./Transport";
import IVehicle from "./Vehicles/Interfaces/IVehicle";
import Motorcycle from "./Vehicles/Motorcycle";

export default class TransportMotorcycle extends Transport {

  protected createTransport(): IVehicle{
    return new Motorcycle();
  }

}