
        /*
        Составьте программу, которая выводит на экран сумму делителей каждого числа от 1 до 9.
        Проверка⇑ вывод: сумма делителей каждого числа от 1 до 9.
        */

        let i;
        let j;

        for (i = 1; i <= 9; i++) {

            console.log('Все делители числа '+ i + ' - ');

            for (j = 1; j <= 9; j++) {

                if (i % j == 0) {
                   console.log(j);

                }
            }
        }

        /*
        var i;
        var s;
        var j;

        for (i = 1; i <= 9; i++) {

            s = 0;

            var number = 1;

            if (1 > i) {
                number = -number;
            }

        for (j = 1; number >= 0 ? j <= i : j >= i; j += number) {
            if (i % j == 0) {
                s = s + j;
            }
        }
        window.alert(['сумма делителей числа ',i,' = ',s].join(''));
        }
        */
