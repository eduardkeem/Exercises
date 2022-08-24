
        /* Составьте программу, которая принимает с клавиатуры два целых числа
        и выводит на экран следующие значения (каждое в отдельной строке):
        сумму введенных чисел, их произведение, разница между первым и вторым, 
        разницу между вторым и первым.
        Проверка => ввод: 5, 9 => вывод: 14, 45, -4, 4. */

        function getNewNumbers(first, second) {
            sum = first + second;
            console.log(sum);

            composition = first * second;
            console.log(composition);

            firstCompare = first - second;
            console.log(firstCompare);

            secondCompare = second - first;
            console.log(secondCompare);
        }

        getNewNumbers(5, 9);
