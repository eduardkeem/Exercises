
    /* Составьте программу, которая выводит на экран 8 случайных чисел
    из диапазона +5...+50. Перед каждым числом, делящимся на 3 без остатка,
    следует вывести (вплотную к числу) символ "#".
    Проверка => вывод, например: #27, 44, #9, 19, 14, #33, 46, 28. */

    for (let i = 0; i < 8; i++) {
        const min = 5;
        const max = +50;

        const getNumber = Math.round(Math.random() * (max - min) + min);

        if (getNumber % 3 === 0) {
            console.log(getNumber + "#");
        } else {
            console.log(getNumber);
        }
    }
