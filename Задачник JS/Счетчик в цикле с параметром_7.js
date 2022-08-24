
        /*
        Составьте программу, которая принимает с клавиатуры число учеников в классе, 
        а затем – оценку каждого ученика. Программа должна определить, была ли контрольная «провальной». 
        Контрольная работа считается «провальной», если более половины учеников получили неудовлетворительные оценки.
        Проверка⇑ ввод: 12; 5, 4, 2, 4, 5, 3, 2, 4, 3, 5, 4, 3 ⇒ вывод: контрольная не была провальной.
        */

        let getCountPupils = parseFloat(prompt("Введите число учеников в классе: "));

        let getMarkPupils = [];

        let countPositive = 0;
        let countNegative = 0;

                for (let i = 0; i < getCountPupils; i++) {
                    getMarkPupils [i] = parseFloat(prompt("Введите оценку ученика"));

                        if (getMarkPupils [i] > 3) {
                            countPositive++;
                        }
                        if (getMarkPupils [i] <= 3) {
                            countNegative++;
                        }
                }

                    console.log(countPositive);
                    console.log(countNegative);

                    if (countPositive > countNegative) {
                        console.log("Контрольная была успешной!")
                    } 
                    if (countPositive < countNegative) {
                        console.log("Контрольная была провальной!")
                    } 
                    

                    /*
                    var k;
                    var a;
                    var i;
                    var b;
                    k = 0;

                    a = parseFloat(window.prompt('Введите число учеников'));            // 12

                    var i_inc = 1;

                        if (1 > a) {                                            // a = 0
                            i_inc = -i_inc;
                         }

                        for (i = 1; i_inc >= 0 ? i <= a : i >= a; i += i_inc) {
                            b = parseFloat(window.prompt('Введите оценку'));
                                if (b == 1 || b == 2) {
                                    k = k + 1;
                                }
                        }

                         if (a / k >= 2) {
                            window.alert('контрольная не была провальной');
                        } else {
                            window.alert('контрольная была провальной');
                        }
                    */
