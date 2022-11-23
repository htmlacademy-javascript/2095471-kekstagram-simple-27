import {isEscapeKey} from './util.js';
import {reloadScale, initScale} from './scale.js';
import {reloadEffect, createSlider, updateSlider, onSliderUpdate, onPictureFormChange} from './effects.js';
import {sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './message.js';


const body = document.body;
const form = document.querySelector('#upload-select-image');
const uploadPhoto = document.querySelector('#upload-file');
const overlayElement = document.querySelector('.img-upload__overlay');
const keyCloseEditor = document.querySelector('.img-upload__cancel');
const effectSliderElement = document.querySelector('.effect-level__slider');
const submitButton = form.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description-text',
});

const onEditorEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureEditor();
  }
};

function closePictureEditor() {
  form.reset();
  overlayElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditorEscKeydown);
  keyCloseEditor.removeEventListener('click', closePictureEditor);
  uploadPhoto.value = '';
  reloadScale ();
  reloadEffect();
}

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const initFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData (
        () => {
          onSuccess();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          showErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }});
};
const initUploadPhoto = () => {
  uploadPhoto.addEventListener('change', () => {
    overlayElement.classList.remove('hidden');
    body.classList.add('modal-open');

    createSlider();
    updateSlider();
    initScale();

    form.addEventListener('change', onPictureFormChange);
    effectSliderElement.noUiSlider.on('update', onSliderUpdate);
    document.addEventListener('keydown', onEditorEscKeydown);
    keyCloseEditor.addEventListener('click', closePictureEditor);
    initFormSubmit(closePictureEditor);
  });
};

export {initUploadPhoto, closePictureEditor};
