// Источник  https://learn.javascript.ru/task/random-int-min-max

function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

getRandomInteger(4, 9);
checkStringLength(' ', 140);
