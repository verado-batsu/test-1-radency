import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { todoData } from '../data';
import { closeModal, findDateInText, renderTodo } from '../helpers';

const modalForm = document.querySelector('.modal__form');

let editTodoData = null;

export function getEditData(e) {
	const editId = e.currentTarget.name;
	editTodoData = todoData.find(todo => todo.id === editId)
	const { name, categories, content } = modalForm.elements;

	name.value = editTodoData.name;
	categories.value = editTodoData.category;
	content.value = editTodoData.content;
}

export function editTodo(e) {
	e.preventDefault();
	const { name, categories, content } = e.currentTarget.elements;

	if (name.trim() === '' || content.trim() === '') {
		Notify.failure('Fields must not be empty')
		return;
	}

	const dates = findDateInText(content.value)

	const editedTodo = {
		id: editTodoData.id,
		name: name.value,
		created: editTodoData.created,
		category: categories.value,
		content: content.value,
		dates,
	}
	const index = todoData.findIndex(toDo => toDo.id === editTodoData.id)

	todoData.splice(index, 1, editedTodo);


	renderTodo();
	modalForm.removeEventListener('submit', editTodo)

	closeModal();
}