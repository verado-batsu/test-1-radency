import { openModal, renderTodo, handleArchiveBtn } from './helpers';
renderTodo();

const createNoteBtn = document.querySelector('.create-note-btn');
const toggleArchiveBtn = document.querySelector('.toggle-archive-btn')

createNoteBtn.addEventListener('click', openModal);
toggleArchiveBtn.addEventListener('click', handleArchiveBtn)