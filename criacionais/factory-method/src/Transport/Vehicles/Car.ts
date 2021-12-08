import IVehicle from "./Interfaces/IVehicle";

export default class Car implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log(`Iniciando o trajeto`);
  }
  getCargo(): void {
    console.log('Pegamos os passageiros, estamos prontos');
  }
}