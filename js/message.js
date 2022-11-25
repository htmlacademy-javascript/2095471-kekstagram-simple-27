import {isEscapeKey} from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const onSuccessButton = successMessageTemplate.querySelector('.success__button');
const onErrorButton = errorMessageTemplate.querySelector('.error__button');

const onMessageEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onOverlayClick = (evt) => {
  if(!evt.target.classList.contains('error__inner')) {
    closeMessage();
  }
};

const closeButtonClick = () => {
  closeMessage();
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  onSuccessButton.addEventListener('click', closeButtonClick);
  document.body.append(successMessage);
};


const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onMessageEscKeydown, true);
  onErrorButton.addEventListener('click', closeButtonClick);
  document.body.append(errorMessage);
};

function closeMessage() {
  const message =
    document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('click',onOverlayClick);
  document.removeEventListener('keydown', onMessageEscKeydown, true);
}

export {showSuccessMessage, showErrorMessage};
