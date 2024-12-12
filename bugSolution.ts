function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let result = add(5, 3); // 8
console.log(result); //Correct

result = subtract(5,3); //2
console.log(result); //Correct

if (isNumber(5) && isNumber(3)) {
  result = add(5, 3);
  console.log(result); //Correct
}

let str = '3';
let num = parseInt(str, 10);

if (isNumber(5) && isNumber(num)) {
  result = add(5, num); //Correct
  console.log(result); //Correct
}
//else {
//  console.log("Type Error");
//}