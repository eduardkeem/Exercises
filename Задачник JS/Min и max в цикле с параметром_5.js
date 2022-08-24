
        /*
        Составьте программу, которая генерирует и выводит на экран 10 целых двузначных положительных чисел, а затем выводит на экран число, сумма цифр которого была минимальной.
        Проверка⇑ вывод, например: 26, 85, 12, 79, 37, 69, 23, 98, 49, 32; min сумма цифр у 12.
        */

       
        let getNumbers = [];
        let arrayNumbers;
        let sumArray;
        let arraySumArray = [];

        let min = 10;
        let max = 99;
        let minValue = 100;
        let count = 0;

        

        for (let i = 0; i < 10; i++) {

            getNumbers[i] = Math.round(Math.random() * (max - min) + min);

        }
        
        for (let j = 0; j < 10; j++) {

            arrayNumbers = [...getNumbers[j].toString()].map(Number);
            console.log(arrayNumbers);

            sumArray = arrayNumbers[0] + arrayNumbers[1];
            console.log(sumArray);

            if (sumArray < minValue) {
               minValue = sumArray;
            }

            arraySumArray[j] = sumArray;

        }

        console.log(arraySumArray);

        for (let k = 0; k < 10; k++) {

            if (arraySumArray[k] !== minValue) {
                count++;
            }

            if (arraySumArray[k] == minValue) {
                break;
            }
            
        }

        console.log('Сумма слагаемых = ' + minValue);

        console.log('min сумма цифр у числа ' + getNumbers[count]);


        /*
        var min; var i; var a; var b; var d; var c; var s;
        
            function math_random_int(a, b) {
                if (a > b) {                                        // Обмен местами a и b, если a > b.
                    var c = a; a = b; b = c;
            }
                return Math.floor(Math.random() * (b - a + 1) + a);
            }

            min = 19;

            for (i = 1; i <= 10; i++) {
                a = math_random_int(10, 99);
                window.alert(a);

                b = Math.floor(a / 10);
                c = a % 10;
                s = b + c;

            if (s < min) {
                min = s;
                d = a;
            }
        }
            window.alert(String('min сумма цифр у ') + String(d));
        */
