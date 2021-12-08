export default interface IVehicleMotorCycle {
  start(): void;
  configure(color: string,
    year: number,
    engine: number,
    ): void;
}