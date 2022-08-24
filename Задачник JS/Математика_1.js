
        /* Составьте программу, которая генерирует и выводит на экран
        случайное целое число из диапазона положительных двузначных чисел.
        Проверка => вывод: любое положительное число, 78. */

        function randomNumber(min, max) {
        const r = Math.random() * (max - min) + min;
        return Math.floor(r);
    }

        console.log(randomNumber(10, 100));
