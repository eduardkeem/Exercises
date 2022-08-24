
        /* Составьте программу, которая принимает с клавиатуры два целых числа и,
        если первое больше второго, выводит на экран их сумму, если же наоборот -
        выводит на экран их произведение. В случае же, если числа одинаковы,
        программа выводит на экран сообщение "числа одинаковые".
        Проверка => ввод: 9, 2 => вывод: 11; ввод: 3, 8 => 24; ввод: 6, 6 => вывод:
        числа одинаковые. */

        let firstNumber = Number(prompt("Введите первое число"));
        let secondNumber = Number(prompt("Введите второе число"));

        if (firstNumber > secondNumber) {
            alert(firstNumber + secondNumber);
        } else if (firstNumber < secondNumber) {
            alert(firstNumber * secondNumber);
        } else {
            alert("Числа одинаковые");
        }
