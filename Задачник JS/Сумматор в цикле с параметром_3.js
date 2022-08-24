
    /*
    Составьте программу, которая принимает с клавиатуры положительное целое число x и подсчитывает его «базу», т.е. сумму всех положительных целых чисел, меньших x.
    Проверка⇑ ввод: 7 ⇒ вывод: база числа = 21.
    */

    let getNumber = parseFloat(prompt('Введите положительное целое число: '));

        let count = 0;

        let i;

        for (i = getNumber - 1; i >= 1; i--) {
            count += i;
        }

        console.log(count);


        /*
        var s;
        var x;
        var i;
        s = 0;

        x = parseFloat(window.prompt('Введите число'));

        var i_end = x - 1;
        var i_inc = 1;

            if (1 > i_end) {
                 i_inc = -i_inc;
            }

        for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
            s = s + i;
        }
            window.alert(String('база числа = ') + String(s));
        */
