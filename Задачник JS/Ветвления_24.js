
        /* Составьте программу, которая принимает с клавиатуры два числа, 
        первое из которых - количество учеников в классе, а второе - 
        количество парт в кабинете. программа должная проверить, все ли ученикам будет, где сесть.
        Предполагается, что за партой могут сидеть два ученика.
        Проверка => ввод: 24, 12 => вывод: парт хватает; ввод: 24, 10 => вывод: парт не хватает. */ 

        const pupil = Number(prompt("Введите количество учеников:"));
        const desk = Number(prompt("Введите количество парт:"));

        const half = (pupil / 2);

        if (half == desk) {
            alert("Парт хватает");
        } else {
            alert("Парт не хватает");
        }
