const title = prompt('Как называется ваш проект?', "projectJS");
console.log(title);

const screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
console.log(screens);

const screenPrice  = prompt('Сколько будет стоить данная работа?', "1200");
console.log(parseInt(screenPrice));

const adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);