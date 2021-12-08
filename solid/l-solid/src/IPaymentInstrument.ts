export default interface IPaymentInstrument {
  validate(value: number): boolean;
  collectPayment(value: number): void;
}