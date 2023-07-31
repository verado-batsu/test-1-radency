import { renderArchiveTodo, renderTodo } from "../helpers";

export function handleArchiveBtn(e) {
	const btn = e.currentTarget;
	if (btn.classList.contains('hide')) {
		btn.classList.remove('hide');
		btn.classList.add('show');
	
		btn.textContent = 'Show Archive';
		renderTodo()
		return;
	}

	btn.classList.remove('show');
	btn.classList.add('hide');

	btn.textContent = 'Hide Archive';
	renderArchiveTodo()
}