export default class Vehicle {

  constructor(
    private color: string,
    private year: number,
    private engine: number,
    private seats: number,
    private doors: number
  ){}

  motorcycle(): void {
    console.log(`Criando um carro: ${this.color}, ${this.year}, ${this.engine} de potência, ${this.doors} portas e ${this.seats} assentos`);
    this.start();
  }

  car(): void {
    console.log(`Criando uma moto: ${this.color}, ${this.year} e ${this.engine} de potência`);
    this.start();
  }

  start(): void {
    console.log('Ligando motores');
  }


}