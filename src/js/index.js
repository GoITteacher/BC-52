import { onForm1Submit } from './tasks/task1.js';
import { onForm2Submit } from './tasks/task2.js';
import { onForm3Submit } from './tasks/task3.js';

const refs = {
  formEl1: document.querySelector('.js-form-1'),
  formEl2: document.querySelector('.js-form-2'),
  formEl3: document.querySelector('.js-form-3'),
};

refs.formEl1.addEventListener('submit', onForm1Submit);
refs.formEl2.addEventListener('submit', onForm2Submit);
refs.formEl3.addEventListener('submit', onForm3Submit);
