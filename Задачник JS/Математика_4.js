
        /* Составьте программу, которая генерирует и выводит на экран
        на экран случайное положительное двузначное число, а затем
        генерирует три целых вузначных числа, не меньших первого.
        Проверка => ввод в 1 строке, => например случайное число 77; вывод
        во 2 строке: 92, 83, 87 */

        value = prompt("Введите двузначное положительное число:")

               function firstNumber(min = 10, max = 100) {

                   first = Math.floor(Math.random() * (max - min) + min);

                   if (first < value) {
                       return first;
                   } else {
                       return firstNumber(min, max);
                   }
               }

               firstNumber();

               function secondNumber(min = 10, max = 100) {

                   second = Math.floor(Math.random() * (max - min) + min);

                   if (second < value) {
                       return second;
                   } else {
                       return secondNumber(min, max);
                   }
               }

               secondNumber();

               function thirdNumber(min = 10, max = 100) {

                   third = Math.floor(Math.random() * (max - min) + min);

                   if (third < value) {
                       return third;
                   } else {
                       return thirdNumber(min, max);
                   }
               }

               thirdNumber();

               console.log(first, second, third);