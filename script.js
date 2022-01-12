
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
        appData.allServicePrices = appData.getAllServicesPrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrice()
        appData.title = appData.getTitle()

        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    asking: function() {
        appData.title = promt("Как называется Ваш проект??", "Калькулятор верстки")
        appData.screens = promt("Какие типы экранов нужно разрабатывать?", "Простые, сложные")

        do {
            appData.screenPrice = promt("Сколько будет стоить Ваша работа?")
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    getAllServicePrices: function () {
        
    }
}