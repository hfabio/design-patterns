import IAirCraftVehicle from "../Aerial/Interfaces/IAirCraftVehicle";
import { VehicleType } from "../Consts/Company";
import ITransportFactory from "../Factories/Interfaces/ITransportFactory";
import ILandVehicle from "../Land/Interfaces/ILandVehicle";


export default class Client {
  private vehicle: ILandVehicle;
  private aircraft: IAirCraftVehicle;
  
  constructor(factory: ITransportFactory){
    this.vehicle = factory.createTransportVehicle();
    this.aircraft = factory.createTransportAircraft();
  }

  startRoute(type: VehicleType): void {
    if(type === VehicleType.LAND){
      this.vehicle.startRoute();
    }else if (type === VehicleType.AERIAL){
      this.aircraft.startRoute();
    }else {
      throw new Error('Indique o tipo de veículo a ser utilizado');
    }
  }
}