import { renderTodo } from "./renderTodo";
import { createNote } from "./createNote";
import { limit } from "./limit";
import { openModal, closeModal } from "./openAndCloseModal";
import { chooseIcon } from './chooseIcon'
import { deleteTodo, deleteArchiveTodo } from "./deleteTodo";
import { editTodo, getEditData } from "./editTodo";
import { findDateInText } from "./findDateInText";
import { renderStatistic } from "./renderStatistic";
import { calculateStatistic } from "./calculateStatistic";
import { archiveTodo, unarchiveTodo } from "./archiveTodo";
import { renderArchiveTodo } from "./renderArchiveTodo";
import { handleArchiveBtn } from "./handleArchiveBtn";

export {
	renderTodo,
	createNote,
	limit,
	openModal,
	chooseIcon,
	deleteTodo,
	editTodo,
	findDateInText,
	closeModal,
	getEditData,
	renderStatistic,
	calculateStatistic,
	archiveTodo,
	renderArchiveTodo,
	unarchiveTodo,
	deleteArchiveTodo,
	handleArchiveBtn
}