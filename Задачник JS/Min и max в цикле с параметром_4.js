
          /*
        Составьте программу, которая  принимает с клавиатуры серию из 8 целых положительных двузначных чисел и определяет среднее арифметическое максимума и минимума для этой серии.
        Проверка⇑ ввод: 15, 24, 42, 54, 85, 39, 62, 74 ⇒ вывод: ср. арифм. max и min = 50.
        */

        let min = 10;
        let max = 100;

        let getNumbers;


        let maxValue = 0;
        let minValue = 100;


        for (let i = 0; i < 8; i++) {
            getNumbers = Math.round(Math.random() * (max - min) + min); // 20 15 30 18
            console.log(getNumbers);

            if (getNumbers > maxValue) {
                maxValue = getNumbers;      // 20
            }

            if (getNumbers < minValue) {
                minValue = getNumbers;
            }

        }

        console.log("Максимальное значение: " + maxValue);
        console.log("Минимальное значение: " + minValue);

        let middle = (maxValue + minValue) / 2;

        console.log("Среднее арифмитическое: " + middle);

        /*
        var max; var min; var i; var a; var n;
        max = 9; min = 100;


        for (i = 1; i <= 8; i++) {
            a = parseFloat(window.prompt('Введите двузначное число'));

        if (a >= 10 && a <= 99) {
            if (a > max) {
                max = a;
            }
            if (a < min) {
                min = a;
            }
        } else {
            window.alert('это не двузначное число');
            max = 0; min = 0;
            break;
            }
        }


        n = (max + min) / 2;

        if (n == 0) {
            window.alert('ошибка');
        } else {
            window.alert(String('ср. арифм. max и min = ') + String(n));
        }
        */


    /*
        let min = 10;
        let max = 100;

        let getNumbers = [];

        for (let i = 0; i < 8; i++) {
            getNumbers[i] = Math.round(Math.random() * (max - min) + min);
        }

        console.log(getNumbers);

        let arrayMax = Math.max(...getNumbers);
        let arrayMin = Math.min(...getNumbers);

        console.log(arrayMax);
        console.log(arrayMin);

        console.log("Среднее арифметическое max и min: " + ((arrayMax + arrayMin) / 2));

    */
