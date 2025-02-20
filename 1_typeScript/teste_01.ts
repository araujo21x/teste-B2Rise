// 1.1 Manipulação de Tipos e Generics

// Implemente uma função que recebe um array de objetos e retorna um novo array 
// contendo apenas os valores de uma chave específica. Utilize Generics para garantir a tipagem.

type IGetValues<Type> = {
  data: any[];
  key: string;
  transform?: (value: any) => Type
}

function extractValues<Type>(context: IGetValues<Type>): Array<Type> {
  if (!context.data?.length) return [];

  const myArray: Array<Type> = [];
  const { key, transform } = context;

  context.data.forEach((element: any) => {
    if (!(key in element)) return;
    myArray.push(transform ? transform(element[key]) : element[key]);
  })

  return myArray;
}

const dataToTest = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]

console.log(
  "Meu Array",
  extractValues<String>({ data: dataToTest, key: 'name' })
)