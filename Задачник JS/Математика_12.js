
        /* Составьте программу, которая принимает с клавиатуры двузначное число
        и выводит на экран разницу между наибольшей и наименьшей цифрами числа.
        Проверка => ввод: 82 => вывод: 6. */

            const num = prompt("Введите положительное двузначное число:");

                let mainNumber;

                if (num < 10 || num > 100) {
                    alert("Вы ввели неправильное число!")
                } else {
                    mainNumber = [...num.toString()].join("");
                }

                console.log(mainNumber);

                let firstNumber = Number(num[0]);
                let secondNumber = Number(num[1]);


                if (firstNumber > secondNumber) {
                    console.log(firstNumber - secondNumber);
                } else {
                    console.log(secondNumber - firstNumber);
                }
