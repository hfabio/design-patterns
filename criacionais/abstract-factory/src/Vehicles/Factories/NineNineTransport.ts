import IAirCraftVehicle from "../Aerial/Interfaces/IAirCraftVehicle";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";
import ITransportFactory from "./Interfaces/ITransportFactory";
import Motorcycle from '../Land/Motorcycle';
import Airplane from '../Aerial/Airplane';

export default class NineNineTransport implements ITransportFactory{
  createTransportVehicle(): ILandVehicle {
    return new Motorcycle();
  }
  createTransportAircraft(): IAirCraftVehicle {
    return new Airplane()
  }
  
}