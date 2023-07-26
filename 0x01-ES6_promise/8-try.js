/* eslint-disable */
export default function divideFunction(numerator, denominator) {
  // When the denominator argument is equal to 0, the function should throw an error
  if (denominator === 0) {
	  throw Error('cannot divide by 0');
  }
  return numerator / denominator;
}
