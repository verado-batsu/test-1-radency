import {
	icons
} from '../../assets/images/main-table'

export function chooseIcon(category) {
	let icon = null;
	switch (category) {
		case 'Task':
			icon = 'icon-task';
			break;
		case 'Random Thought':
			icon = 'icon-thought';
			break;
		case 'Idea':
			icon = 'icon-idea';
			break;
		case 'Quote':
			icon = 'icon-quote';
			break;
		default: icon = 'icon-task';
	}

	return `${icons}#${icon}`;
}