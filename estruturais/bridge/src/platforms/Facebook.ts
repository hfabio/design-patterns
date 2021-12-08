import IPlatform from "./IPlatform";

export default class Facebook implements IPlatform {

  constructor(){
    this.configureRMTP();
    console.log('Facebook: transmissão iniciada');
  }

  configureRMTP(): void {
    this.authToken();
    console.log('Facebook: configurando broadcasting');
  }
  authToken(): void {
    console.log('Facebook: aplicação autorizada');
  }

}