
        /* Составьте программу, которая принимает с клавиатуры два значения:
        первое - числитель дроби, второе - ее знаменатель (можно исходить из
        предположения, что второе значение отлично от нуля). Программа должна
        определить, является ли эта дробь положительной или отрицательной, и
        вывести на экран соответствующее текстовое сообщение.
        Проверка => ввод: 3, 5 => вывод: дробь положительная; ввод: -4, 7 =>
        вывод: дробь отрицательная. */

        let firstNumber = Number(prompt("Введите числитель:"));
        let secondNumber = Number(prompt("Введите знаменатель"));

        if ((firstNumber == 0) && (secondNumber == 0)) {
            alert("Дробь не определена")
        } else if (secondNumber == 0) {
            alert("Дробь равна 1");
        } else if ((firstNumber > 0) && (secondNumber > 0)) {
            alert("Дробь положительная");
        } else if ((firstNumber < 0) || (secondNumber < 0)) {
            alert("Дробь отрицательная")
        } else {
            alert("Дробь отрицательная")
        }
