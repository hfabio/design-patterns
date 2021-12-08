import Token from "../utils/Token";

export default interface IMercadoPago {

  gerarToken(): Token;
  receberPagamento(): void;
  realizarPagamento(): void;

}