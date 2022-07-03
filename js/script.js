const result = confirm("Ну как тебе js?");
console.log(result);

const answer = +prompt("Вам есть 18?", "Да, мне уже есть 18 лет"); // приведение к числу
console.log(answer + 5);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет ?', '');

console.log(typeof(answers));

// Интерполяция

const category = 'toys';

console.log(`https://someurl.com./${category}/5`);

const user = "Ivan";

alert(`Привет, ${user}`);