
// Exchange rate from USD to INR (example rate - we'll implement a dynamic one)
const USD_TO_INR_RATE = 83.18; // As of recent rate

/**
 * Convert USD to INR
 * @param usdAmount Amount in USD
 * @returns Amount in INR
 */
export const convertUSDtoINR = (usdAmount: number): number => {
  return usdAmount * USD_TO_INR_RATE;
};

/**
 * Format price in INR with Rupee symbol
 * @param inrAmount Amount in INR
 * @returns Formatted string with ₹ symbol
 */
export const formatINR = (inrAmount: number): string => {
  // Format to 2 decimal places and add Indian Rupee symbol
  return `₹${inrAmount.toFixed(2)}`;
};

/**
 * Directly convert USD amount to INR and format with ₹ symbol
 * @param usdAmount Amount in USD
 * @returns Formatted string in INR with ₹ symbol
 */
export const formatPriceInINR = (usdAmount: number): string => {
  const inrAmount = convertUSDtoINR(usdAmount);
  return formatINR(inrAmount);
};
