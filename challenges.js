// 10 JavaScript Coding Challenges
// ===========================

// 1. Sum numbers in array
const numbersArr = [1,2,3,4,5];
const sumNumbers = numbersArr.reduce((acc,n)=>acc+n,0);
console.log("Challenge 1 - Sum:", sumNumbers);

// 2. Filter odd numbers
const oddNumbers = numbersArr.filter(n => n%2!==0);
console.log("Challenge 2 - Odds:", oddNumbers);

// 3. Uppercase names
const names = ["alice","bob","carol"];
console.log("Challenge 3 - Uppercase:", names.map(n => n.toUpperCase()));

// 4. Flatten nested array
const nestedArr = [1,[2,3],[4,[5]]];
console.log("Challenge 4 - Flatten:", nestedArr.flat(2));

// 5. Swap variables
let a = 1, b = 2;
[a,b] = [b,a];
console.log("Challenge 5 - Swap:", a,b);

// 6. Async fetch simulation
const delayFetch = () => new Promise(resolve => setTimeout(()=>resolve("Fetched!"), 500));
const challenge6 = async () => {
    const data = await delayFetch();
    console.log("Challenge 6 - Async:", data);
}
challenge6();

// 7. Promise that resolves after 2 sec
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
wait(2000).then(()=>console.log("Challenge 7 - Done after 2 sec"));

// 8. Count occurrences in array
const letters = ["a","b","a","c","b","a"];
const count = letters.reduce((acc,l)=>{ acc[l]=(acc[l]||0)+1; return acc; },{});
console.log("Challenge 8 - Count:", count);

// 9. Remove duplicates
const dupLetters = ["a","b","b","c","a"];
const uniqueLetters = [...new Set(dupLetters)];
console.log("Challenge 9 - Unique:", uniqueLetters);

// 10. Chain filter + map
const numsChallenge = [1,2,3,4,5];
const result10 = numsChallenge.filter(n=>n%2===0).map(n=>n*n);
console.log("Challenge 10 - Squared Evens:", result10);