export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function numFormat(dec, kolDec) {
  return new Intl.NumberFormat('ru-RU', {
    style: "decimal",
    minimumFractionDigits: kolDec,
    maximumFractionDigits: kolDec
  }).format(dec);
}

export function randomCoordinates(number) {
  return Math.floor(Math.random() * (number - 120))
}

export function getStorage(el) {
  return JSON.parse(localStorage.getItem(el));
}
export function setStorage(el, array) {
  localStorage.setItem(el, JSON.stringify(array));
}
export function getRGBColor() {
  return `${random(0, 255)},${random(0, 255)},${random(0, 255)}`;
}
