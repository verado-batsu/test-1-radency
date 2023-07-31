import { nanoid } from 'nanoid'

import {
	todoData
} from '../data';

import { findDateInText, renderTodo, closeModal } from '../helpers';

const modalForm = document.querySelector('.modal__form');


export function createNote(e) {
	e.preventDefault();
	const { name, categories, content } = e.currentTarget.elements;

	const date = new Date()
	const formatDate = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
	
	const dates = findDateInText(content.value)

	const newTodo = {
		id: nanoid(),
		name: name.value,
		created: formatDate,
		category: categories.value,
		content: content.value,
		dates,
	}

	todoData.push(newTodo)

	renderTodo();

	modalForm.removeEventListener('submit', createNote);
	closeModal();
}


