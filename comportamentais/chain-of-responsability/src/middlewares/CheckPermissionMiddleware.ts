import DataBase from '../servers/DataBase';
import PermissionType from '../servers/PermissionType';
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware {

  public check(email: string, password: string): boolean {
    const users = DataBase.filter(user => user.email === email);
    if(!users.length){
      console.log('E-mail não cadastrado');
      return false;
    }

    if(users[0].persmission === PermissionType.ADMIN){
      console.log('Seja bem-vindo, administrador!');
    }else{
      console.log('Seja bem-vindo, usuário!');
    }

    return this.checkNext(email, password);
  }

}