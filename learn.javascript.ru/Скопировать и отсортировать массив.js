
        /*
        У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

        Создайте функцию copySorted(arr), которая будет возвращать такую копию.

        let arr = ["HTML", "JavaScript", "CSS"];

        let sorted = copySorted(arr);

        alert( sorted ); // CSS, HTML, JavaScript
        alert( arr ); // HTML, JavaScript, CSS (без изменений)
        */

        function copySorted(value) {
            return value.slice().sort();
        }

        let array = ["HTML", "JavaScript", "CSS"];
        let sorted = copySorted(array);

        console.log(array);
        console.log(sorted);
