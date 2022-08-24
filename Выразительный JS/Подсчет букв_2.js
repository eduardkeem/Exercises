

        function countBs(str) {

            let count = 0;

            for (i = 0; i < str.length - 1; i++) {
                if (str[i] === "B") {
                    count++;
                }
            }
            return count;
        }

        console.log(countBs("BBBBBBddd"));


        function countChar(str, char) {

        let count = 0;

        for (i = 0; i < str.length - 1; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        return count;
        }

        console.log(countChar("BBBBBBdddd", "d"));
