import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {

  constructor(private balance: number){

  }

  validate(value: number): boolean {
    console.log('Verificando pontuação...')
    if(value <= this.balance){
      return true;
    }
    return false;
  }

  collectPayment(number: any): void {
    if(this.validate(number)){
      console.log('Pagamento realizado com sucesso');
    }else{
      console.log(`Pontos insuficientes, pontuação atual: ${this.balance}`)
    }
  }

}