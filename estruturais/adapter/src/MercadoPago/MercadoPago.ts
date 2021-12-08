import Token from "../utils/Token";
import IMercadoPago from "./IMercadoPago";

export default class MercadoPago implements IMercadoPago {
  private token : Token;

  gerarToken(): Token {
    const token = new Token();
    console.log(`Token gerado ${token.getToken()}`);
    return token;
  }
  receberPagamento(): void {
    if(!this.token){
      this.token = this.gerarToken();
    }
    console.log(`Enviando pagamento do mercado pago`);
  }
  realizarPagamento(): void {
    if(!this.token){
      this.token = this.gerarToken();
    }
    console.log(`Recebendo pagamento do mercado pago`);
  }

}