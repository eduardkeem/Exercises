
        /*
        Во введении к этой книге упоминался следующий хороший способ вычис­лить сумму диапазона чисел: 
        console.log(sum(range(l, 10))); 
        Напишите функцию range, которая принимает два аргумента, start и end, 
        и возвращает массив, содержащий все числа от start до end включительно. 
        Затем напишите функцию sum, которая принимает массив чисел и возвра­
        щает их сумму. Запустите пример программы и посмотрите, действительно 
        ли она возвращает 55. 

        В качестве дополнительного задания: измените функцию range так, чтобы 
        она принимала необязательный третий аргумент, который указывал бы 
        значение шага, используемое при построении массива. Если шаг не задан, 
        элементы увеличиваются на единицу, что соответствует старому поведению. 
        Вызов функции range(l, 10, 2) должен возвращать [1, з, 5, 7, 9). Убедитесь, 
        что функция также работает и с отрицательными значениями шага, так что 
        результатом range(5, 2, -1) является [5, 4, з, 2).                          
        */

        function range(start, end, step = 1) {        // Если шага нет, можно присвоить step = 1, тогда по умолчнию будет 1.     

            // if (step == null) {
            //     step = 1;
            // }

            if (start > end || step < 0) {            // Возможно условия счетчика переписать с помощью тернарки
                
                let array = [];                             

            for (let j = start; j >= end; j += step) {      // for (let j = start; step < 0 ? i >= end : i <= end; i += step)
                array.push(j);
            }
            return array;
            }

            let array = [];

            for (let i = start; i <= end; i = i + step) {
                array.push(i);
            }
            return array;
        }

        let firstFunction = range(1, 10, 2);

        // let firstFunction = range(5, 2, -1);

        console.log(firstFunction);



        function sum(value) {

            // let sumArray = 0;

            // for (k = 0; k < value.length; k++) {
            //     sumArray += value[k];
            // }
            // return `Сумма массива: ${sumArray}`;

            return value.reduce((acc, number) => {              // acc и number произвольные имена
                return acc + number
            }, 0)                                               // первый аргумент 0 (начало отсчета)

        }
        console.log(sum(firstFunction));
