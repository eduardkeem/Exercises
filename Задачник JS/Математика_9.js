
        /* Составьте программу, которая принимает с клавиатуры целое положительное
        двузначное число и выводит на экран его цифры, разделенные запятой -
        но в обратно порядке.
        Проверка => ввод: 36 => вывод: 6, 3. */

        let number = prompt("Введите целое положительное двузначное число:");

            if ((number < 10) || (number > 100)) {
                alert("Вы ввели неверное число!");
            } else {
                alert([...number.toString()].map(Number).reverse().join(", "));
            }
