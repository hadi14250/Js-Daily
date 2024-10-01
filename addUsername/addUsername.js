function addUsername(list) {
  const currentYear = new Date().getFullYear();
  
  return list.map(person => {
    const firstNameLower = person.firstName.toLowerCase();
    const lastNameFirstLetter = person.lastName[0].toLowerCase();
    const birthYear = currentYear - person.age;

    const username = `${firstNameLower}${lastNameFirstLetter}${birthYear}`;

    return { ...person, username };
  });
}




var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(addUsername(list1));