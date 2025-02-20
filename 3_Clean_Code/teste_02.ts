// Original
// function calculateDiscount(price: number, isPremium: boolean): number {
//   if (isPremium) {
//     if (price > 100) {
//       return price * 0.8;
//     } else {
//       return price * 0.9;
//     }
//   } else {
//     if (price > 100) {
//       return price * 0.9;
//     } else {
//       return price;
//     }
//   }
// }

// Refactor
type IContext = {
  price: number,
  expensiveValue: number,
  expensiveDiscount: number,
  normalDiscount: number
}

enum PlanEnum { PREMIUM = 'premium', DEFAULT = 'default' }
const DISCOUNT_VALUES = {
  [PlanEnum.PREMIUM]: { expensiveValue: 100, expensiveDiscount: 0.8, normalDiscount: 0.9 },
  [PlanEnum.DEFAULT]: { expensiveValue: 100, expensiveDiscount: 0.9, normalDiscount: 1 }
}

function calculateDiscount(price: number, plan: PlanEnum): number {
  return applyDiscount({ price, ...DISCOUNT_VALUES[plan] })
}

function applyDiscount(context: IContext): number {
  if (context.price > context.expensiveValue) return context.price * context.expensiveDiscount;
  return context.price * context.normalDiscount;
}


console.log('Valor final com desconto: ', calculateDiscount(100, PlanEnum.PREMIUM))