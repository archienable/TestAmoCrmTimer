const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timerId

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
buttonEl.disabled = true
const createTimerAnimator = () => {
  return (seconds) => {
    let hour = Math.floor(seconds/60/60).toString().padStart(2,0)
    let min = Math.floor((seconds/60)%60).toString().padStart(2,0)
    let sec = Math.floor(seconds%60).toString().padStart(2,0)
    timerEl.innerHTML = `${hour}:${min}:${sec}`
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const value = inputEl.value
  inputEl.value = value.replace(/\D/g, '')
  buttonEl.disabled = false
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);
  clearInterval(timerId)

  animateTimer(seconds);

  timerId = setInterval(() => {
    seconds -= 1
    animateTimer(seconds)
    if (seconds === 0) {
      clearInterval(timerId)
    }
  }, 1000)

  inputEl.value = '';
});

