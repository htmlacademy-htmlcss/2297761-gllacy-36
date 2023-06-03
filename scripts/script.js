const buttonContakts = document.querySelector('.button-contacts');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal-close-button');

if (buttonContakts) {
    buttonContakts.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.add('modal-container--show');
    });

    closeButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal-container--show');
    });
}
