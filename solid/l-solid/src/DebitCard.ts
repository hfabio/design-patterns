import NubankCard from "./NubankCard";

export default class DebitCard extends NubankCard {
  constructor(private balance: number){
    super();
  }

  validate(value: number): boolean {
    console.log('Validando se há saldo suficiente...');
    if(value <= this.balance){
      return true;
    }
    return false;
  }

  collectPayment(value: number): void {
    if(this.validate(value)){
      console.log('Pagamento realizado com sucesso');
    }else{
      console.log(`Saldo insuficiente, saldo disponível: ${this.balance}`);
    }
  }

}