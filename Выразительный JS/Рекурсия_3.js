
        function isEven(number) {
            if (number < 0) {
                return isEven(-number);
            } else if (number == 1) {
                return false;
            } else if (number == 0) {
                return true;
            } else {
                return isEven(number - 2);
            }
        }
        console.log(isEven(10)); // true

       /* function isEven(n) {
        n = Math.abs(n);
        if (n==0)
            return true;
        else if (n==1)
            return false;
        else
            return isEven(n-2);
        }

        console.log(isEven(-50)); // → true
        console.log(isEven(75)); // → false
        console.log(isEven(-75)); // → false
        console.log(isEven(-1)); // → false
        */
