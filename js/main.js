import {createPictures} from './miniatures.js';
import {initUploadPhoto, closePictureEditor, formSubmit} from './form.js';
import {getData} from './api.js';
import './scale.js';
import './effects.js';

const PICTURE_COUNT = 25;

getData((photos) => {
  createPictures(photos.slice(0, PICTURE_COUNT));
});

initUploadPhoto();
formSubmit(closePictureEditor);
