import reservedToggle from './reserved.js';

document.addEventListener('DOMContentLoaded', () => {
	const cardListItems = document.querySelectorAll('.room-card-list__item');
	cardListItems.forEach((items) => reservedToggle(items));
});
