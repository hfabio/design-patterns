import IVehicle from "./Interfaces/IVehicle";

export default class Bicycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Trajeto iniciado");
  }
  getCargo(): void {
    console.log('Carga coletada pelo ciclista, tudo pronto para o inicio do trajeto');
  }
  
}