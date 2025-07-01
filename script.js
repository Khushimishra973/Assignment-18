// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
function getGrade(score) {
  return score >= 90 ? 'A' :
         score >= 80 ? 'B' :
         score >= 70 ? 'C' :
         score >= 60 ? 'D' : 'F';
}

console.log(getGrade(85)); 





// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
let car = {
  company: "Toyota",
  model: "Corolla",
  year: 2020
};

function updateYear(newYear) {
  car.year = newYear;
}

updateYear(2023);

// Object destructuring
const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`); 






// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
};

const primes = number.filter(isPrime);
console.log(primes); 





// Q5 -  State different use cases of map, filter and reduce functions.
// ✅ map – used to transform each element in an array
// Example: Square each number
const numberr = [1, 2, 3, 4];
const squares = numberr.map(num => num * num); 
console.log("Map (Squares):", squares); 


const evens = numberr.filter(num => num % 2 === 0);
console.log("Filter (Evens):", evens); 

const sum = numberr.reduce((total, num) => total + num, 0);
console.log("Reduce (Sum):", sum); 





// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();



// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001"
  },
  // contact: {
  //   phone: "123-456-7890"
  // }
};

const phone = person.contact?.phone;
console.log(phone); 