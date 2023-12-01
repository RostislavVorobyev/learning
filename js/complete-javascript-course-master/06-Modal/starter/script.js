'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

showModal.forEach(element => {
  element.addEventListener('click', showModalClick);
});

closeModal.addEventListener('click', closeModalClick);
overlay.addEventListener('click', closeModalClick);
modal.addEventListener('keydown', function (e) {
  console.log('');

  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModalClick();
});

function showModalClick() {
  console.log('show btn clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModalClick() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
