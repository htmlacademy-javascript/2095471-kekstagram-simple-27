import {isEscapeKey} from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const successButton = successMessageTemplate.querySelector('.success__button');
const errorButton = errorMessageTemplate.querySelector('.error__button');

const onMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onCloseButtonClick = () => {
  closeMessage();
};

const onOverlayClickSucsess = (evt) => {
  if (!evt.target.classList.contains('success__inner')) {
    closeMessage();
  }
};

const onOverlayClickError = (evt) => {
  if (!evt.target.classList.contains('error__inner')) {
    closeMessage();
  }
};

const showSuccessMessage = () => {
  closeMessage();
  const successMessage = successMessageTemplate.cloneNode(true);
  document.addEventListener('click', onOverlayClickSucsess);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  successButton.addEventListener('click', onCloseButtonClick);
  document.body.append(successMessage);
};


const showErrorMessage = () => {
  closeMessage();
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.addEventListener('click', onOverlayClickError);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  errorButton.addEventListener('click', onCloseButtonClick);
  document.body.append(errorMessage);
};

function closeMessage() {
  const message = document.querySelector('.success') || document.querySelector('.error');

  if(message) {
    message.remove();
  }
  document.removeEventListener('click', onOverlayClickSucsess);
  document.removeEventListener('click', onOverlayClickError);
  document.removeEventListener('keydown', onMessageEscKeydown, true);
}

export {showSuccessMessage, showErrorMessage};
