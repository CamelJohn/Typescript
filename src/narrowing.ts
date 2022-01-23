function canDrink(age: string | number) {
  if (typeof age === 'string') {
    return Number(age) > 18;
  }

  return age > 18;
}

class Person {
  age: number = 1;
  name: string = 'John Doe';
}

class Teacher extends Person {
  vocation: string = 'unemployed';
}

class Student extends Person {
  isSenior: boolean = false;
}

function canDrive(person: Teacher | Student) {
  if (person instanceof Teacher) {
    return true;
  }

  if (person instanceof Student && person.isSenior && person.age > 18) {
    return true;
  }

  return false;
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x.toUpperCase());
    console.log(y.toLoserCase());
  }
}

class Car {
  honk(): void {
    console.log('beep beep');
  }

  break(): void {
    console.log('screetch');
  }
}


function drive(car: Car) {
    if ("honk" in car) {
        car.honk();
    }
}