const PICTURE_COUNT = 25;

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200,
};

const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 200,
};

const DESCRIPTIONS = [
  'Новый пост!',
  'Это знак! Все на пляж!',
  'Как же это красиво.',
  'Кадр для истории',
  'Обед - это не только вкусно, но и креативно.',
  'Настоящий черный рыцарь, вы только посмотрите.',
  'Красота в мелочах',
  'Заряжаемся витаминами',
  'Вау, это самолет!',
  'Стиль и удобство.',
  'Дорога к морю и отдыху.',
  'Если передвигаться, то только так!',
  'Соцсети для красивой еды!',
  'Король суси, Мяу!',
  'Долгожданный отдых после бурного дня.',
  'А это начало путешествия, захватывающе!',
  'Культурная программа обязательна!',
  'Настоящее ретро!',
  'Такое изобретение просто необходимо в массы!',
  'А это на память.',
  'Доброе утро! А как завтракаете Вы?',
  'Красивый закат был вчера',
  'Местная фауна достаточно приветлива.',
  'Обязательно нужно посетить концерт! Это была настоящая жара!',
  'Этот приятель решил помочь выбраться из "ловушки"',
];

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

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getIdElements = (counter) => {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    newArray.push(i);
  }
  return newArray;
};

const ID = getIdElements(25);

const createPicture = () => ({
  id: getRandomArrayElement(ID),
  url: `photos/${getRandomArrayElement(ID)}.jpg`,
  description:  getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
});

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, createPicture);

getPictures();
getRandomInteger(4, 9);
checkStringLength(' ', 140);
