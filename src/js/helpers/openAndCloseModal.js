const modal = document.querySelector('.modal-wrapper');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', closeModal)

export function openModal() {
	modal.classList.remove('modal-wrapper-close')
}

export function closeModal() {
	modal.classList.add('modal-wrapper-close')
}