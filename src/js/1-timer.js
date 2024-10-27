import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let userSelectedDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];

    if (userSelectedDate.getTime() <= Date.now()) {
      //   console.log('input.value < Date.now()');
      iziToast.show({
        message: 'Please choose a date in the future',
        backgroundColor: 'red',
        messageColor: 'white',
        position: 'topRight',
        progressBar: false,
        close: false,
        closeOnClick: true,
        icon: 'fa-regular fa-times-circle',
        iconColor: 'white',
      });
      startBtn.setAttribute('disabled', true);
    } else {
      startBtn.removeAttribute('disabled');
      startBtn.addEventListener('click', startTimer);
    }
  },
};

startBtn.setAttribute('disabled', true);
flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function startTimer() {
  startBtn.setAttribute('disabled', true);
  input.setAttribute('disabled', true);

  const timerId = setInterval(() => {
    const deltaTime = userSelectedDate - Date.now();

    if (deltaTime <= 0) {
      clearInterval(timerId);
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';

      input.removeAttribute('disabled');
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}
