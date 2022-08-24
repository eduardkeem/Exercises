
        /*
        Составьте программу, которая генерирует и выводит на экран 12 целых трехзначных положительных чисел,
		а затем выводит на экран порядковый номер самого большого из сгенерированных чисел.
        Проверка⇑ вывод, например: 223, 872, 745, 512, 331, 448, 129, 917, 882, 543, 529, 174; max значение у №8.
        */

        let min = 100;
        let max = 999;

        let a;
        let b = 0;
        let c = [];
        let count = 1;

        for (i = 0; i < 12; i++) {
            a = Math.round(Math.random() * (max - min) + min);

            // console.log(a);

            if (a > b) {
                b = a;
            }

            c[i] = a;

        }

        for (j = 0; j < 12; j++) {

            if (c[j] !== b) {
                count++;
            }

            if (c[j] == b) {
                break;
            }

        }

        console.log(c);

        console.log('Максимальное число: ' + b);
        console.log('Порядковый номер числа: ' + count);

        /*
        var max;
        var i;
        var a;
        var n;

        function math_random_int(a, b) {
            if (a > b) {                    // Обмен местами a и b, если a > b.
                var c = a;
                a = b;
                b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
        }

        max = 0;

        for (i = 1; i <= 12; i++) {
                a = math_random_int(100, 999);
                window.alert(a);
            if (a > max) {
                max = a;
                n = i;
            }
        }

        window.alert(String('max значение у №') + String(n));
        */
