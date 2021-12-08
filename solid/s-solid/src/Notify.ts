export default class Notify {
  sendEmail(email: string): boolean {
    console.log(`enviando e-mail para ${email}`);
    return true;
  }
}