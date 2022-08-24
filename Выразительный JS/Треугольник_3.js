
         const iterator = Array(7).keys()
            const arr = Array.from(iterator)

        arr.reduce(acc => {
            const result = acc + "#"
            console.log(result)
            return result
        }, "")

        const limit = 7;
        let counter = 0;

        while(counter <= limit) {
            let result = "";
            for(let i = 0; i < counter; i++) {
                result += "#";
            }
            console.log(result);
            counter++;
        }
