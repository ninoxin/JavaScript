let title = "JavaScript";
console.log(typeof title);

const answ = prompt('Как называется ваш проект?', title);
console.log(answ);

let screens = "Простые, Сложные, Интерактивные";
console.log(screens.length);

const answ2 = prompt('Какие типы экранов нужно разработать ?', screens);
console.log(answ2);


let screenPrice = "1233";
console.log(screenPrice);

const answ3 = prompt('Сколько будет стоить данная работа?', screenPrice);
console.log(answ3);



let rollback = Math.floor(Math.random() * 100);
console.log(rollback);

let fullPrice = 1343;
console.log(typeof fullPrice);

let adaptive = true;
console.log(typeof adaptive);

const answ4 = confirm('Нужен ли адаптив на сайте?');
console.log(answ4);

console.log('Стоимость верстки экранов ', screenPrice, '  рублей/ долларов/ гривен/ юани' + 'и Стоимость разработки сайта ', fullPrice, ' рублей/ долларов/гривен/юани');

let result = 'fullPrice' * ('rollback' / 100);
console.log(result);





