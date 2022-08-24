
        /*
        Составьте программу, которая выводит на экран делители каждого числа от 1 до 9.
        Проверка⇑ вывод: делители каждого числа от 1 до 9.
        */

        // let getNumber = parseFloat(prompt('Введите число: '));
        // let divider;

        // for (let i = 1; i <= 9; i++) {

        //     if (getNumber % i == 0) {
        //         divider = i;
        //         alert('Делитель: ' + divider);
        //     }

        // }


        var i;
        var j;

        for (i = 1; i <= 9; i++) {
                console.log(['все делители числа ',i,' - '].join(''));
        var j_inc = 1;

        if (1 > i) {
            j_inc = -j_inc;
        }

        for (j = 1; j_inc >= 0 ? j <= i : j >= i; j += j_inc) {

            if (i % j == 0) {

        console.log(j);
        }
        }
        }
