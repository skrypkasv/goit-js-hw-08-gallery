import './sass/main.scss';

import data from './js/data.js';

import { createGalleryMarkup, gallery } from './js/create-markup';
gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(data));


import { openModal } from './js/open-modal';
gallery.addEventListener('click', openModal)


import {btnCloseModal, closeModal, modalBackdrop} from './js/close-modal';
btnCloseModal.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);