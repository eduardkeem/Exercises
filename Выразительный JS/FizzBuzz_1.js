
       for (let num = 1; num <= 100; num++) {
           if (num % 3 == 0 && num % 5 == 0) console.log("FizzBuzz");
           if (num % 3 == 0) console.log("Fizz");
           if (num % 3 == 0) continue;
           if (num % 5 == 0) console.log("Buzz");
           if (num % 5 == 0) continue;
           console.log(num);
       }
