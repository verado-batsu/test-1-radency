import { createNote, editTodo, getEditData } from "../helpers";

const modal = document.querySelector('.modal-wrapper');
const closeBtn = document.querySelector('.close-btn');
const formBtn = document.querySelector('.form-btn');
const modalForm = document.querySelector('.modal__form');

closeBtn.addEventListener('click', closeModal);


export function openModal(e) {
	if (e.currentTarget.classList.contains('btn-edit')) {
		formBtn.textContent = 'Edit';
		getEditData(e);

		modalForm.addEventListener('submit', editTodo)
	}
	else if (e.currentTarget.classList.contains('create-note-btn')) {
		formBtn.textContent = 'Create Note';

		modalForm.addEventListener('submit', createNote)
	}
	modal.classList.remove('modal-wrapper-close')
}

export function closeModal() {
	modalForm.reset();
	modal.classList.add('modal-wrapper-close')
}