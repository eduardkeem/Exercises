
        /*
        Составьте программу, которая принимает с клавиатуры количество очков, полученых в соревнованиях 
		по стрельбе каждым из 10 учеников класса, и выводит на экран лучший результат.
        Проверка⇑  ввод: 92, 75, 83, 82, 96, 81, 88, 76, 93, 78 ⇒ вывод: лучший результат - 96 очков.
        */

        let point = [];

        for (let i = 0; i < 10; i++) {

            point[i] = parseFloat(prompt('Введите количество очков ученика: '));

        }

        console.log(point);

        let arrayPoint = Math.max(...point);

        console.log(arrayPoint);

        /*
        var max;
        var i;
        var a;
        max = 0;

        for (i = 1; i <= 10; i++) {
            
            a = parseFloat(window.prompt('Введите кол-во очков'));

        if (a > max) {
            max = a;
        }
    }
        window.alert(String('лучший результат - ') + String(max));
        */
