
        function isEven(value) {

             if (value === 0) {
                 return 'Четное';
             }
            if (value % 2 === 1) {
                return 'Нечетное';
            } else {
                return isEven(value - 2);
            }


        }

        console.log(isEven(10));
