import { faker } from "@faker-js/faker";

export class RandomDataUtil {
  static getFirstName() {
    return faker.person.firstName();
  }

  static getMiddleName() {
    return faker.person.middleName();
  }
  
  static getLastName() {
    return faker.person.lastName();
  }

  static getEmail() {
    return faker.internet.email();
  }
    static getPhoneNumber() {
        return faker.phone.number();
    }
    static getStreetAddress() {
        return faker.location.streetAddress();
    }
    static getCity() {
        return faker.location.city();
    }   
    static getState() {
        return faker.location.state();
    }   
    static getZipCode() {
        return faker.location.zipCode();
    }       
    static getNPI() {
        return faker.number.int({ min: 5000000000, max: 6000000000 }).toString();
    }
    static getSSN() {
        return faker.string.numeric(9);
    }
    static getRandomNumber() {
        return faker.number.int({ min: 0, max: 9999 });
    } 

}
