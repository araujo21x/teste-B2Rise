// 1.2 Validação e Tipagem com Union Types

// Implemente uma função que recebe uma string representando uma operação matemática 
// (add, subtract, multiply, divide) e dois números. A função deve realizar a operação 
// correspondente e lançar um erro caso a operação não seja suportada.

type IOperation = "add" | "subtract" | "multiply" | "divide"

function calculate(operation: IOperation, num1: number, num2: number): number {
  if (typeof num1 !== 'number') num1 = Number(num1)
  if (isNaN(num1)) throw new Error('num1 is invalid');
  if (typeof num2 !== 'number') num2 = Number(num2)
  if (isNaN(num2)) throw new Error('num2 is invalid');

  const exec = { add: add, subtract: subtract, multiply: multiply, divide: divide }
  if (!exec[operation]) throw new Error('operation is invalid');

  return exec[operation](num1, num2)
}

function add(num1: number, num2: number): number {
  return num1 + num2
}

function subtract(num1: number, num2: number): number {
  return num1 - num2
}

function multiply(num1: number, num2: number): number {
  return num1 * num2
}

function divide(num1: number, num2: number): number {
  if (num2 === 0) throw new Error('Division by zero');
  return num1 / num2
}

console.log("O resultado do meu calculo é: ", calculate('divide', 10, 5))