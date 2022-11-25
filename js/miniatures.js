const imageContainer = document.querySelector('.container');
const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (photos) => {
  const imageFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments, description}) => {
    const image = imageTemplate.cloneNode(true);
    image.querySelector('.picture__img').src = url;
    image.querySelector('.picture__img').alt = description;
    image.querySelector('.picture__comments').textContent = comments;
    image.querySelector('.picture__likes').textContent = likes;
    imageFragment.appendChild(image);
  });
  imageContainer.appendChild(imageFragment);
};

export {createPictures};

