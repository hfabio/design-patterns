import IPaymentInstrument from "./IPaymentInstrument";

export default abstract class NubankCard implements IPaymentInstrument {

  validate(value: number): boolean {
    console.log('Validação básica');
    if(value){
      console.log(`valor: ${value}`)
    }
    return true;
  }
  collectPayment(value: number): void {
    if(this.validate(value)){
      console.log('Pagamento realizado');
    }
  }

}