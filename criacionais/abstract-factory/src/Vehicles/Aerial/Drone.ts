import IAirCraftVehicle from "./Interfaces/IAirCraftVehicle";

export default class Drone implements IAirCraftVehicle{
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log('Iniciando entrega');
  }
  getCargo(): void {
    console.log('Carga coletada')
  }
  checkWind(): void {
    console.log("Vento a 15km/h, sul, drone pronto!");
  }

}