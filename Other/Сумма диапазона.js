
        function range(start, end) {

            let array = [];

            for (let i = start; i <= end; i++) {
                array[i] += i;
            }
            return array;
        }

        console.log(range(1, 10));



        // function sum(func) {

        //     let all = 0;

        //     for (let i = 0; i < func.length; i++) {
        //         all += i;
        //     }
        //     return all;
        // }

        // console.log(sum(a));
