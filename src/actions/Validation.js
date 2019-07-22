export function isEmpty(field) {
  return field === "" ? 1 : 0;
}
export function isNumber(field) {
  const numberFormat = /^[۰-۹]+$/;
  return field.match(numberFormat);
}
export function isTeacherCode(field) {
  const numberFormat = /^[۰-۹]{8}$/;
  return field.match(numberFormat);
}
export function isName(field) {
  const numberFormat = /^[ا-ی\s]+$/;
  return field.match(numberFormat);
}
