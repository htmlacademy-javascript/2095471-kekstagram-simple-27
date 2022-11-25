const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const getRandomArrayElement = (elementsId) => elementsId[getRandomInteger(0, elementsId.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'crimson';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export {getRandomInteger, checkStringLength, getRandomArrayElement, isEscapeKey, showAlert};
