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
const endDate = DateTime.local().setZone('America/Sao_Paulo');
const i = initialDate.until(endDate);
const duration = i.toDuration(['days', 'months', 'minutes', 'hours']).toObject();

document.querySelector('#first_time').innerText = initialDate.setLocale('en').toLocaleString(DateTime.DATETIME_FULL);

const actualTime = document.querySelector('#actual_time');
const timeTextOnHTML = `${duration.days} days, ${duration.hours} hours, and ${Math.floor(duration.minutes.toFixed(0))} minutes`;

actualTime.innerText = `${timeTextOnHTML}!`;

const timeTextOnElsewhere = `Twitter has taking ${timeTextOnHTML} to answer my fisrt support ask!!!`;
const title = 'Time to Twitter answer me';
const url = 'https://twitter.leocarvalho.dev';
const image = 'http://leocarvalho.dev/storage/images/perfil.webp';

const linkCanonical = document.querySelector('link[rel=canonical]');
const ogURL = document.querySelector('meta[property=\'og:url\']');
const twitterSite = document.querySelector('meta[name=\'twitter:site\']');

const metaDescription = document.querySelector('meta[name=description]');
const ogDescription = document.querySelector('meta[property=\'og:description\']');
const twitterDescription = document.querySelector('meta[name=\'twitter:description\']');

const ogTitle = document.querySelector('meta[property=\'og:title\']');
const twitterTitle = document.querySelector('meta[name=\'twitter:title\']');
const htmlTitle = document.querySelector('title');

const ogImage = document.querySelector('meta[property=\'og:image\']');
const twitterImage = document.querySelector('meta[name=\'twitter:image\']');

linkCanonical.setAttribute('href', url);
ogURL.setAttribute('href', url);
twitterSite.setAttribute('href', url);

metaDescription.setAttribute('content', timeTextOnElsewhere);
ogDescription.setAttribute('content', timeTextOnElsewhere);
twitterDescription.setAttribute('content', timeTextOnElsewhere);

ogTitle.setAttribute('content', title);
twitterTitle.setAttribute('content', title);
htmlTitle.innerText = title;

ogImage.setAttribute('content', image);
twitterImage.setAttribute('content', image);
