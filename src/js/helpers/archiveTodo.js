import { archiveTodoData, todoData } from "../data"
import { renderArchiveTodo, renderTodo } from "../helpers";

export function archiveTodo(e) {
	const archiveId = e.currentTarget.name;

	let archiveTodoIndex = null;

	const archiveTodo = todoData.find((todo, index) => {
		if (todo.id === archiveId) {
			archiveTodoIndex = index;
		}
		return todo.id === archiveId
	});
	todoData.splice(archiveTodoIndex, 1);
	archiveTodoData.push(archiveTodo);

	renderTodo();
}

export function unarchiveTodo(e) {
	const todoId = e.currentTarget.name;

	let todoIndex = null;

	const todo = archiveTodoData.find((todo, index) => {
		if (todo.id === todoId) {
			todoIndex = index;
		}
		return todo.id === todoId
	});

	archiveTodoData.splice(todoIndex, 1);
	todoData.push(todo);

	renderArchiveTodo();
}