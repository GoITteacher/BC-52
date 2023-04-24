//Напишите функцию, которая будет проверять,
// находится ли заданная дата в будущем
// или прошлом.

export function onForm2Submit(event) {
  event.preventDefault();
  const date = event.target.elements.date.value;
  const currentDate = new Date();
  const userDate = new Date(date);
  const isFuture = userDate.getTime() > currentDate.getTime(); // false

  const resultElem = event.target.elements.result;
  resultElem.value = isFuture ? 'Future' : 'Past';
}
