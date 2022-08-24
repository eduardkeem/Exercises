
        /*
        Составьте программу, которая находит число от 1 до 999 с максимальной суммой делителей.
        Проверка⇑ вывод: max сумма делителей у числа 960.
        */

        let max = 0;
        let number;

        for (let i = 1; i <= 999; i++) {

            let d;
            let sum = 0;

            for (let k = 1; k <= 999; k++) {
                if (i % k == 0) {
                    d = k;
                    sum += d;
                }
            }

            console.log(`Сумма делителей числа ${i} = ${sum}`);

            if (sum > max) {
                max = sum;
                number = i;

            }

        }

        console.log(`Максимальная сумма делителей: ${max}`);
        console.log(`Максимальная сумма делителей у числа: ${number}`);


    /*

        var i;
        var s;
        var j;
        var n;
        var max = 0;

        for (i = 1; i <= 999; i++) {
            s = 0;
            var j_inc = 1;

        if (1 > i) {
            j_inc = -j_inc;
        }

        for (j = 1; j_inc >= 0 ? j <= i : j >= i; j += j_inc) {

            if (i % j == 0) {
                s = s + j;
            }
        }

            if (s > max) {
                max = s;
                n = i;
            }
        }
        window.alert(String('max сумма делителей у числа ') + String(n));

    */

