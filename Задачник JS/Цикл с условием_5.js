
        /*
        Составьте программу, которая принимает с клавиатуры целое число, а затем выводит на экран последующие
		ему целые числа, пока сумма этих чисел не превышает квадрата введённого числа.
        Проверка⇑ ввод: 5 ⇒ вывод: 6, 7, 8, 9.
        */

        let getNumbers = parseFloat(prompt('Введите целое число: '));
        let square = getNumbers * getNumbers;
        let sum = 0;

        while(sum <= square) {
            getNumbers++;
            console.log(getNumbers);
            sum += getNumbers;
        }

        console.log('Сумма чисел = ' + sum);

     /*
        var s = 0;
        var a;
        var b;

        a = parseFloat(window.prompt('Введите число'));

        b = a;

        while (s <= Math.pow(a, 2)) {
            b = b + 1;
            window.alert(b);
            s = s + b;
        }
    */
