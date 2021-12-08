import MercadoPago from "../MercadoPago/MercadoPago";
import IPayPalPayment from "../Paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment {

  private token;

  constructor(private mercadoPago: MercadoPago){
    console.log('Adaptando o Mercado Pago utilizando o modelo do PayPal');
  }

  authToken(): Token {
    const token = new Token();
    console.log(`token gerado: ${token.getToken()}`)
    return token;
  }
  paypalPayment(): void {
    this.mercadoPago.realizarPagamento();
  }
  paypalReceive(): void {
    this.mercadoPago.receberPagamento();
  }

}