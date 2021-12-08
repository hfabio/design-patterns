export default interface IVehicleCar {
  start(): void;
  configure(color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
    ): void;
}