import faker from 'faker';
// !initially it was giving a warning as typescript was not able to figure out type of faker. In order to fix that run 'npm install --save @types/faker'. @types/faker is a type definition file for faker module 
class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
this.name = faker.name.firstName();
this.location = {
  // !parseFloat converts a string into decimal value
  lat: parseFloat(faker.address.latitude()) ,
  lng:  parseFloat(faker.address.longitude()),
}
  }
}