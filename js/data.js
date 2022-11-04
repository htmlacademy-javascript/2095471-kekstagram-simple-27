import {getRandomInteger, getRandomArrayElement} from './util.js';

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

const getIdElements = (counter) => {
  const newArray = [];
  for (let i = 1; i <= counter; i++) {
    newArray.push(i);
  }
  return newArray;
};

const ID_ELEMETS = getIdElements(25);

const createPicture = () => ({
  id: getRandomArrayElement(ID_ELEMETS),
  url: `photos/${getRandomArrayElement(ID_ELEMETS)}.jpg`,
  description:  getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: getRandomInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX),
});

const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, createPicture);

export {getPictures};
