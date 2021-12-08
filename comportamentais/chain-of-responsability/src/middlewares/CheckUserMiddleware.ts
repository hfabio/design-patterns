import DataBase from '../servers/DataBase';
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{

  public check(email: string, password: string): boolean {

    if(email.indexOf('@') === -1){
      console.log('E-mail inválido');
      return false;
    }

    if(password.length === 0){
      console.log('Senha vazia');
      return false;
    }

    if(!DataBase.find(user => user.email === email && user.password === password)){
      console.log('E-mail e/ou senha inválidos');
      return false
    }


    return this.checkNext(email, password);

  }

}