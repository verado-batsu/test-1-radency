import {
	todoData
} from '../data'

import {
	icons
} from '../../assets/images/main-table'
import { archiveTodo, chooseIcon, deleteTodo, limit, openModal, renderStatistic } from '../helpers';

const todoList = document.querySelector('.render-todo');


export function renderTodo() {
	const markup = todoData.reduce((acc, todo) => {
		const icon = chooseIcon(todo.category);

		return acc + `
		<li id="${todo.id}" class="table__item">
			<ul class="table-row">
				<li class="table-row__item">
				<div class="icon-wrapper">
					<svg class="table-icon" width="24" height="24">
						<use href="${icon}"></use>
					</svg>
				</div>
				<span>${limit(todo.name, 25)}</span>
				</li>
				<li class="table-row__item">${todo.created}</li>
				<li class="table-row__item">${todo.category}</li>
				<li class="table-row__item">
					${limit(todo.content, 30)}
				</li>
				<li class="table-row__item">${todo.dates}</li>
				<li class="table-row__item">
					<button name="${todo.id}" class="btn-edit" type="button">
						<svg class="icon" width="24" height="24">
							<use href="${icons}#icon-edit"></use>
						</svg>
					</button>
					<button name="${todo.id}" class="btn-archive" type="button">
						<svg class="icon" width="24" height="24">
							<use href="${icons}#icon-archive"></use>
						</svg>
					</button>
					<button name="${todo.id}" class="btn-delete" type="button">
						<svg class="icon" width="24" height="24">
							<use href="${icons}#icon-delete"></use>
						</svg>
					</button>
				</li>
			</ul>
		</li>
		`
	}, '');

	todoList.innerHTML = markup;

	renderStatistic();

	const deleteNoteBtn = document.querySelectorAll('.btn-delete');
	const editNoteBtn = document.querySelectorAll('.btn-edit');
	const archiveNoteBtn = document.querySelectorAll('.btn-archive');

	deleteNoteBtn.forEach(btn => {
		btn.addEventListener('click', deleteTodo);
	})

	editNoteBtn.forEach(btn => {
		btn.addEventListener('click', openModal);
	})

	archiveNoteBtn.forEach(btn => {
		btn.addEventListener('click', archiveTodo);
	})
}