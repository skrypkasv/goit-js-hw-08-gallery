import data from './gallery-items.js';

// ▶ Создание и рендер разметки по массиву данных и
// предоставленному шаблону.
const gallery = document.querySelector('ul.js-gallery');
const markup = createGalleryMarkup(data);
gallery.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup(listItems) {
  return listItems.map(({ preview, original, description }, indx) => {
    return `<li class="gallery__item">
              <a
                class="gallery__link"
                href="${original}"
              >
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  data-index="${indx}"
                  alt="${description}"
                />
              </a>
          </li>`
  }).join('');
}

// ▶ Реализация делегирования на галерее ul.js-gallery
// и получение url большого изображения.
// ▶ Открытие модального окна по клику на элементе
// галереи.
// ▶ Подмена значения атрибута src элемента
// img.lightbox__image.
gallery.addEventListener('click', openModal)
const modal = document.querySelector('div.js-lightbox')
const modalImg = document.querySelector('img.lightbox__image')

function openModal(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  modal.classList.add('is-open');
  changeModalImgAttributes(evt);

  window.addEventListener('keydown', onEscKeydown)
}
function changeModalImgAttributes(evt) {
  modalImg.src = evt.target.dataset.source;
  modalImg.alt = evt.target.alt;
}

// ▶ Закрытие модального окна по клику на кнопку
// button[data - action= "close-lightbox"].
// ▶ Очистка значения атрибута src элемента
// img.lightbox__image.Это необходимо для того,
// чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.
const btnCloseModal = document.querySelector('button[data-action="close-lightbox"]');
btnCloseModal.addEventListener('click', closeModal);

function closeModal() {
  window.removeEventListener('keydown', onEscKeydown)
  modal.classList.remove('is-open');
  modalImg.src = '';
}

// Дополнительно
// Следующий функционал не обязателен при сдаче
// задания, но будет хорошей практикой по работе с
// событиями:

// ▶ Закрытие модального окна по клику на
// div.lightbox__overlay.
const modalBackdrop = document.querySelector('div.lightbox__overlay');
modalBackdrop.addEventListener('click', closeModal);


// ▶ Закрытие модального окна по нажатию клавиши ESC.
function onEscKeydown(evt) {
  if (evt.code === 'Escape') {
    closeModal()
  }
}
// ▶ Пролистывание изображений галереи в открытом
// модальном окне клавишами "влево" и "вправо".
// function goToNxtPrevImg(evt) {
//   if (evt.code === 'ArrowRight') {
//     console.log('next');
//   }
//   if (evt.code === 'ArrowLeft') {
//     console.log('previous')
//   }
// }


/*Ссылка на оригинальное изображение должна храниться
в data-атрибуте source на элементе img, и
указываться в href ссылки(это необходимо для
доступности): ⬇⬇⬇
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */
