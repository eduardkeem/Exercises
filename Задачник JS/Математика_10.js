
        /* Составьте программу, которая принимает с клавиатуры целое двузначное
        положительное число. Затем следует построить новое значение, составленное
        из цифр числа введенного с клавиатуры, но в обратном порядке. После этого
        новое значение следует увеличить на 4 и окончательный результат вывести на
        экран.
        Проверка => ввод: 54 => вывод: 49. */

        const number = prompt("Введите целое двузначное положительное число:");

            let numberReverse;


            if ((number < 10) || (number > 100)) {
                alert("Вы ввели неверное число!");
            } else {
               numberReverse = [...number.toString()].reverse().join("");
            }

            let stringNumber = Number(numberReverse);

            alert(stringNumber + 4);
