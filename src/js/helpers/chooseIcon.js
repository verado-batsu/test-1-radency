import { Categories } from '../data';
import {
	icons
} from '../../assets/images/main-table'

export function chooseIcon(category) {
	let icon = null;
	switch (category) {
		case Categories.task:
			icon = 'icon-task';
			break;
		case Categories.thought:
			icon = 'icon-thought';
			break;
		case Categories.idea:
			icon = 'icon-idea';
			break;
		case Categories.quote:
			icon = 'icon-quote';
			break;
		default: icon = 'icon-task';
	}

	return `${icons}#${icon}`;
}