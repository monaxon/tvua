export function farsiDigitsToLatinDigits(farsiDigits) {
  let convertedNumber = farsiDigits.replace(/۰/g, 0);
  convertedNumber = convertedNumber.replace(/۱/g, 1);
  convertedNumber = convertedNumber.replace(/۲/g, 2);
  convertedNumber = convertedNumber.replace(/۳/g, 3);
  convertedNumber = convertedNumber.replace(/۴/g, 4);
  convertedNumber = convertedNumber.replace(/۵/g, 5);
  convertedNumber = convertedNumber.replace(/۶/g, 6);
  convertedNumber = convertedNumber.replace(/۷/g, 7);
  convertedNumber = convertedNumber.replace(/۸/g, 8);
  convertedNumber = convertedNumber.replace(/۹/g, 9);
  return convertedNumber;
}
