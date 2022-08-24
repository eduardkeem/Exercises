
        /*
        Составьте программу, которая принимает с клавиатуры числа, пока не будет введено значение 999.
        Программа должна подсчитать, сколько чисел было введено с клавиатуры, чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию на экран.
        Проверка⇑ ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290)
        */

        let getNumbers;
        let count = -1;
        let sum = 0;



        while(getNumbers != 999) {
            getNumbers = parseFloat(prompt('Введите число'));
            console.log(getNumbers);
            count++;
            sum += getNumbers;

        }

        let sumMinus = sum - 999;

        console.log('Кол-во чисел ' + count);
        console.log(sumMinus);


        /*
        var k;
        var s;
        var a;
        k = 0;
        s = 0;

            a = parseFloat(window.prompt('Введите число'));

            while (a != 999) {
                k = k + 1;
                s = s + a;

            a = parseFloat(window.prompt('Введите число'));
        }

        window.alert(String('кол-во чисел - ') + String(k));
        window.alert(String('сумма = ') + String(s));
        */
