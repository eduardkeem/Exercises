
        /* Составьте программу, которая выводит на экран 10 случайных чисел из диапазона -25...+25.
        После каждого отрицательного числа следует вывести (вплотную к числу) символ "?".
        Проверка => вывод, например: 2, -8?, 17, 24, 9, -17?, 14, -3?, 7, 18). */




                    for (let i = 0; i < 10; i++) {

                        const min = -25;
                        const max = 25;

                        const  getNumber = Math.round(Math.random() * (max - min) + min)

                        if (getNumber < 10) {
                        console.log(getNumber + "?");
                        } else {
                            console.log(getNumber);
                        }
                }
