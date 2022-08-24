
        /*
        Составьте программу, которая генерирует и выводит на экран 8 целых трехзначных положительных чисел и выводит на экран порядковый номер числа, сумма цифр которого была максимальной.
        Проверка⇑ вывод, например: 462, 308, 521, 140, 989, 812, 109, 391; max сумма цифр у №5.
        */

        let min = 100;
        let max = 999;

        let a = [];
        let b = 0;
        let c;
        let d;
        let n;
        let z = [];

        for (i = 0; i < 8; i++) {
            a[i] = Math.round(Math.random() * (max - min) + min);
        }


        for (j = 0; j < 8; j++) {
            c = [...a[j].toString()].map(Number);
            console.log(c);

            d = c[0] + c[1] + c[2];
            console.log(d);

            if (d > b) {
                b = d;
                n = j + 1;
            }

            z[j] = d;

        }

        console.log(z);

        console.log('Максимальная сумма числа: ' + b);
        console.log('Порядковый номер числа: ' + n);

        /*
        var max; var i; var a; var b; var n;
        var c; var d; var e; var s;

        function math_random_int(a, b) {
            if (a > b) {                   // Обмен местами a и b, если a > b.
                var c = a; a = b; b = c;
            }
            return Math.floor(Math.random() * (b - a + 1) + a);
        }

        max = 0;

        for (i = 1; i <= 8; i++) {
            a = math_random_int(100, 999);
            window.alert(a);

            b = a % 10;
            c = Math.floor(a / 10);
            d = c % 10;
            e = Math.floor(c / 10);

            s = (e + d) + b;

        if (s > max) {
            max = s;
            n = i;
           }
        }

        window.alert(String('max сумма цифр у №') + String(n));
        */
