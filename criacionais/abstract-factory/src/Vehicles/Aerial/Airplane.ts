import IAirCraftVehicle from "./Interfaces/IAirCraftVehicle";

export default class Airplane implements IAirCraftVehicle {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Iniciando a decolagem');
  }
  getCargo(): void {
    console.log('Pegamos os passageiros, estamos prontos')
  }
  checkWind(): void {
    console.log('Ventos a 25km/h, condições normais, decolagem autorizada.');
  }

}