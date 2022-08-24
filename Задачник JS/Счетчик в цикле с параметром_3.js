
        /*
        Составьте программу, которая принимает с клавиатуры 8 целых чисел и выводит на экран, сколько из них были больше, чем первое число.
        Проверка⇑ ввод: 19, 42, 51, 12, 59, 51, 7, 24 ⇒ вывод: 5 чисел больше первого.
        */


        let count = 0;

        let arr = [];

        for (i = 0; i < 8; i++) {
            arr [i] = parseFloat(prompt("Введите целое число: "));

            if (arr[0] < arr[i]) {
                count++;
            }

        }

        console.log(arr);


        console.log(count + " чисел больше первого.");

        /*
        let a;
        let b;
        let k = 0;

        a = parseFloat(window.prompt('Введите число'));

        for (let i = 1; i <= 7; i++) {
            b = parseFloat(window.prompt('Введите число'));

                if (b > a) {
                k = k + 1;
            }
        }

        window.alert(String(k) + String(' чисел больше первого'));

        */
