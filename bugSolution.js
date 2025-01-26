```javascript
function myFunction(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle the case where both inputs are 0
  } else if (a === 0) {
    return b; 
  } else if (b === 0) {
    return a;
  } else {
    return myFunction(Math.min(a, b), Math.abs(a - b));
  }
}

console.log(myFunction(12, 18)); // Output: 6
console.log(myFunction(10, 0)); // Output: 10
console.log(myFunction(0, 15)); // Output: 15
console.log(myFunction(0,0)); // Output: 0
```