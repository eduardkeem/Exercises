
        /* Составьте программу, которая принимает с клавиатуры целове число и, 
        если оно положительное, увеличивает его вдвое.
        Программа должная выводить на экран новое значение.
        Проверка => ввод: 8 => вывод: 16. */ 

        function getNumber(value) {
            if (value > 0) {
                let sum = (value + value);
                console.log(sum);
            } else {
                console.log("Введите положительное число");
            }
        }

        getNumber(8);
