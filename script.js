min = Math.ceil(1);
max = Math.floor(50);
var number = Math.floor(Math.random() * (max - min)) + min
console.log(number);

const handlers = [
  { check: value => value === null, toContinue: false, text: "Игра окончена!" },
  { check: value => isNaN(parseInt(value)), toContinue: true, text: "Угадай число от 1 до 100" },
  { check: value => parseInt(value) === number, toContinue: false, text: "Поздравляю, Вы угадали!!!" },
  { check: value => parseInt(value) > number, toContinue: true, text: "Загаданное число больше" },
  { check: value => parseInt(value) < number, toContinue: true, text: "Загаданное число меньше" }
];

let isGuessing = true;
while (isGuessing) {
  const value = prompt("Введите число!");
  const matchedHandler = handlers.find(handler => handler.check(value));
  isGuessing = matchedHandler.toContinue;
  alert(matchedHandler.text);
}