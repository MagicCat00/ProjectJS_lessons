const appData = {
    title: '',
    screens: '',
    screenPrice: '',
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrice()
        appData.title = appData.getTitle()

        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    asking: function() {
        appData.title = prompt('Как называется Ваш проект?', 'Калькулятор верстки')
        appData.screens = prompt('Какие типы экранов нужно разрабатывать?', 'Простые, сложные')

        do {
            appData.screenPrice = prompt("Сколько будет стоить Ваша работа?")
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    getAllServicePrices: function () {
        let sum = 0

        for (let i = 0; i < 2; i++) {
            let price = 0

            if (i == 0) {
                appData.service1 = prompt("Какая дополнительная услуга нужна?")
            } else if (i == 1) {
                appData.service2 = prompt("Какая дополнительная услуга нужна?")
            }

            do {
                price = prompt("Сколько будет стоить?")
            } while (!appData.isNumber(price))

            sum += +price
        }

        return sum
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Скидка 10%"
        } else if (price >= 15000 && price <30000) {
            return "Скидка 5%"
        } else if (price >= 0 && price < 15000) {
            return "Скидка не будет, т.к. сумма слишком маленькая"
        } else {
            return "Ошибка"
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    }
}
appData.start()