
        /* Составьте программу, которая принимает с клавиатуры трехзначное
        положительное число и строит из него новое число методом "перестановки",
        т. е. обмена местами первой и последней цифры.
        Проверка => ввод: 469 => вывод: 964. */


        const number = prompt("Введите трехзначное положительное число:");

        let arrayNumber;

        if (number < 100 || number > 1000) {
                alert("Вы ввели не трехзначное число");
            } else {
                arrayNumber = [...number.toString()].reverse().join("");
            }

            console.log(number);

            console.log(arrayNumber);

            // first = Number(number[0]);
            // second = Number(number[1]);
            // third = Number(number[2]);

            // console.log(first, second, third);
