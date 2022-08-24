
        /* Составьте программу, которая принимает с клавиатуры два целых числа
        и выводит на экран следующие значения (каждое в отдельной строке):
        квадрат каждого числа (отдельноо) и сумму квадратов введенных чисел.
        Проверка => 4, 6 => вывод: 16, 36, 52. */

        function getNewNumbers (first, second) {
            firstSquare = (first * first);
            console.log(firstSquare);

            secondSquare = (second * second);
            console.log(secondSquare);

            sumSquare = (firstSquare + secondSquare);
            console.log(sumSquare);
        }

        getNewNumbers(4, 6);

        /*
        var a;
        var b;
        a = parseFloat(window.prompt('Введите число a '));
        b = parseFloat(window.prompt('Введите число b '));
        window.alert(Math.pow(a, 2));
        window.alert(Math.pow(b, 2));
        window.alert(Math.pow(a, 2) + Math.pow(b, 2));
        */
