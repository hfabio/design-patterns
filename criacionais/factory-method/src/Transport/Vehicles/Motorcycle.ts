import IVehicle from "./Interfaces/IVehicle";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log(`Iniciando o trajeto`);
  }
  getCargo(): void {
    console.log("Pegamos os objetos, tudo certo para iniciar o trajeto");
  }
}