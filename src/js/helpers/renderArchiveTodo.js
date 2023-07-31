import { archiveTodoData } from "../data";
import { icons } from "../../assets/images/main-table";
import { chooseIcon, deleteArchiveTodo, limit, renderStatistic, unarchiveTodo } from "../helpers";

const todoList = document.querySelector('.render-todo');


export function renderArchiveTodo() {
	try {
		const markup = archiveTodoData.reduce((acc, todo) => {
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
					<li class="table-row__item">${limit(todo.content, 30)}</li>
					<li class="table-row__item">${todo.dates}</li>
					<li class="table-row__item">
						<button name="${todo.id}" class="btn-unarchive" type="button">
							<svg class="icon" width="24" height="24">
								<use href="${icons}#icon-unarchive"></use>
							</svg>
						</button>
						<button name="${todo.id}" class="btn-archived-delete" type="button">
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

		const unarchiveNoteBtn = document.querySelectorAll('.btn-unarchive');
		const deleteArchivedNoteBtn = document.querySelectorAll('.btn-archived-delete');

		unarchiveNoteBtn.forEach(btn => {
			btn.addEventListener('click', unarchiveTodo);
		})

		deleteArchivedNoteBtn.forEach(btn => {
			btn.addEventListener('click', deleteArchiveTodo);
		})
	} catch (error) {
		console.log(error)
	}
	
}