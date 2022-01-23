const people: { age: number; name: string; occupation: string }[] = [
  { age: 33, name: 'Jonathan', occupation: 'keyboard puncher' },
  { age: 4, name: 'Avigail', occupation: 'Daddys little girl' },
];

function leagalDrinkingAge(personArray: any[]): { name: string; age: number }[] {
  const mappedDetails = personArray.map((person) => {
    return {
      age: person.age,
      name: person.name,
    };
  });

  const ofDrinkingAge = mappedDetails.filter((person) => person.age > 18);

  return ofDrinkingAge;
}
