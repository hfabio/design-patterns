import Payonner from "../Payonner/Payonner";
import IPayPalPayment from "../Paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPayPalPayment {
  
  private token: Token;

  constructor(private payonner: Payonner){
    console.log('Adaptando o Payonner utilizando o modelo do paypal');
  }

  authToken(): Token {
    const token = new Token();
    console.log(`token gerado: ${token.getToken()}`)
    return token;
  }

  paypalPayment(): void {
    this.payonner.sendPayment();
  }

  paypalReceive(): void {
    this.payonner.receivePayment();
  }

}