import throttle from 'lodash.throttle';

const inputKey = 'feedback-form-state';
const emailRef = document.getElementsByName('email');
const messageRef = document.getElementsByName('message');
const submitRef = document.querySelector('.feedback-form');

emailRef[0].addEventListener('input', throttle(onDataChange, 500));

messageRef[0].addEventListener('input', throttle(onDataChange, 500));

function onDataChange(event) {
  let data = { email: '', message: '' };

  const newInput = localStorage.getItem(inputKey);
  if (!newInput) {
    data[event.target.getAttribute('name')] = event.target.value;
  } else {
    data = JSON.parse(newInput);
    data[event.target.getAttribute('name')] = event.target.value;
  }
  localStorage.setItem(inputKey, JSON.stringify(data));
}

function getInputValue() {
  const savedInput = localStorage.getItem(inputKey);
  const parsedInput = JSON.parse(savedInput);
  if (!parsedInput) {
    return;
  }
  emailRef[0].value = parsedInput.email;
  messageRef[0].value = parsedInput.message;
}

getInputValue();

submitRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.log(localStorage.getItem(inputKey));
  localStorage.clear(inputKey);
  event.currentTarget.reset();
}

