import {Phone} from './phone';

export class DataService{

  private data: Phone[] = [
    { name:"Apple iPhone 7", price: 56000},
    { name: "HP Elite x3", price: 56000},
    { name: "Alcatel Idol S4", price: 25000}
  ];
  getData(): Phone[] {

    return this.data;
  }
  addData(name: string, price: number){

    this.data.push(new Phone(name, price));
  }
}
