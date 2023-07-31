import {
	todoData
} from '../data'
import { renderTodo } from '.';

export function deleteTodo(e) {
	const deleteId = e.currentTarget.name;

	const index = todoData.findIndex(toDo => toDo.id === deleteId)

	todoData.splice(index, 1);

	renderTodo();
}