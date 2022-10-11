// Источник  https://learn.javascript.ru/task/random-int-min-max

function randomInteger(min, max) {
  if (min < 0 || max < 0) {
    return NaN
  }
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function stringLength (string, length) {
  if (length <= 140) {
    return true;
  }
  else{
    return false;
  }
}

randomInteger(4, 9)
stringLength ('', 10)
