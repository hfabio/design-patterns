import IBuilder from "../Builders/IBuilder";
import Engine from "../Components/Enginte";
import Transmission from "../Components/Transmission";
import VehicleType from "../Components/VehicleType";
import Wheel from "../Components/Wheel";

export default class Director {
  constructor(private builder: IBuilder){

  }

  constructSedanCar(){
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.setEngine(new Engine(1600));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
  }
  constructTruck(){
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL);
    this.builder.setEngine(new Engine(1300));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }
  constructMotorcycle(){
    this.builder.setVehicleType(VehicleType.MOTORCYCLE);
    this.builder.setSeats(1);
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.setEngine(new Engine(150));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }
}