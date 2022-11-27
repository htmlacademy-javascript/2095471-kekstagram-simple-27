import {isEscapeKey} from './util.js';
import {reloadScale, initScale} from './scale.js';
import {reloadEffect, createSlider, updateSlider, onSliderUpdate, onPictureFormChange} from './effects.js';
import {sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './message.js';


const body = document.body;
const form = document.querySelector('#upload-select-image');
const uploadPhoto = document.querySelector('#upload-file');

const overlay = document.querySelector('.img-upload__overlay');
const keyCloseEditor = document.querySelector('.img-upload__cancel');
const effectSlider = document.querySelector('.effect-level__slider');
const submitButton = form.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description-text',
});

const clearErrorMessages = () => {
  const errorMessage = document.querySelector('.pristine-error');

  if(errorMessage) {
    errorMessage.innerHTML = '';
  }
};

const onEditorEscKeydown = (evt) => {
  if(isEscapeKey(evt) && !document.querySelector('.error')) {
    evt.preventDefault();
    onClosePictureEditor();
  }
};

function onClosePictureEditor() {
  form.reset();
  clearErrorMessages();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditorEscKeydown);
  keyCloseEditor.removeEventListener('click', onClosePictureEditor);
  uploadPhoto.value = '';
  reloadScale();
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
    if(isValid) {
      blockSubmitButton();
      sendData (
        () => {
          onSuccess();
          showSuccessMessage();
          unblockSubmitButton();
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
    overlay.classList.remove('hidden');
    body.classList.add('modal-open');

    createSlider();
    initScale();
    updateSlider();

    form.addEventListener('change', onPictureFormChange);
    effectSlider.noUiSlider.on('update', onSliderUpdate);
    document.addEventListener('keydown', onEditorEscKeydown);
    keyCloseEditor.addEventListener('click', onClosePictureEditor);
    initFormSubmit(onClosePictureEditor);
  });
};

export {initUploadPhoto, onClosePictureEditor};
