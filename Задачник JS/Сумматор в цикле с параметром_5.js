
        /*
        Составьте программу, которая принимает с клавиатуры положительное целое число и выводит на экран сумму всех его делителей, включая единицу и само это число.
        Проверка⇑ ввод: 24 ⇒ вывод: сумма делителей = 60.
        */

        let getNumber = parseFloat(prompt('Введите положительное целое число: '));

        let count = 0;

        for (i = 1; i <= getNumber; i++) {
            if (getNumber % i == 0) {
                count += i;
            }
        }

        console.log(count);

        /*
        var s;
        var a;
        var i;
        s = 0;

        a = parseFloat(window.prompt('Введите число'));
        var i_inc = 1;

        if (1 > a) {
            i_inc = -i_inc;
        }

        for (i = 1;
            i_inc >= 0 ? i <= a : i >= a; i += i_inc) {
                if (a % i == 0) {
                s = s + i;
            }
        }
        window.alert(String('сумма делителей = ') + String(s));
        */
