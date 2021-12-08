import IAirCraftVehicle from "../Aerial/Interfaces/IAirCraftVehicle";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";
import Car from '../Land/Car';
import Helicopter from '../Aerial/Helicopter';

export default class UberTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    return new Car();
  }
  createTransportAircraft(): IAirCraftVehicle {
    return new Helicopter();
  }
  
}