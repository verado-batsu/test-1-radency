import {
	todoData,
	archiveTodoData
} from '../data'
import { renderArchiveTodo, renderTodo } from '../helpers';

export function deleteTodo(e) {
	const deleteId = e.currentTarget.name;

	const index = todoData.findIndex(toDo => toDo.id === deleteId)

	todoData.splice(index, 1);

	renderTodo();
}


export function deleteArchiveTodo(e) {
	const deleteId = e.currentTarget.name;

	const index = archiveTodoData.findIndex(toDo => toDo.id === deleteId)

	archiveTodoData.splice(index, 1);

	renderArchiveTodo();
}