import Enginte from "../Components/Enginte";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";
import Vehicle from "../Products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{

  private _vehicle: Vehicle = new Vehicle();

  reset(): void {
    this._vehicle = new Vehicle();
  }

  getVehicle(): Vehicle {
    const result: Vehicle = this._vehicle;
    this.reset();
    return result;
  }

  addWheel(wheel: Wheel): void {
    this._vehicle.addWheel(wheel);
  }

  setVehicleType(type: VehicleType): void {
    this._vehicle.vehicleType = type;
  }

  setSeats(seats: number): void {
    this._vehicle.seats = seats;
  }

  setEngine(engine: Enginte): void {
    this._vehicle.engine = engine;
  }

  setTransmission(transmission: Transmission): void {
    this._vehicle.transmission = transmission;
  }

}