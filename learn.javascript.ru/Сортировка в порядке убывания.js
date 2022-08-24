
/*      Первый вариант

        let array = [5, 2, 1, -10, 8];

        function compareNumber(a, b) {
            if (a > b) return - 1;
            if (a == b) return 0;
            if (a < b) return 1;
        }

        array.sort(compareNumber);

        console.log(array);

*/

/*
        Второй вариант

        let array = [5, 2, 1, -10, 8];

        array.sort(function(a, b) { return b - a; });
        console.log(array);
*/


        // Третий вариант

        let array = [5, 2, 1, -10, 8];

        array.sort( (a, b) => b - a );
        console.log(array);
