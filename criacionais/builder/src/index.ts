// import VehicleBuilder from "./Builders/VehicleBuilder";
// import Director from "./Director/Director";

// const builder = new VehicleBuilder();
// const director = new Director(builder);

// director.constructMotorcycle();
// const car = builder.getVehicle();

// console.log(`Criando um veículo do tipo ${car.vehicleType} com ${car.wheelsTotal} rodas, ${car.seats} assentos e motor ${car.engine.power}`)
@course
class Person {
  name: string;
  constructor(name: string){
    this.name = name;
  }
}

const pessoa = new Person('Helton');
console.log(pessoa)
pessoa.check();
console.log(pessoa)

function course(target: any){
  Object.defineProperty(target.prototype, 'check', {value: function(key: any) {
    console.log(target, key, Object.keys(target))
    if(target.name === 'Helton'){
      target.name = 'Fabin'
    }
  }})
}
