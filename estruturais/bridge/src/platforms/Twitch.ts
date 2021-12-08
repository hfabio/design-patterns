import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform {

  constructor(){
    this.configureRMTP();
    console.log('Twitch: transmissão iniciada');
  }

  configureRMTP(): void {
    this.authToken();
    console.log('Twitch: configurando broadcasting');
  }
  authToken(): void {
    console.log('Twitch: aplicação autorizada');
  }

}