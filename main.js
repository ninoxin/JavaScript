let title = "JavaScript";
console.log(typeof title);

let screens = "Простые, Сложные, Интерактивные";
console.log(screens.length);
screens = ['Простые, Сложные, Интерактивные'];
console.log(screens);

let screenPrice = "1233";
console.log(screenPrice);

let rollback = Math.floor(Math.random() * 100);
console.log(rollback);

let fullPrice = 1343;
console.log(typeof fullPrice);

let adaptive = true;
console.log(typeof adaptive);

console.log('Стоимость верстки экранов ', screenPrice, '  рублей/ долларов/ гривен/ юани' + 'и Стоимость разработки сайта ', fullPrice, ' рублей/ долларов/гривен/юани');

let result = 'fullPrice' * ('rollback' / 100);
console.log(result);