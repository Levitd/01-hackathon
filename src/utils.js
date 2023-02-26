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
export function createBlockMessage(messageAsk){
  const blockMessage = document.createElement('div');
  const blockText = document.createElement('span');
  blockMessage.className = 'custom-block__message';
  blockText.className = 'custom-text__message';
  blockText.textContent = messageAsk;
  blockMessage.append(blockText);
  return document.body.append(blockMessage);
}
export function deleteBlock(){
  const blockMessage = document.querySelector('.custom-block__message')
  setTimeout(() =>{
      blockMessage.remove()
  }, 3000);
}