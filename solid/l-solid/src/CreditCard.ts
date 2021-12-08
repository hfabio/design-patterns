import NubankCard from "./NubankCard";

export default class CreditCard extends NubankCard {
  constructor(private limit: number){
    super();
  }

  payBill(value): void {
    this.limit += value;
    console.log('Fatura paga com sucesso');
  }

  validate(value: number): boolean {
    console.log('Verificando limite...');
    if(value <= this.limit){
      return true;
    }
    return false;
  }

  collectPayment(value: number): void {
    if(this.validate(value)){
      console.log('Pagamento realizado com sucesso');
    }else{
      console.log(`Limite insuficiente, limite disponível: ${this.limit}`);
    }
  }

}