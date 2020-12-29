const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countDownContainer = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`February 21 ${nextYear} 00:00:00`);
nextYearContainer.textContent = `February 21 ${nextYear}`;

const updateCountDown = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  secondsContainer.textContent = seconds < 10 ? `0${seconds}` : seconds;
  minutesContainer.textContent = minutes < 10 ? `0${minutes}` : minutes;
  hoursContainer.textContent = hours < 10 ? `0${hours}` : hours;
  daysContainer.textContent = days < 10 ? `0${days}` : days;
};

setTimeout(() => {
  spinnerLoading.remove();
  countDownContainer.style.display = 'flex';
}, 1000);

setInterval(() => {
  updateCountDown();
}, 1000);
