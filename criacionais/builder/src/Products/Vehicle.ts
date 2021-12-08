import Engine from "../Components/Enginte";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";

export default class Vehicle {
  private _vehicleType: VehicleType;
  private _seats : number;
  private _engine: Engine;
  private _transmission: Transmission;
  private _wheels: Wheel[] = [];

  addWheel(wheel: Wheel){
    this._wheels.push(wheel);
  }

  get vehicleType(): VehicleType{
    return this._vehicleType;
  }

  set vehicleType(vehicleType: VehicleType){
    this._vehicleType = vehicleType;

  }
  
  get seats(): number{
    return this._seats;
  }

  set seats(seats: number){
    this._seats = seats;
  }

  get engine(): Engine{
    return this._engine;
  }

  set engine(engine: Engine){
    this._engine = engine;
  }

  get transmission(): Transmission{
    return this._transmission;
  }

  set transmission(transmission: Transmission){
    this._transmission = transmission;
  }

  get wheelsTotal(): number {
    return this._wheels.length;
  }

}