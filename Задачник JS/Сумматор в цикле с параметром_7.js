
        /*
        Составьте программу, которая принимает с клавиатуры целое положительное число и проверяет, является ли оно «дважды делимым», т.е. оно само, и сумма его делителей – делятся без остатка на количество делителей числа.
        Проверка⇑ ввод: 32 ⇒ вывод: число не "дважды делимое".
        */

        let number = parseFloat(prompt('Введите целове положительное число: '));

        if (number % 2 === 0) {

            let arrayNumber = [...number.toString()].join('');

            let count = 0;

            for (let i = 0; i < arrayNumber.length - 1; i++) {
            count += arrayNumber[i];
            }

            if (count % 2 === 0) {
                 console.log('Число дважды делимое)');
            } else {
                console.log('Число НЕ дважды делимое!')
            }
        } else {
                console.log('Число НЕ дважды делимое!')
        }

        /*
        var s;
        var k;
        var a;
        var i;
        s = 0;
        k = 0;

        a = parseFloat(window.prompt('Введите число'));

        var i_inc = 1;

        if (1 > a) {
            i_inc = -i_inc;
        }

        for (i = 1; i_inc >= 0 ? i <= a : i >= a; i += i_inc) {
            if (a % i == 0) {
                s = s + i;
                k = k + 1;
            }
        }

        if (a % k == 0 && s % k == 0) {
            window.alert('число "дважды делимое"');
        } else {
            window.alert('число не "дважды делимое"');
        }
        */
