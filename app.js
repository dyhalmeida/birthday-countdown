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

const getTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds);
  minutesContainer.textContent = getTimeUnit(minutes);
  hoursContainer.textContent = getTimeUnit(hours);
  daysContainer.textContent = getTimeUnit(days);
};

const updateCountDown = () => {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  insertCountDownValues({ days, hours, minutes, seconds });
};

const handleCountDownDisplay = () => {
  spinnerLoading.remove();
  countDownContainer.style.display = 'flex';
};

setTimeout(handleCountDownDisplay, 1000);

setInterval(() => {
  updateCountDown();
}, 1000);
