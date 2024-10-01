# addUsername

Given an array of person objects, the task is to create a `username` property for each object based on specific criteria.

## Function Overview

The `addUsername` function takes an array of person objects and returns a new array with each object containing a `username` property.

### Function Definition

```javascript
function addUsername(list) {
    ...
}
```

### Parameters

- **`list`**: An array of objects, where each object represents a person with properties like `firstName`, `lastName`, `age`, etc.

### Example Input

```javascript
const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

const result = addUsername(list1);
console.log(result);
```

### Example Output

```javascript
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
```

## Explanation of the Code

### 1. Getting the Current Year

```javascript
const currentYear = new Date().getFullYear();
```

- This line retrieves the current year using the `Date` object in JavaScript.

### 2. Mapping Over the Input List

```javascript
return list.map(person => {
    ...
});
```

- The `map` method is used to iterate over each object in the input array, transforming each object to include the new `username` property.

### 3. Constructing the Username

```javascript
const firstNameLower = person.firstName.toLowerCase();
const lastNameFirstLetter = person.lastName[0].toLowerCase();
const birthYear = currentYear - person.age;

const username = `${firstNameLower}${lastNameFirstLetter}${birthYear}`;
```

- **Lowercase Conversion**: `person.firstName.toLowerCase()` converts the first name to lowercase.
- **First Letter of Last Name**: `person.lastName[0].toLowerCase()` extracts the first letter of the last name and converts it to lowercase.
- **Calculating Birth Year**: `currentYear - person.age` calculates the birth year by subtracting the age from the current year.
- **Username Formation**: The `username` is constructed by concatenating the lowercase first name, the first letter of the last name, and the calculated birth year.

### 4. Returning the New Object

```javascript
return { ...person, username };
```

- The new person object is returned with the original properties spread into it along with the new `username` property.

## Usage

To use this function, simply call it with an array of person objects:

```javascript
const result = addUsername(list);
```

### Example Usage

```javascript
const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(addUsername(list1));
```

### To Run

```bash
node addUsername.js
```

<br>
