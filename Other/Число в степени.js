
        const power = function(base, exponent) {
        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result = result * base;
        }
        return result;
    }

        console.log(power(2, 10));

        // base - возводимое число
        // exponent - степень
