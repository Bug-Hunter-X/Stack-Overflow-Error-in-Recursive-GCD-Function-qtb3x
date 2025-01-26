# Node.js Stack Overflow Bug

This repository demonstrates a common error in recursive functions: stack overflow due to improper base case handling. The `bug.js` file contains a recursive function that calculates the greatest common divisor (GCD) of two numbers using Euclid's algorithm. However, it contains a flaw that causes a stack overflow when both input numbers are zero.

The `bugSolution.js` file provides a corrected version of the function that handles the zero-input case correctly, preventing the stack overflow.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`. You should observe a stack overflow error.
3. Run `node bugSolution.js`. The program should execute successfully and print the GCD values without error.

## Lessons Learned

This example highlights the importance of carefully defining base cases in recursive functions, especially when dealing with edge cases like zero or null values.  A minor oversight can lead to significant runtime errors.