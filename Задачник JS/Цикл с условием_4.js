
        /*
        Составьте программу, которая принимает с клавиатуры числа, пока их сумма остается меньше 100.
		По окончании ввода следует вывести на экран информацию о количестве введенных чисел и их сумме.
        Проверка⇑ ввод: 18, 5, 47, 2, 12, 25 ⇒ вывод: кол-во чисел - 6; сумма = 109.
        */

        let getNumbers;
        let sum = 0;
        let count = 0;

            while(sum < 100) {
                getNumbers = parseFloat(prompt('Введите число: '));
                count++;
                sum += getNumbers;
            }

            console.log('Кол-во чисел - ' + count);
            console.log('Сумма = ' + sum);

        /*
            var k;
            var s;
            var a;
            k = 0;
            s = 0;

            while (s < 100) {
                a = parseFloat(window.prompt('Введите число'));

                k = k + 1;
                s = s + a;
            }
            window.alert(String('кол-во чисел - ') + String(k));
            window.alert(String('сумма = ') + String(s));
        */

