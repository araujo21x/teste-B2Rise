// Original
// function c(x: number[]): number[] {
//   const r = [];
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] % 2 === 0) {
//       r.push(x[i] * 2);
//     }
//   }
//   return r;
// }

// Refactor
function duplicateEvenValues(numbers: number[]): number[] {
  const duplicateValues: number[] = [];

  numbers.forEach((element: number) => {
    if (element % 2 === 0) duplicateValues.push(element * 2)
  })

  return duplicateValues;
}


const arrayToTest = [0, 1, 2, 3, 4, 5]
console.log('Valores pares duplicados: ', duplicateEvenValues(arrayToTest))