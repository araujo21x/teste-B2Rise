// 1.2 Imutabilidade e Manipulação de Arrays

// Implemente uma função que recebe uma string representando uma operação matemática
// (add, subtract, multiply, divide) e dois números. A função deve realizar a operação correspondente 
// e lançar um erro caso a operação não seja suportada.


function makeAllPositive(original: Array<number>): Array<number> {
  return original.map((element: number) => {
    if (element >= 0) return element;

    return element * -1;
  })
}
const myOriginalArray = [-1, 2, -3, 4]
console.log("Array positivo: ", makeAllPositive(myOriginalArray))
console.log("Array original: ", myOriginalArray)
