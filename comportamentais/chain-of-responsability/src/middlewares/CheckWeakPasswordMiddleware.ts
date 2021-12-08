import Middleware from "./Middleware";

export default class CheckWeakPassword extends Middleware {
  public check(email: string, password: string): boolean {
    if(password === '123456'){
      console.log('Cuidado, usuário, a sua senha é fraca!');
    }
    return this.checkNext(email, password);
  }

}