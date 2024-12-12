function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result = add(5, 3); // 8
console.log(result); //Correct

result = subtract(5,3); //2
console.log(result); //Correct

result = add(5, '3'); //Type Error
console.log(result);