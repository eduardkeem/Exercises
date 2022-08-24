
        /*
        Составьте программу, которая вводит с клавиатуры целые положительные двузначные числа до тех пор,
		пока не будет введено число, сумма цифр которого равна 7 (в этом случае выводится сообщение - "завершено").
        Проверка⇑ ввод: 32, 54, 26, 83, 52) ⇒ вывод: завершено
        */

        let min = 10;
        let max = 99;
        let randomNumber;
        let array;
        let sum;


        while(sum != 7) {

            randomNumber = Math.round(Math.random() * (max - min) + min);
            console.log(randomNumber);

            array = [...randomNumber.toString()].map(Number);
            console.log(array);

            sum = array[0] + array[1];

        }

        console.log('Завершено! Сумма слагаемых равна = ' + sum);

/*

        var a;
        var b;
        var c;
        var s = 0;

        while (s != 7) {

            a = parseFloat(window.prompt('Введите двузначное число'));      // 32

            if (a >= 10 && a <= 99) {

                b = a % 10;                         b = (32 % 10) = 2
                c = Math.floor(a / 10);             c = Math.floor(32 / 10) = 3.2 = 3
                s = b + c;                          s = (2 + 3) = 5

        } else {

        window.alert('это не двузначное число');

        }
    }
        window.alert('завершено');

*/
