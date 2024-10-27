import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const showToast = (message, color) => {
  iziToast.show({
    message,
    backgroundColor: color,
    messageColor: 'white',
    position: 'topRight',
    progressBar: false,
    close: false,
    closeOnClick: true,
    iconColor: 'white',
  });
};

const makePromise = (delay, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (res.toLowerCase() === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

form.addEventListener('submit', e => {
  e.preventDefault();

  makePromise(form.elements.delay.value, form.elements.state.value)
    .then(delay => {
      showToast(`✅ Fulfilled promise in ${delay}ms`, 'rgb(50, 205, 50, 0.9)');
    })
    .catch(delay => {
      showToast(`❌ Rejected promise in ${delay}ms`, 'rgb(250, 128, 114, 0.9)');
    });
});
