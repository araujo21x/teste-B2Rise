// Original
// function processItems(items: any[]) {
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].price > 100) {
//       console.log(items[i].name + ' is expensive');
//     }
//   }
// }


// Refactor
type IItem = {
  name: string;
  price: number;
}

function processItems(items: IItem[]): void {
  const EXPENSIVE_VALUE = 100;

  items.forEach((item: IItem) => {
    if (item.price > EXPENSIVE_VALUE) console.log(`${item.name} is expensive`);
  })
}

console.log('processItems', processItems([
  { name: 'teste01', price: 50 },
  { name: 'teste02', price: 105 },
  { name: 'teste03', price: 100 },
]))