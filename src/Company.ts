import faker from 'faker';
import { Mappable } from './CustomMap'

export class Company implements  Mappable{
  // !annotate the types
  companyName: string;
  catchPhrase:  string;
  location: {
    lat: number;
    lng:  number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.color = 'green'
  }


// !markerContent is a method that returns a string
  markerContent(): string {
  return`
  <div>
  <h1>Company Name: ${this.companyName}</h1>
  <h3>Company Phrase: ${this.catchPhrase}</h3>
  </div>
  `
  
  }
  }

   
