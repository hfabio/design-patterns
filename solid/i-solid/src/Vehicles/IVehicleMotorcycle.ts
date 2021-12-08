import IVehicle from "./IVehicle";

export default interface IVehicleMotorcycle extends IVehicle {
  configurationMotorCycle(color: string, year: number, engine: number): void;
}