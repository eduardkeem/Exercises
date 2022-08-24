
        /*
        Составьте программу, которая принимает с клавиатуры целое число, а затем проверяет, можно ли представить его в виде суммы квадратов двух целых однозначных чисел.
        Проверка⇑ ввод: 98 ⇒ вывод: 98 можно представить в виде суммы квадратов 7 и 7.
        */

        let a;

        do {

        a = parseFloat(prompt('Введите целое число'));

        } while (a % 1 != 0);

        console.log(`Вводимое число: ${a}`);

        console.log(`Число в квадрате: `+ Math.sqrt(a));

        console.log(`Число округленное в квадрате: `+ Math.ceil(Math.sqrt(a)));



       /*

        let count;

        let b;

        for (let i = 1; i <= Math.ceil(Math.sqrt(a)); i++) {

            b = (Math.pow(i, 2));

            console.log(b);

            count = i;

            if ((a / 2) == b) {
            console.log(a + ' можно представить в виде суммы квадратов ' + count + ' и ' + count);
            // break;
        }

        }

        */

        let count;

        let b;

        let array = [];

        for (let i = 0; i <= Math.ceil(Math.sqrt(a)); i++) {

            b = (Math.pow(i, 2));

            console.log(b);

            count = i;

            array[i] = b;

            // if ((a / 2) == b) {
            // console.log(a + ' можно представить в виде суммы квадратов ' + count + ' и ' + count);
            // break;
        // }

        }

        console.log(array);



        for (let j = 0; j <= Math.ceil(Math.sqrt(a)); j++) {


        for (let k = 0; k <= Math.ceil(Math.sqrt(a)); k++) {

            if (array[j] + array[k] == a) {
                console.log('Что-то в этом есть');
            } else {
                console.log('Ничего нет');
            }

        }


    }
