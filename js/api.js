import {showAlert} from './util.js';
const getServer = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const postServer = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(getServer)
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('При загрузке данных с сервера произошла ошибка');
    });};

const sendData = (onSuccess, onFail, body) => {
  fetch(postServer,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onFail();
    })
    .catch(() => onFail());
};

export {getData, sendData};
