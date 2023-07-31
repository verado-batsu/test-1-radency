import { openModal, renderTodo } from './helpers';

renderTodo();

const createNoteBtn = document.querySelector('.create-note-btn');

createNoteBtn.addEventListener('click', openModal);