import IAirCraftVehicle from "../../Aerial/Interfaces/IAirCraftVehicle";
import ILandVehicle from "../../Land/Interfaces/ILandVehicle";

export default interface ITransportFactory {
  createTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAirCraftVehicle;
}