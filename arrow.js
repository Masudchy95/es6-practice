// function doubleIt(number) {
//     return number * 2;
// }

// const doubleIt = function (number) {
//   return number * 2;
// };


const doubleIt = number => number * 2;

const add = (num1, num2) => num1 + num2;

const doMath = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    const diff1 = num1 -num2;
    const diff2 = num2 - num3;
    const result = sum * diff1 * diff2;
    return result;
}

const result = doMath(8, 6, 3);
console.log(result);
