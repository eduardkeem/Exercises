
        /* Составьте программу, которая принимает с клавиатуры два целых числа и,
        если оба имеют одинаковый знак, на экран выводится сообщение "один и тот же знак",
        а если разный, то на экран выводится сообщение "разные знаки". Если одно из чисел равно 0,
        выводится сообщение "некорректно".
        Проверка => ввод: 5, 2 => вывод: один и тот же знак; ввод: 1, -5 => вывод: разные знаки;
        ввод: 0, 4 => вывод: некорректно. */

        let firstNumber = Number(prompt("Введите первое число"));
        let secondNumber = Number(prompt("Введите второе число"));

        if ((firstNumber > 0) && (secondNumber > 0)) {
            alert("Один и тот же знак");
        } else if ((firstNumber < 0) && (secondNumber < 0)) {
            alert("Один и тот же знак");
        } else if ((firstNumber < 0) || (secondNumber < 0)) {
            alert("Разные знаки");
        } else {
            alert("Некорректно");
        }
