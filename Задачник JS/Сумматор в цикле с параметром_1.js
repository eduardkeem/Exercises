
        /*
        Составьте программу, которая генерирует и выводит на экран серию из 10 случайных 
        двузначных положительных чисел, а затем и их сумму.
        Проверка⇑ вывод, например: 29, 15, 43, 22, 34, 51, 38, 46, 32, 58; сумма = 368.
        */

        let getNumbers = [];

        let min = 10;
        let max = 100;

        let sumNumbers = 0;


        for (let i = 0; i < 10; i++) {
            getNumbers[i] = Math.round(Math.random() * (max - min) + min);
            sumNumbers += getNumbers[i];        // sumNumbers = sumNumbers + getNumbers[0]   0 + 29, 29 + 15 ...
        }

        console.log(getNumbers);
        console.log(sumNumbers);

        /*
        var s;
        var i;
        var a;

        function math_random_int(a, b) {
            if (a > b) {                     // Обмен местами a и b, если a > b.
                
                var c = a;
                    a = b;
                    b = c;
        }
            return Math.floor(Math.random() * (b - a + 1) + a);
        }

        s = 0;

            for (i = 1; i <= 10; i++) {
                a = math_random_int(10, 99);
                window.alert(a);
                s = s + a;
        }
            window.alert(String('сумма = ') + String(s));
        */
