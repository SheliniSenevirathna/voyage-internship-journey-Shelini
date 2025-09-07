// ===========================
// JavaScript ES6+ Practice
// ===========================

// 1. Arrow Functions
const add = (a, b) => a + b;
console.log("Practice 1:", add(2, 3)); // 5

const square = x => x * x;
console.log("Practice 2:", square(4)); // 16

// 2. Destructuring
const person = {name: "Shelini", age: 22, city: "Colombo"};
const {name, age} = person;
console.log("Practice 3:", name, age);

const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log("Practice 4:", first, second);

// 3. Spread Operator
const arr1 = [1,2,3];
const arr2 = [...arr1, 4,5];
console.log("Practice 5:", arr2);

const obj2 = {...person, country: "Sri Lanka"};
console.log("Practice 6:", obj2);

// 4. Rest Operator in function
const sumAll = (...nums) => nums.reduce((a,b)=>a+b, 0);
console.log("Practice 7:", sumAll(1,2,3,4)); // 10

// 5. Async/Await and Promises
const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Data fetched!"), 1000));
const getData = async () => {
    try {
        const result = await fetchData();
        console.log("Practice 8:", result);
    } catch(err) {
        console.error("Practice 8 Error:", err);
    }
}
getData();

// 6. Array Methods
const arr = [1,2,3,4,5];

// map
const squared = arr.map(n => n*n);
console.log("Practice 9:", squared);

// filter
const evens = arr.filter(n => n%2===0);
console.log("Practice 10:", evens);

// reduce
const sum = arr.reduce((acc,n)=>acc+n,0);
console.log("Practice 11:", sum);

// chaining
const processed = arr.filter(n=>n>2).map(n=>n*3).reduce((acc,n)=>acc+n,0);
console.log("Practice 12:", processed);

// 7. Template Literals
const greeting = `Hello, ${person.name}!`;
console.log("Practice 13:", greeting);

// 8. Default Parameters
const multiply = (a, b=2) => a*b;
console.log("Practice 14:", multiply(5)); // 10

// 9. Object property shorthand
const x = 10, y = 20;
const coords = {x, y};
console.log("Practice 15:", coords);

// 10. Optional Chaining
const cityName = person.address?.city || "Unknown";
console.log("Practice 16:", cityName);

// 11. Nullish Coalescing
const input = null;
const defaultValue = input ?? "Default Value";
console.log("Practice 17:", defaultValue);

// 12. Find
const found = arr.find(n => n>3);
console.log("Practice 18:", found);

// 13. Some/Every
const hasEven = arr.some(n => n%2===0);
const allPositive = arr.every(n => n>0);
console.log("Practice 19:", hasEven, allPositive);

// 14. Includes
console.log("Practice 20:", arr.includes(3));

// 15. Flattening arrays
const nested = [1,[2,3],[4,[5]]];
const flat = nested.flat(2);
console.log("Practice 21:", flat);

// 16. String methods
console.log("Practice 22:", "Hello".startsWith("H"));
console.log("Practice 23:", "World".endsWith("d"));
console.log("Practice 24:", "a,b,c".split(","));

// 17. Set to remove duplicates
const dupArr = [1,2,2,3,3,3];
const unique = [...new Set(dupArr)];
console.log("Practice 25:", unique);

// 18. Map object iteration
const mapObj = new Map();
mapObj.set("a",1);
mapObj.set("b",2);
mapObj.forEach((v,k)=>console.log("Practice 26:", k,v));

// 19. Class Example
class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(`Practice 27: ${this.name} makes a sound.`); }
}
const dog = new Animal("Dog");
dog.speak();

// 20. Destructuring in function params
const greetPerson = ({name, city}) => console.log("Practice 28:", `Hi ${name} from ${city}`);
greetPerson(person);
