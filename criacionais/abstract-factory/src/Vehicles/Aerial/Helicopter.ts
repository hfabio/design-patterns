import IAirCraftVehicle from "./Interfaces/IAirCraftVehicle";

export default class Helicopter implements IAirCraftVehicle {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Iniciando a decolagem');
  }
  getCargo(): void {
    console.log('Passageiros a bordo, estamos prontos')
  }
  checkWind(): void {
    console.log('Ventos a 20km/h, Sudeste, decolagem autorizada.');
  }

}