// window.addEventListener('load', function() {
//     let div = document.querySelector('.some');

//     div.addEventListener('click', function() {
//         div.innerHTML += '1';
//     });

//     div.addEventListener('click', function(){
//         div.innerHTML += '2';
//     });
// });

// let x = 100;

// function some() {
//     let x = 10;

//     function other() {
//         let x = 1;
//         console.log(x);
//     }

//     other();
// }

// some();

/* Метод addEventListener() присоединяет обработчик события к определенному элементу. */

// window.addEventListener('load', function() {
//     var some = document.querySelector('.some');
//     var other = document.querySelector('.other');
    
//     some.addEventListener('click', event_handler);
//     other.addEventListener('mouseenter', event_handler);

// }); 

window.addEventListener('load', function() {

    var items = document.querySelectorAll('.box .item'); // в переменной будет коллекция node list

    console.log(items);
    /* 
    0: div.item
    1: div.item
    2: div.item
    3: div.item
    4: div.item
    */

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', toggleActive);
    }

    // OR document.querySelectorAll('.box .item').forEach(el => el.addEventListener('click', event_handler));

});

/* Объект NodeList представляет собой коллекцию узлов.
Такой объект возвращается, когда используются такие методы как document.querySelectorAll(), 
document.getElementsByName() или свойство Node.childNodes. */

/* Контекст(this) */
// function event_handler() {
//     this.style.color = this.dataset.color;
    // console.log(this.dataset);
    // console.log(this.getAttribute('data-color'));
    // var colors = ['#ff0', '#f00', '#00f'];
    // var num = Math.floor(Math.random() * colors.length);
    // this.style.color = colors[num];
//}


// Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
function toggleActive() {
    if (this.classList.toggle('item-active')) {
        this.classList.remove('item-active');
        this.style.color = 'inherit'; // взять цвет родительского элемента
    } else {
        this.classList.add('item-active');
        this.style.color = this.dataset.color;
    }
}