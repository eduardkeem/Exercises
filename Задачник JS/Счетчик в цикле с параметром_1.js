
        /*
        Составьте программу, которая принимает с клавиатуры 7 целых чисел и 
        выводит на экран, сколько из них были положительными.
        Проверка⇑ ввод: 2, -15, 43, 22, 34, -51, 30 ⇒ вывод: положительных чисел 5.
        */ 

            let getNumber;
            let count = 0;

            for (let i = 0; i < 7; i++) {
                getNumber = parseFloat(prompt("Введите целое число: "));

                if (getNumber > 0) {
                    count++;
                }
            }
            
            console.log("Положительных чисел: " + count);

                            
                                    // let arrayNumber = [2, -15, 43, 22, 34, -51, 30];

                                    // let count = 0;

                                    // for (let i = 0; i < arrayNumber.length; i++) {
                                    //     if (arrayNumber[i] > 0) {
                                    //         count++;
                                    //     }
                                    // }

                                    // console.log("Положительных чисел: " + count);

            /*
            var k;
            var i;
            var a;
            k = 0;
            for (i = 1; i <= 7; i++) {
            a = parseFloat(window.prompt('Введите число'));
            if (a > 0) {
            k = k + 1;
            }
            }
            window.alert(String('положительных чисел ') + String(k));
            */
