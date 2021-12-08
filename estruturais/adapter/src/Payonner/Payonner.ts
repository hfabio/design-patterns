import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment {
  private token: Token;
  authToken(): Token {
    const token = new Token();
    console.log(`Token gerado ${token.getToken()}`);
    return token;
  }

  sendPayment(): void {
    if(!this.token){
      this.token = this.authToken();
    }
    console.log(`Enviando pagamento da Payonner`);
  }
  
  receivePayment(): void {
    if(!this.token){
      this.token = this.authToken();
    }
    console.log(`Recebendo pagamento da Payonner`);
  }

}