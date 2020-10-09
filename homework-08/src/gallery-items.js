const pictures = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

{
  /* <div class="lightbox js-lightbox">
  <div class="lightbox__overlay"></div>

  <div class="lightbox__content">
    <img class="lightbox__image" src="" alt="" />
  </div> */
}

const ref = {
  galary: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  closeBtn: document.querySelector('.lightbox__button'),
  lightbox: document.querySelector('.lightbox__content'),
  isOpen: document.querySelector('.is-open'),
  imgOnModal: document.querySelector('.lightbox__image'),
  btnNextModal: document.querySelector('.modalbtn-next'),
  btnPreviousModal: document.querySelector('.modalbtn-prev'),
  overlay: document.querySelector('.lightbox__overlay'),
};

ref.galary.addEventListener('click', onClickOpenModal);
ref.closeBtn.addEventListener('click', onClickCloseModal);
ref.overlay.addEventListener('click', onClickOverlayCloseModal);

function makePictureMurkup(picture) {
  return picture
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join('');
}
const allPicture = makePictureMurkup(pictures);
ref.galary.insertAdjacentHTML('beforeend', allPicture);

function onClickOpenModal(event) {
  event.preventDefault();
  const originalPicture = event.target.dataset.source;
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  window.addEventListener('keydown', onEscapeCloseModal);
  ref.modal.classList.add('is-open');
  ref.imgOnModal.src = originalPicture;
}

function onClickCloseModal(event) {
  ref.modal.classList.remove('is-open');
  ref.imgOnModal.src = '';
  window.removeEventListener('keydown', onEscapeCloseModal);
}

function onClickOverlayCloseModal(event) {
  if (event.target === event.currentTarget) {
    onClickCloseModal();
  }
}

function onEscapeCloseModal(event) {
  if (event.code === 'Escape') {
    onClickCloseModal();
  }
  console.log(event);
}
