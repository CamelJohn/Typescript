type Person = {
  name: string;
  age: number;
}

type Employee = {
  occupation: string;
} & Person;

const people: Employee[] = [
  { age: 33, name: 'Jonathan', occupation: 'keyboard puncher' },
  { age: 4, name: 'Avigail', occupation: 'Daddys little girl' },
];



function legalDrinkingAge(personArray: Employee[]): Person[] {
  const mappedDetails = personArray.map((person) => {
    return {
      age: person.age,
      name: person.name,
    };
  });

  const ofDrinkingAge = mappedDetails.filter((person) => person.age > 18);

  return ofDrinkingAge;
}
