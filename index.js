// Cannot read properties of undefined (reading 'toString')

// EXAMPLE 1 - Provide a fallback of an empty string if the value is undefined

const example = undefined;

// ✅ Using optional chaining ?.
const ex1 = example?.toString() || '';
console.log(ex1); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 2 - Use an `if` statement to avoid the error

// const example = undefined;

// let result = '';

// if (example) {
//   result = example.toString();
// }

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the ternary operator to avoid the error

// const example = undefined;

// const result = example ? example.toString() : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Access arrays at indices that exist or use optional chaining (?.)

// const arr = [123, 456, 789];

// const result = arr[100]?.toString();
// console.log(result); // 👉️ undefined
