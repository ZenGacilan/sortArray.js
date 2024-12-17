// Get input arrays using prompt()
const numbersInput = prompt("Enter numbers separated by commas:");
const namesInput = prompt("Enter names separated by commas:");

// Convert input strings to arrays
const numbersArray = numbersInput.split(",").map(Number);
const namesArray = namesInput.split(",");

// Merge both arrays
const mergedArray = numbersArray.concat(namesArray);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
const sortedNumbers = numbersArray.sort((a, b) => b - a);
console.log("Numbers sorted in reverse order:", sortedNumbers);

// Sort names alphabetically
const sortedNames = namesArray.sort();
console.log("Names sorted alphabetically:", sortedNames);
