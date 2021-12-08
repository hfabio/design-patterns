import ILandVehicle from "./Interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
  startRoute(): void {
    this.getCargo();
    console.log('Iniciando entrega');
  }
  getCargo(): void {
    console.log('Carga coletada com sucesso, patinete pronto.')
  }

}