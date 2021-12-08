import IDbProduct from "./IDbProduct";

export default class MongoDBProduct implements IDbProduct {

  getProductById(productId: number): string {
    if(productId < 100){
      return `MongoDB: Exibindo dados do produto ${productId}`
    }
    return null;
  }
  
}