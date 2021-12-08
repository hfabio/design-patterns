import Token from "../utils/Token";
import IPayPalPayment from "./IPayPalPayment";

export default class PayPal implements IPayPalPayment {
  private token: Token;

  authToken(): Token {
    const token = new Token();
    console.log(`token gerado: ${token.getToken()}`)
    return token;
  }

  paypalPayment(): void {
    if(!this.token){
      this.token = this.authToken();
    }
    console.log('Enviando pagamento via PayPal')
  }
  
  paypalReceive(): void {
    if(!this.token){
      this.token = this.authToken();
    }
    console.log('Recebendo pagamento via PayPal')
  }
  
}