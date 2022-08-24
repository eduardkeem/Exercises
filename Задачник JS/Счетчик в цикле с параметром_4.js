
        /*
        Составьте программу, которая принимает с клавиатуры 7 целых чисел и выводит на экран, сколько из них были больше, чем предыдущее число.
        Проверка⇑ ввод: 27, 45, 16, 8, 35, 42, 10 ⇒ вывод: 3 числа больше предыдущего.
        */

        let count = 0;
        let arr = [];

        for (let i = 0; i < 7; i++) {
            arr[i] = parseFloat(prompt("Введите целое число: "));

            if (arr[i] > arr[i - 1]) {
                count++;
            }

            }

        console.log(arr);

        console.log(count + " числа больше предыдущего");


        // arr[0] = 27
        // arr[1] = 45
        // arr[2] = 16
        // arr[3] = 8
        // arr[4] = 35
        // arr[5] = 42
        // arr[6] = 10

        /*

        let a;
        let b;
        let k = 0;
        a = parseFloat(window.prompt('Введите число'));         // 27
        for (let i = 1; i <= 6; i++) {
        b = a;
        a = parseFloat(window.prompt('Введите число'));         // 45
        if (a > b) {
        k = k + 1;
        }
        }
        window.alert(String(k) + String(' числа больше предыдущего'));

        */
