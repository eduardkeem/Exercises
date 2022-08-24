
        /*
        Составьте программу, которая принимает с клавиатуры количество очков, полученных в соревнованиях 
		по стрельбе каждым из 10 учеников класса, и выводит на экран лучший результат, 
        а также порядковый номер победителя (можно предположить, что есть только один победитель).
        Проверка⇑ ввод: 92, 75, 83, 82, 96, 81, 88, 76, 93, 78 ⇒ вывод: лучший результат - 96 очков, победитель - №5.
        */

        let point = [];

        for (let i = 0; i < 3; i++) {

            point[i] = parseFloat(prompt('Введите количество очков ученика: '));

        }

            console.log(point);

        let max = Math.max(...point);

            console.log('Лучший результат - ' + max);


            let count = 1;

            for (let j = 0; j < point.length - 1; j++) {

                if (max === point[j]) {
                    break;
                }
                
                if (max > point[j]) {
                    count++;
                }
              

            }

            console.log('Победитель - №' + count);

            /*
            var i;
            var a;
            var k;
            var max = 0;

            for (i = 1; i <= 10; i++) {

                a = parseFloat(window.prompt('Введите кол-во очков'));

                if (a > max) {
                    max = a;
                    k = i;
                }
            }

            window.alert(String('лучший результат - ') + String(max));
            window.alert(String('победитель - №') + String(k));
            */
