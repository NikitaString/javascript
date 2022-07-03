window.addEventListener('load', function() {
    var number1 = document.querySelector('.inp1');
    var number2 = document.querySelector('.inp2');
    var options = document.querySelector('.sign');
    var btn = document.querySelector('.go');
    var res = document.querySelector('.res');


    btn.addEventListener('click', function() {
        // состояние кнопки
        var operation = options.value;

        if (operation == "sum") {
            console.log(operation);
            sum1 = parseInt(number1.value) + parseInt(number2.value);
            res.innerHTML = sum1;
        }
        else if (operation == "minus") {
            sub = parseInt(number1.value) - parseInt(number2.value);
            res.innerHTML = sub;
        }
        else if (operation == "multi") {
            multi = parseInt(number1.value) * parseInt(number2.value);
            res.innerHTML = multi;
        }
        else if (operation == "div") {
            div = parseInt(number1.value) / parseInt(number2.value);
            res.innerHTML = div;
        }
    });

    
    
});