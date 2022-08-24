
        /*
        Составьте программу, которая генерирует и выводит на экран серию из 10 случайных целых чисел из диапазона -50...+50,
		а затем определяет наибольшее из положительных значений и наименьшее из отрицательных значений.
        Проверка⇑ вывод, например: 36, -25, 12, -19, 37, 49, 23, -8, -47, 32; max = 49; min = -47)
        */


        // let getNumbers;

        const min = -50
        const max = 50

        let maxValue = 0;
        let minValue = 0;


        for (let i = 0; i < 10; i++) {
            let getNumbers = Math.round(Math.random() * (max - min) + min);
            console.log(getNumbers);

            if (getNumbers > maxValue) {
                maxValue = getNumbers;
            }
            if (getNumbers < minValue) {
                minValue = getNumbers;
            }
        }

        console.log(maxValue);
        console.log(minValue);


        /*
        var max; var min; var i; var a;

        function math_random_int(a, b) {
            if (a > b) {                     // Обмен местами a и b, если a > b.
                var c = a; a = b; b = c; }
            return Math.floor(Math.random() * (b - a + 1) + a); }

        max = 0; min = 0;

         for (i = 1; i <= 10; i++) {
            a = math_random_int(-50, 50);
            window.alert(a);
        if (a > 0) {
         if (a > max) {
        max = a;
        }
        } else {
        if (a < min) {
        min = a; } } }

        if (max == 0) {
        window.alert('max - нет');
        } else {
        window.alert(String('max = ') + String(max));
        }

        if (min == 0) {
        window.alert('min - нет');
        } else {
        window.alert(String('min = ') + String(min));
        }
        */
