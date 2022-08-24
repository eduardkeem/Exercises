
        /*
        Составьте программу, которая генерирует и выводит на экран серию из 8 случайных двузначных положительных чисел и определяет сумму чётных значений в серии.
        Проверка⇑ вывод, например: 42, 87, 74, 51, 33, 45, 12, 59; сумма чётных чисел = 128.
        */


                let min = 10;
                let max = 100;

                let getRandomNumbers = [];

                let count = 0;

                for (let i = 0; i < 8; i++) {
                    getRandomNumbers[i]= Math.round(Math.random() * (max - min) + min);

                    if (getRandomNumbers[i] % 2 === 0) {
                        count += getRandomNumbers[i];
                    }
                }

                console.log(getRandomNumbers);
                console.log('Сумма четных чисел: ' + count);

    /*
                var s
                var i;
                var a;

                function math_random_int(a, b) {
                    if (a > b) {                         // Обмен местами a и b, если a > b.

                    var c = a;
                    a = b;
                    b = c;
                }
                return Math.floor(Math.random() * (b - a + 1) + a);
            }

                s = 0;

                for (i = 1; i <= 8; i++) {
                    a = math_random_int(10, 99);
                    window.alert(a);

                if (a % 2 == 0) {
                    s = s + a;
                }
            }
                window.alert(String('сумма чётных чисел = ') + String(s));

    */
