
        /* Составьте программу, которая генерирует и выводит на экран два
        случайных положительных двузначных числа, обозначающих границы некоторого интервала, а затем генерирует три целых положительных числа внутри данного интервала.
        Проверка => вывод в 1 строке, например: 24, 58;
        вывод во 2 строке: 49, 34, 42. */


            let first;

            function firstNumberOfRange(min = 10, max = 100) {
                first = (Math.floor(Math.random() * (max - min) + min));
                return first;
            }

            firstNumberOfRange();

            let second;

            function secondNumberOfRange(min = 10, max = 100) {
                second = (Math.floor(Math.random() * (max - min) + min));

                if (second > first) {
                    return second;
                } else {
                    secondNumberOfRange(min = 10, max = 100);
                }

            }

            secondNumberOfRange();

            console.log(first, second);

            let firstNumber;

            function getFirstNumber(minimum, maximum) {
                firstNumber = (Math.floor(Math.random() * (maximum - minimum) + minimum));
                return firstNumber;
            }

            getFirstNumber(first, second);

            let secondNumber;

            function getSecondNumber(minimum, maximum) {
                secondNumber = (Math.floor(Math.random() * (maximum - minimum) + minimum));
                return secondNumber;
            }

            getSecondNumber(first, second);

            let thirdNumber;

            function getThirdNumber(minimum, maximum) {
                thirdNumber = (Math.floor(Math.random() * (maximum - minimum) + minimum));
                return thirdNumber;
            }

            getThirdNumber(first, second);


            console.log(firstNumber, secondNumber, thirdNumber);