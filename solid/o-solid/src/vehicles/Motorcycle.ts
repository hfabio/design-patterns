import IVehicleMotorCycle from "./IVehicleMotorcycle";

export default class Motorcycle implements IVehicleMotorCycle{

  constructor(color: string,year: number,engine: number){
    this.configure(color,year,engine);
  }

  start(): void {
    console.log('Ligando o motor');
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine} cilindradas`);
    this.start();
  }
  
}