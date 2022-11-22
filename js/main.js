import {createPictures} from './miniatures.js';
import {closePictureEditor, formSubmit} from './form.js';
import {getData} from './api.js';
import {} from './message-modal.js';
import './scale.js';
import './filter.js';

const PICTURE_COUNT = 25;

getData((photos) => {
  createPictures(photos.slice(0, PICTURE_COUNT));
});

formSubmit(closePictureEditor);
