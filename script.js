'use strict';

const openModalButton = document.querySelectorAll('.show-modal');
const modalWindow = document.querySelector('.modal');
const backdrop = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');

console.log(openModalButton);

const openModal = function () {
  modalWindow.classList.remove('hidden');
  backdrop.classList.remove('hidden');
};

const closeModal = function (element1, element2) {
  modalWindow.classList.add('hidden');
  backdrop.classList.add('hidden');
};
for (let i = 0; i < openModalButton.length; i++) {
  openModalButton[i].addEventListener('click', openModal);
}

backdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal(modalWindow, backdrop);
  }
});

closeModalButton.addEventListener('click', () =>
  closeModal(modalWindow, backdrop)
);
