
        /* Составьте программу, которая принимает с клавиатуры целое
        положительное двузначное число, а затем генерирует три целых
        положительных двузначных числа, не больших первого.
        Проверка => ввод: 47 => вывод, например 43, 12, 26. */
        
                value = prompt("Введите двузначное положительное число:")
               
                function firstNumber(min = 10, max = 100) {
      
                    first = Math.floor(Math.random() * (max - min) + min);
                
                    if (first < value) {
                        return first;
                    } else {
                        return firstNumber(min, max);
                    }
                }

                firstNumber();

                console.log(first);


                function secondNumber(min = 10, max = 100) {
      
                    second = Math.floor(Math.random() * (max - min) + min);
                
                    if (second < value) {
                        return second;
                    } else {
                        return secondNumber(min, max);
                    }
                }

                secondNumber();

                console.log(second);

                
                function thirdNumber(min = 10, max = 100) {
      
                    third = Math.floor(Math.random() * (max - min) + min);
                
                    if (third < value) {
                        return third;
                    } else {
                        return thirdNumber(min, max);
                    }
                }

                thirdNumber();

                console.log(third);
          