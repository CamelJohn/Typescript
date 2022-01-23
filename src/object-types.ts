type Person = {
  name: string;
  age: number;
  height: number;
  occupation: string;
  address: {
    street: string;
    coorodinates: {
      lat: number;
      lng: number;
    };
  };
};

type PersonDto = {
  name: string;
  age: number;
  address: {
    coorodinates: {
      lat: number;
      lng: number;
    };
  };
};

function personDto(person: Person): PersonDto {
  return {
    name: person.name,
    age: person.age,
    address: {
      coorodinates: {
        ...person.address.coorodinates,
      },
    },
  };
}
