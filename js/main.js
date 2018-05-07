const countdown = document.querySelector('.countdown');

// Set launch date (ms)

const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

// Update every second
// Using arrow function
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date ().getTime();

  // Get distance from now to launch date (ms)
  const distance = launchDate - now;

  // time calculations days, hrs, minutes
  const days = Math.floor(distance/ (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 *60));
  const mins = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60 * 60));
}, 1000);
