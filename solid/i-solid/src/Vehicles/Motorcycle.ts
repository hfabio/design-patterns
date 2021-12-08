import IVehicleMotorcycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorcycle {

  constructor(
    color: string, year: number, engine: number
  ){
    this.configurationMotorCycle(color, year, engine);
  }
  
  startVehicle(): void {
    console.log('ligando os motores');
  }
  
  configurationMotorCycle(color: string, year: number, engine: number): void {
    console.log(`Carro da cor: ${color}, ano ${year}, motor ${engine} cilindradas`);
    this.startVehicle();
  }

}