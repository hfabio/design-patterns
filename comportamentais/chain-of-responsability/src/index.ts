import * as readline from 'readline';
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import CheckWeakPasswordMiddleware from './middlewares/CheckWeakPasswordMiddleware';
import Middleware from "./middlewares/Middleware";
import Server from "./servers/Server";

declare var process;
console.clear();

function setPromptQuestions(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Digite o seu e-mail: ", email => {
    rl.question("Digite a sua senha: ", senha => {
      server.login(email, senha);
      rl.close();
    });
  });
  // rl.on('close', () => setPromptQuestions());
}


const middleware: Middleware = new CheckUserMiddleware();
const permissionMiddleware = new CheckPermissionMiddleware();
permissionMiddleware.linkWith(new CheckWeakPasswordMiddleware());
middleware.linkWith(permissionMiddleware);

const server: Server = new Server();
server.setMiddleware(middleware);

server.login("heltonfabio@outlook.com", '123456')
setPromptQuestions();