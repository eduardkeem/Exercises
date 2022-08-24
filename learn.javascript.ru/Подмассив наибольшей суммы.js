
        /*
        На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
        Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
        Функция getMaxSubSum(arr) должна возвращать эту сумму.

        Например:

        getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
        getMaxSubSum([2, -1, 2, 3, -9]) == 6
        getMaxSubSum([-1, 2, 3, -9, 11]) == 11
        getMaxSubSum([-2, -1, 1, 2]) == 3
        getMaxSubSum([100, -9, 2, -3, 5]) == 100
        getMaxSubSum([1, 2, 3]) == 6 (берём все)

        Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

        getMaxSubSum([-1, -2, -3]) = 0
        */


        
       

        // МЕДЛЕННОЕ РЕШЕНИЕ

        function getMaxSubSum(arr) {
        let maxSum = 0; // если элементов не будет - возвращаем 0

        for (let i = 0; i < arr.length; i++) {
            let sumFixedStart = 0;
            for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
            }
        }

        return maxSum;
        }

        alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
        alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
        alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
        alert( getMaxSubSum([1, 2, 3]) ); // 6
        alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

        //  Это решение имеет оценку сложности O(n2). Другими словами, если мы увеличим размер массива в 2 раза, время выполнения алгоритма увеличится в 4 раза.
        //  Для больших массивов(1000, 10000 или больше элементов) такие алгоритмы могут приводить к серьёзным «тормозам».

    

        // БЫСТРОЕ РЕШЕНИЕ

    
        function getMaxSubSum(arr) {
        let maxSum = 0;
        let partialSum = 0;

        for (let item of arr) { // для каждого элемента массива
            partialSum += item; // добавляем значение элемента к partialSum
            maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
            if (partialSum < 0) partialSum = 0; // ноль если отрицательное
        }

        return maxSum;
        }

        alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
        alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
        alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
        alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
        alert( getMaxSubSum([1, 2, 3]) ); // 6
        alert( getMaxSubSum([-1, -2, -3]) ); // 0

        // Этот алгоритм требует ровно 1 проход по массиву и его оценка сложности O(n). 
