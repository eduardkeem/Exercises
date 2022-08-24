
        /*
        У массивов есть метод reverse, который изменяет порядок следования 
        элементов в массиве. Для выполнения этого упражнения напишите две 
        функции: reverseArray и reverseArrayinPlace. Первая функция, reverseArray, 
        принимает массив в качестве аргумента и создает новый массив, содержащий 
        те же элементы в обратном порядке. Вторая, reverseArrayinPlace, делает 
        то же, что и метод reverse: преобразовывает массив, заданный в качестве 
        аргумента, меняя порядок следования его элементов на обратный. Не 
        ис­пользуйте для этого стандартный метод reverse. 
        Вспомните, что мы говорили о побочных эффектах и чистых функциях 
        в предыдущей главе, и ответьте на вопрос: какой из этих вариантов, по 
        ва­шему мнению, будет полезен в большинстве случаев? Какой из них быстрее 
        работает? 
        */

        let arr = [1, 2, 5, 7, 9];
        

        function reverseArray(value) {
            return arr.slice().reverse();
        }

        // console.log(reverseArray(arr));

        // console.log(arr);


        function reverseArrayInPlace(value) {

            let sortedArray = [];

                for (let i = value.length - 1; i >= 0; i--) {
                    sortedArray.push(value[i]);
                }
            return sortedArray.slice();
        }

        console.log(reverseArrayInPlace(arr));

        console.log(arr);
