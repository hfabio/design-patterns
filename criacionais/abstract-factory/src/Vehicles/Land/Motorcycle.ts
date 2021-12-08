import ILandVehicle from './Interfaces/ILandVehicle';

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log('Rota iniciada');
  }
  getCargo(): void {
    console.log('Objeto coletado.');
  }

}