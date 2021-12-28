let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать ?', 'Простые, Сложные, Интерактивные')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive  = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice2 = +prompt('Сколько это будет стоить?')
let rollback = 10
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice  = fullPrice - (fullPrice  * (rollback / 100 ))

function getRollbackMessage() {
    if (fullPrice >= 30000) {
        return "Даем скидку в 10%"
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return "Даем скидку в 5%"
    } else if (fullPrice >= 0 && fullPrice < 15000) {
        return "Скидка не предусмотрена"
    } else {
        return "Скидка не предусмотрена"
    }
}

console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

function getAllServicePrices() {
    return servicePrice1 + servicePrice2;;
}

const getFullPrice = function () {
    return screenPrice + allServicePrices;
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

console.log(screens.length);
console.log(servicePercentPrice);
