const reservedToggle = () => {
	const hotelCardList = document.querySelector('.room-card-list');

	if (hotelCardList) {
		const cardWrapper = hotelCardList.querySelectorAll('.card-top-wrapper');
		const modalBooking = hotelCardList.querySelectorAll('.booking-modal');
		const hotelCardListItem = hotelCardList.querySelectorAll('.room-card-list__item');
		const buttonReserved = hotelCardList.querySelectorAll('.booking-button');

		

		hotelCardList.addEventListener('click', (event) => {
			hotelCardListItem.forEach((item) => {
				if (event.target === item.querySelector('.booking-button')) {
					item.addEventListener('mouseover', (evt) => {
						if (evt.relatedTarget.closest('LI'))
							item.querySelector('.booking-modal').classList.add('booking-modal--active');
					});
				} else if (event.target === item.querySelector('.booking-modal')) {
					item.querySelector('.booking-modal').classList.remove('booking-modal--active');
				}
			});
		});
	}
};

export default reservedToggle;
