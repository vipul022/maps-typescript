import faker from 'faker';
import { Mappable } from './CustomMap';
// !initially it was giving a warning as typescript was not able to figure out type of faker. In order to fix that run 'npm install --save @types/faker'. @types/faker is a type definition file for faker module

// !implements is used to ensure Mappable is applicable to User
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
this.name = faker.name.firstName();
this.location = {
  // !parseFloat converts a string into decimal value
  lat: parseFloat(faker.address.latitude()) ,
  lng:  parseFloat(faker.address.longitude()),
}
  }

  markerContent(): string {
    return `
    <div>
    <h1>User Name: ${this.name}</h1>
    </div>
    `
 
  }
}
