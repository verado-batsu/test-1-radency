import {
	toDoData
} from '../data'
import { closeModal } from './openAndCloseModal';


import {
	ideaIcon,
	taskIcon,
	quoteIcon,
	thoughtIcon
} from '../../assets/images/main-table'
import { limit } from './limit';

const table = document.querySelector('.table');
const modalForm = document.querySelector('.modal__form');

modalForm.addEventListener('submit', createNote)

export function createNote(e) {
	e.preventDefault();
	const { name, categories, content } = e.currentTarget.elements;

	const date = new Date()
	const formatDate = date.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
	
	const dates = findDateInText(content.value)

	const newTodo = {
		name: name.value,
		created: formatDate,
		category: categories.value,
		content: content.value,
		dates,
	}

	toDoData.push(newTodo)

	renderNewToDo(newTodo)

	closeModal()
}


function findDateInText(text) {
	const regexp = /\d\/\d\/\d{4}/g;
	console.log(text.match(regexp))

	const result = text.match(regexp)?.join(', ');
	return result || '';
}


function renderNewToDo(toDo) {
	let icon = null;
	switch (toDo.category) {
		case 'Task':
			icon = taskIcon;
			break;
		case 'Random Thought':
			icon = thoughtIcon;
			break;
		case 'Idea':
			icon = ideaIcon;
			break;
		case 'Quote':
			icon = quoteIcon;
			break;
		default: icon = taskIcon;
	}


	const markup = `
	<li class="table__item">
		<ul class="table-row">
			<li class="table-row__item">
			<div class="icon-wrapper">
				<img class="table__icon" src="${icon} width="24" height="24" alt="${toDo.category}">
			</div>
			<span>${limit(toDo.name, 25)}</span>
			</li>
			<li class="table-row__item">${toDo.created}</li>
			<li class="table-row__item">${toDo.category}</li>
			<li class="table-row__item">${limit(toDo.content, 30)}</li>
			<li class="table-row__item">${toDo.dates}</li>
			<li class="table-row__item">buttons</li>
		</ul>
	</li>
	`;
	
	table.insertAdjacentHTML('beforeend', markup);
}

