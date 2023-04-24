// Напишите функцию, которая будет добавлять
// к текущей дате заданное количество
// дней, месяцев или лет.

export function onForm3Submit(event) {
  event.preventDefault();
  const userData = event.target.elements.date.value;
  const dataType = event.target.elements.type.value;
  const currentDate = new Date();

  switch (dataType) {
    case 'day':
      currentDate.setDate(currentDate.getDate() + Number(userData));
      break;
    case 'month':
      currentDate.setMonth(currentDate.getMonth() + Number(userData));
      break;
    case 'year':
      currentDate.setFullYear(currentDate.getFullYear() + Number(userData));
      break;
  }

  const resultEl = event.target.elements.result;
  resultEl.value = currentDate;
}
