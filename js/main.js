import {createPictures} from './miniatures.js';
import {initUploadPhoto} from './form.js';
import {getData} from './api.js';

const PICTURE_COUNT = 25;

getData((photos) => {
  createPictures(photos.slice(0, PICTURE_COUNT));
});

initUploadPhoto();
