
        /*
        Составьте программу, которая принимает с клавиатуры целое число и 
        выводит на экран 7 последующих за ним нечетных чисел.
        Проверка⇑ ввод: 15 ⇒ вывод: 17, 19, 21, 23, 25, 27, 29
        */

        let intNumber = Number(prompt("Введите целое число: "));

        let newNumber;

        if (intNumber % 2 !== 0) {
                newNumber = intNumber;
            } else {
                newNumber = intNumber - 1;
            }


        for (i = 2; i <= 14; i = i + 2) {
            console.log(newNumber + i);
        }

    /*
        var a;
        var i;
        a = parseFloat(window.prompt('Введите число'));
        if (a % 2 == 0) {
        a = a - 1;
        }
        for (i = 1; i <= 7; i++) {
        a = a + 2;
        window.alert(a);
        }
    */
