/**
 * Verify that a number is positive and truthy, or return 0
 * @param {number} n - A number to check.
 */

export default function positiveNumber(n) {
  n = parseInt(n);
  if (isNaN(n) || n < 0) n = 0;
  return n;
}
