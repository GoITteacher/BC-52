// Напишите функцию, которая будет вычислять
// разницу между двумя датами и выводить
// ее в днях.

export function onForm1Submit(event) {
  event.preventDefault();
  const formElem = event.target;

  const inputOne = formElem.elements.date1.value; // '10/20/2000'
  const inputTwo = formElem.elements.date2.value;
  const inputThree = formElem.elements.result;

  const date1 = new Date(inputOne);
  const date2 = new Date(inputTwo);

  const time = date1 - date2;
  const days = time / 1000 / 60 / 60 / 24;
  inputThree.value = days;
}
