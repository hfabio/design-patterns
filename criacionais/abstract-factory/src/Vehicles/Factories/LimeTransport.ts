import Drone from "../Aerial/Drone";
import IAirCraftVehicle from "../Aerial/Interfaces/IAirCraftVehicle";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";
import Scooter from "../Land/Scooter";
import ITransportFactory from "./Interfaces/ITransportFactory";

export default class LimeTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Scooter();
  }
  createTransportAircraft(): IAirCraftVehicle {
    return new Drone();
  }

}