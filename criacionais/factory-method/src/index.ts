import Transport from './Transport/Transport';
import TransportBicycle from './Transport/TransportBicycle';
import TransportCar from './Transport/TransportCar';
import TransportMotorcycle from './Transport/TransportMotorcycle';

declare var process;

let transport: Transport;

if(process.argv.includes('--uber')){
  transport = new TransportCar();
} else if(process.argv.includes('--log')){
  transport = new TransportMotorcycle();
} else if(process.argv.includes('--eats')){
  transport = new TransportBicycle();
}else {
  throw new Error("selecione o tipo de entrega");
}

if(transport){
  transport.startTransport();
}else{
  throw new Error("Erro ao definir o tipo de transporte");
}