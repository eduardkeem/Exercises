
        /* Составьте программу, которая генерирует и выводит на экран
        2 случайных однозначных целых числа (включая положительные и отрицательные).
        После этого в отдельной строке программа должна вывести наибольшее из этих двух числел,
        и в еще одной строке - наименьшее из этих двух чисел.
        Проверка => вывод в 1 строке, например: случайные числа: 4, -9; вывод во 2 строке:
        наибольшее из двух чисел 4; вывод в 3 строке: наименьшее из двух чисел -9. */

        const min = -9;
        const max = 9;

        const firstNumber = Math.floor(Math.random() * (max - min) + min);

        const secondNumber = Math.floor(Math.random() * (max - min) + min);

        console.log(firstNumber, secondNumber);


        if (firstNumber > secondNumber) {
            console.log(firstNumber);
            console.log(secondNumber);
        } else {
            console.log(secondNumber);
            console.log(firstNumber);
        }
