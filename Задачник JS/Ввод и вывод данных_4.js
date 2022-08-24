
        /* Составьте программу, которая принимает с клавиатуры целое число
        и выводит на экран два новых числа (каждое в отдельной строке):
        число, больше введенного с клавиатуры на 7, и число меньше введенного с клавиатуры на 9.
        Проверка => ввод: 5 => вывод: 12, -4. */

        function getNewNumbers(num) {
            let firstNumber = (num + 7);
            //console.log(firstNumber);
            alert(firstNumber);

            let secondNumber = (num - 9);
            //console.log(secondNumber);
            alert(secondNumber);
        }

        getNewNumbers(5);
