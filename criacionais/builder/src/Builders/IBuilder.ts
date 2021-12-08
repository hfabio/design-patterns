import Engine from "../Components/Enginte";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";
import Vehicle from "../Products/Vehicle";

export default interface IBuilder {

  reset(): void;
  getVehicle(): Vehicle;

  addWheel(wheel: Wheel): void;
  setVehicleType(type: VehicleType): void;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setTransmission(transmission: Transmission): void;

}