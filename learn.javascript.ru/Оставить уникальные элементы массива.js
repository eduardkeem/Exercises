
/*
        Пусть arr – массив строк.

        Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

 */
        function unique(arr) {

            let count = [];                 // count произвольное название массива

            for (let str of arr) {
                if (!count.includes(str)) {
                count.push(str);
                }
            }

            return count;

        }


        let strings = ["кришна", "кришна", "харе", "харе",
        "харе", "харе", "кришна", "кришна", ":-O"];

        console.log( unique(strings) ); // кришна, харе, :-O

