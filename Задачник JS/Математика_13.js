
        /* Составьте программу, которая принимает с клавиатуры положительное
        трехзначное число, а затем вычисляет и выводит на экран его
        "степень четности", т. е. количество четных цифр в нем.
        Проверка => ввод: 274 => вывод: 2. */

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

            let count = 0;

            for (i = 0; i < number.length; i++) {
                if (number[i] % 2 === 0) {
                    count++;
                }
            }
