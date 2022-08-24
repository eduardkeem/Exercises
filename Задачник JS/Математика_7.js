
        /* Составьте программу, которая генерирует и выводит на экран последовательность
        из 5 случайных целых чисел из диапазона от -10 до 10. Программа должна определить, 
        сколько раз в этой последовательности меняется знак.
        Проверка => вывод в 1 строке, например: 4, -2, 7, 9, -8; 
        вывод во 2 строке: знак меняется 3 раза. */ 

        /* let firstNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
        let secondNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
        let thirdNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
        let fourthNumber = (min, max) => Math.round(Math.random() * (max - min) + min);
        let fifthNumber = (min, max) => Math.round(Math.random() * (max - min) + min); 

        console.log(firstNumber(min, max), secondNumber(min, max), thirdNumber(min, max), 
        fourthNumber(min, max), fifthNumber(min, max)); */

        const min = -10;
        const max = 10;

        function firstNumber(min, max) {
            let result = Math.round(Math.random() * (max - min) + min);
            return result;
        }
        let first = firstNumber(min, max);


        function secondNumber(min, max) {
            let result = Math.round(Math.random() * (max - min) + min);
            return result;
        }
        let second = secondNumber(min, max);


        function thirdNumber(min, max) {
            let result = Math.round(Math.random() * (max - min) + min);
            return result;
        }
        let third = thirdNumber(min, max);


        function fourthNumber(min, max) {
            let result = Math.round(Math.random() * (max - min) + min);
            return result;
        }
        let fourth = fourthNumber(min, max);


        function fifthNumber(min, max) {
            let result = Math.round(Math.random() * (max - min) + min);
            return result;
        }
        let fifth = fifthNumber(min, max);

        const array = [first, second, third, fourth, fifth];
        console.log(array);

            let result = 0;

        for (i = 0; i < array.length; i++) {
            if (((array[i] < 0) && (array[i + 1] > 0)) || ((array[i] > 0) && (array[i + 1] < 0))) {
                result++;
            }
        }

        console.log("Знак меняется : " + result + " раз/раза");
