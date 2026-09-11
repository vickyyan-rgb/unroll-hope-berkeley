const rsvpPanel = document.querySelector('.rsvp-panel');
const ripButton = document.querySelector('.rip-button');
const tapeButton = document.querySelector('.tape-button');

ripButton?.addEventListener('click', () => rsvpPanel?.classList.add('is-torn'));
tapeButton?.addEventListener('click', () => rsvpPanel?.classList.remove('is-torn'));
