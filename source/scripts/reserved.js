const reservedToggle = (cardList) => {
	const modalClickArea = cardList.querySelector('.booking-modal__click-area');
	const modalBooking = cardList.querySelector('.booking-modal');
	const buttonReserved = cardList.querySelector('.booking-button');

	const cardListItemHandler = () => {
		modalBooking.classList.add('booking-modal--active');
		cardList.removeEventListener('mouseout', cardListItemHandler);
	};

	const buttonHandler = () => {
		cardList.addEventListener('mouseout', cardListItemHandler);
	};

	const modalHandler = () => {
		modalBooking.classList.remove('booking-modal--active');
	};

	buttonReserved.addEventListener('click', buttonHandler);
	modalClickArea.addEventListener('click', modalHandler);
};

export default reservedToggle;
