
        /*
        Составьте программу, которая принимает с клавиатуры оценки 12 учеников класса и выводит на экран среднюю арифметическую оценку учеников,
		получивших удовлетворительные оценки (3, 4 или 5).
        Проверка⇑ ввод: 5, 4, (2), 4, 5, 3, (2), 4, 3, 5, 4, 3 ⇒ вывод: средняя оценка = 4.
        */

        let getNumber = [];

        let count1 = 0;
        let count2 = 0;

        for (i = 0; i < 12; i++) {
            getNumber[i] = parseFloat(prompt('Введите оценку ученика: '));

            if (getNumber[i] >= 3) {
                count1 += getNumber[i];
                count2++;
            }
        }

        console.log(getNumber);
        console.log('Средняя оценка: ' + (count1 / count2));

        /*
        var s;
        var k;
        var i;
        var a;
        var n;
        s = 0;
        k = 0;

        for (i = 1; i <= 12; i++) {
            a = parseFloat(window.prompt('Введите оценку'));

                if ((a == 3 || a == 4) || a == 5) {
            s = s + a;
            k = k + 1;
            }
        }

        n = s / k;
        window.alert(String('средняя оценка = ') + String(n));
        */
