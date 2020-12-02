'use strict';
const DateTime = luxon.DateTime;
const initialDate = DateTime.fromObject({
  day: 23,
  month: 11,
  year: 2020,
  hour: 16,
  minute: 11,
  zone: 'America/Sao_Paulo',
  locale: 'pt_BR'
});
const endDate = DateTime.local();
const diff = endDate.diff(initialDate, 'days');

console.log(diff.toObject().days.toFixed(0))

document.querySelector("#first_time").innerText = initialDate.setLocale('en').toLocaleString(DateTime.DATETIME_FULL);