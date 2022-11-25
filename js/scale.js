const SCALE_STEP = 25;
const MINIMAL_SCALE = 25;
const MAXIMAL_SCALE = 100;
const DEFAULT_SCALE = 100;

const smallButton = document.querySelector('.scale__control--smaller');
const bigButton = document.querySelector('.scale__control--bigger');
const scalePicture = document.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview img');

const scalePic = (value = DEFAULT_SCALE) => {
  picture.style.transform = `scale(${value / 100})`;
  scalePicture.value = `${value}%`;
};

const onSmallButtonClick = () => {
  const currentValue = parseInt(scalePicture.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < SCALE_STEP) {
    newValue = MINIMAL_SCALE;
  }
  scalePic(newValue);
};

const onBigButtonClick = () => {
  const currentValue = parseInt(scalePicture.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > SCALE_STEP) {
    newValue = MAXIMAL_SCALE;
  }
  scalePic(newValue);
};

const reloadScale = () => {
  scalePic();
};

smallButton.addEventListener('click', onSmallButtonClick);
bigButton.addEventListener('click', onBigButtonClick);

export {reloadScale};
