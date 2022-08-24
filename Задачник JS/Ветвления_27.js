
        /* Составьте программу, которая принимает с клавиатуры два различных числа. 
        Программа должна вывести на экран эти числа в порядке возрастания - в одной строке, а в другой -
        их же, но в порядке убывания.
        Проверка => ввод: 7, 2 => вывод в 1 строке: 2, 7 => вывод во 2 строке: 7, 2. */ 

        const value1 = Number(prompt("Введите первое число"));
        const value2 = Number(prompt("Введите второе число"));

        if (value1 < value2) {           // Возрастание
            console.log(value1, value2);
        } else {
            console.log(value2, value1)
        }

        if (value1 > value2) {         // Убывание
            console.log(value1, value2);
        } else {
            console.log(value2, value1)
        }
