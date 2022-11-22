const imageContainer = document.querySelector('.container');
const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (photos) => {
  const imageFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments, description}) => {
    const imageElement = imageTemplate.cloneNode(true);
    imageElement.querySelector('.picture__img').src = url;
    imageElement.querySelector('.picture__img').alt = description;
    imageElement.querySelector('.picture__comments').textContent = comments;
    imageElement.querySelector('.picture__likes').textContent = likes;
    imageFragment.appendChild(imageElement);
  });
  imageContainer.appendChild(imageFragment);
};

export {createPictures};

