import Db from "../Model/Db";
import IDbProduct from "../Model/IDbProduct";
import MongoDBProduct from "../Model/MongoDBProduct";
import MySQLProduct from "../Model/MySQLProduct";

export default class DbProductFactory {

  private static type: Db = Db.MYSQL;

  public static create(): IDbProduct {
    switch (DbProductFactory.type) {
      case Db.MYSQL:
        return new MySQLProduct();
      case Db.MONGODB:
        return new MongoDBProduct();
        default:
        return new MySQLProduct();
    }
  }

}