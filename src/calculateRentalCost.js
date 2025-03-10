/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const number = days * 40;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return number - longTermDiscount;
  }

  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= shortTerm) {
    return number - shortTermDiscount;
  }

  return number;
}

module.exports = calculateRentalCost;
