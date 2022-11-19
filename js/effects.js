const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const picture = document.querySelector('.img-upload__preview img');
const pictureForm = document.querySelector('.img-upload__form');
const levelSlider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

const DEFAULT_EFFECT = EFFECTS[0];
let selectedEffect = DEFAULT_EFFECT;

const isDefault = () => selectedEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  levelSlider.classList.remove('hidden');
  levelSlider.noUiSlider.updateOptions ({
    range:{
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    step: selectedEffect.step,
    start: selectedEffect.max,
  });

  if(isDefault()) {
    levelSlider.classList.add('hidden');
  }
};

const onpictureFormChange = (evt) => {
  if (!evt.target.classList.contains('effects_radio')) {
    return;
  }
  selectedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

  updateSlider();
};

const onSliderUpdate = () => {
  picture.style.filter = 'none';
  picture.className = '';
  levelSlider.value = '';
  if (isDefault()) {
    return;
  }

  const sliderValue = levelSlider.noUiSlider.get();
  picture.style.filter = `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
  picture.classList.add(`effects__preview--${selectedEffect.name}`);
  effectLevel.value = sliderValue;
};

const reloadEffect = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(levelSlider, {
  range: {
    'min': DEFAULT_EFFECT.min,
    'max': DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.max,
  connect: 'lower',
});
updateSlider();


pictureForm.addEventListener('change', onpictureFormChange);
levelSlider.noUiSlider.on('update', onSliderUpdate);

export {reloadEffect};
