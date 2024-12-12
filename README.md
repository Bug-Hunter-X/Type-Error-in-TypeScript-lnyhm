# Type Error in TypeScript
This example demonstrates a common type error in TypeScript that arises when performing operations on incompatible types. Specifically, it shows how attempting to add a number and a string results in a type error.

## Bug Description
The `add` function is designed to accept two numbers and return their sum. However, when we call `add(5, '3')`, TypeScript correctly flags an error because we're trying to add a number and a string. 

## Solution
To fix this, we need to ensure that both inputs to the `add` function are numbers before performing the addition.  This can be achieved using type guards or explicit type assertions, with type guards being the preferred approach for type safety.