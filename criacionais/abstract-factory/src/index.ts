import Client from "./Vehicles/Client/Client";
import Companies,{VehicleType} from './Vehicles/Consts/Company';
import ITransportFactory from "./Vehicles/Factories/Interfaces/ITransportFactory";
import NineNineTransport from "./Vehicles/Factories/NineNineTransport";
import UberTransport from "./Vehicles/Factories/UberTransport";
import LimeTransport from "./Vehicles/Factories/LimeTransport";

const pickRandom = (array: Array<any>) => array[Math.floor(Math.random() * array.length)];

const currentCompany = pickRandom([Companies.UBER, Companies.NINENINE, Companies.LIME]);
const currentVehicleType = pickRandom([VehicleType.LAND, VehicleType.AERIAL]);

let factory: ITransportFactory;

switch(currentCompany){
  case Companies.UBER:{
    factory = new UberTransport();
    break;
  }
  case Companies.NINENINE: {
    factory = new NineNineTransport();
    break;
  }
  case Companies.LIME: {
    factory = new LimeTransport();
    break;
  }
  default: {
    throw new Error("Company not privided");
    break;
  }
}

if(factory){
  const client = new Client(factory);
  client.startRoute(currentVehicleType);
}