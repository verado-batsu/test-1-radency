import { openModal, renderFirstToDo } from './helpers';

renderFirstToDo();

const createNoteBtn = document.querySelector('.create-note-btn');

createNoteBtn.addEventListener('click', openModal);