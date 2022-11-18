import {isEscapeKey} from './util.js';
import './miniatures.js';

const body = document.body;
const uploadPhoto = document.querySelector('#upload-file');
const editorForm = document.querySelector('.img-upload__overlay');
const keyCloseEditor = document.querySelector('.img-upload__cancel');
const pictureForm = document.querySelector('.img-upload__form');

const onEditorEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closePictureEditor();
  }
};

function closePictureEditor() {
  editorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditorEscKeydown);
  uploadPhoto.value = '';
}

const openPictureEditor = () => uploadPhoto.addEventListener('change', () => {
  editorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEditorEscKeydown);
});

keyCloseEditor.addEventListener('click', closePictureEditor);

const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description-text',
});

pictureForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {openPictureEditor};
