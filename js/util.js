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

export {getRandomInteger, checkStringLength, getRandomArrayElement, isEscapeKey};
