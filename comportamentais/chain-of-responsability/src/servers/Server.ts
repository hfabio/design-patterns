import Middleware from "../middlewares/Middleware";

export default class Server {

  private middleware: Middleware;

  setMiddleware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  login(email: string, password: string): boolean{
    if(this.middleware.check(email, password)){
      console.log("Usuário logado com sucesso!");
      return true;
    }
    console.log("Erro no login!");
    return false;
  }


}