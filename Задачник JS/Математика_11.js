
        /* Составьте программу, которая принимает с клавиатуры положительное трехзначное число и
        выводит на экран его "вес", т. е. сумму цифр.
        Проверка => ввод: 927 => вывод: 18. */

            const number = prompt("Введите положительное трехзначное число:");

                let result;

                if (number < 100 || number > 1000) {
                    alert("Вы ввели не правильное число, введите положительное трехзначное число!");
                } else {
                    result = [...number.toString()].join("");
                }

                console.log(result);

                const first = Number(number[0]);
                const second = Number(number[1])
                const third = Number(number[2]);

                console.log(first + second + third);
