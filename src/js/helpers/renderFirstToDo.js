import {
	toDoData
} from '../data'

import {
	ideaIcon,
	taskIcon,
	quoteIcon,
	thoughtIcon
} from '../../assets/images/main-table'
import { limit } from './limit';

const table = document.querySelector('.table');

export function renderFirstToDo() {
	const markup = toDoData.reduce((acc, toDo) => {
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

		return acc + `
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
		`
	}, '');
	
	table.insertAdjacentHTML('beforeend', markup);
}