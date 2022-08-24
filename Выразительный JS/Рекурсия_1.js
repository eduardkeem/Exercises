
        function power(base, exponent) {
            if(exponent === 0) {
                return 1;
            } else {
                return base * power(base, exponent - 1);
            }
        }
        console.log(power(2, 4));

        /*
        base = 2
        exponent(3 - 1) = 2
        power(2, 4 - 1) = 2, 3

        base * power(base, exponent - 1) = 2 * power(2, 4 - 1) =
        = 2 * power(2, 3) = 2 * 2 в степени 3 = 2 * 8 = 16
        */
