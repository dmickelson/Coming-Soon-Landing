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
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  // Using ES6/ES2015 Template String, these are NOT single quotes but back marks
  // Users variables with template strings
  countdown.innerHTML = `
    <div>${days}<span> Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // Has the time/launch date already past?
  if (distance <0 ) {
    // stop countdown
    clearInterval(intvl);
    // style and output text
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
