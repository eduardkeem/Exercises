
        //for (let num = 0; num <= 5; num++) console.log(num);

        /*let num = 8;
        while (num) {
            console.log(num);
            num--;
        }*/

        /*for (let num = 0; num < 3; num++) {
            console.log(`Число: ${num}`);
        }*/

        let numb = 0;
        do {
            console.log(`Число: ${numb}`);
            numb++;
        } while (numb < 3);

        for (let num = 0; num < 2; num++) {
            for (let size = 0; size < 3; size++) {
                console.log(size);
                if (size ==1) break;
            }
        }
