/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0) return null;
  if (
    !Number.isInteger(serviceRating) ||
    serviceRating < 1 ||
    serviceRating > 5
  )
    return null;

  // if (serviceRating === 1) {
  //   return {
  //     tipPercentage: 5,
  //     tipAmount: billAmount * 0.05,
  //     totalAmount: billAmount + tipAmount,
  //   };
  // }
  let tipMoney = 0.0;
  let finalMoney = 0.0;
  if (serviceRating === 1) {
    tipMoney = billAmount * 0.05;
    finalMoney = tipMoney + billAmount;
    return {
      tipPercentage: 5,
      tipAmount: tipMoney,
      totalAmount: finalMoney,
    };
  }
  if (serviceRating === 2) {
    tipMoney = billAmount * 0.1;
    finalMoney = tipMoney + billAmount;
    return {
      tipPercentage: 10,
      tipAmount: tipMoney,
      totalAmount: finalMoney,
    };
  }
  if (serviceRating === 3) {
    tipMoney = billAmount * 0.15;
    finalMoney = tipMoney + billAmount;
    return {
      tipPercentage: 15,
      tipAmount: tipMoney,
      totalAmount: finalMoney,
    };
  }
  if (serviceRating === 4) {
    tipMoney = billAmount * 0.2;
    finalMoney = tipMoney + billAmount;
    return {
      tipPercentage: 20,
      tipAmount: tipMoney,
      totalAmount: finalMoney,
    };
  }
  if (serviceRating === 5) {
    tipMoney = billAmount * 0.25;
    finalMoney = tipMoney + billAmount;
    return {
      tipPercentage: 25,
      tipAmount: tipMoney,
      totalAmount: finalMoney,
    };
  }
}
