import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct{

  index(): Array<{}> {
    return new Array(5).fill({});
  }

  getProductById(productId: number): string | null {
    if(productId < 100){
      return `MySQL: Exibindo dados do produto ${productId}`
    }
    return null;
  }

}