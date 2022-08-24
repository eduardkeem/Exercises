
        function ucFirst(str) {

            let firstLetter = str[0].toUpperCase();

            for (let i = 1; i < str.length; i++) {
                firstLetter += str[i];
            }

            return console.log(firstLetter);
        }

        ucFirst('вася');


        /*

        let newStr = str[0].toUpperCase() + str.slice(1);
        console.log(newStr);

        Однако есть небольшая проблемка. Если строка пуста, str[0] вернёт undefined, 
        а у undefined нет метода toUpperCase(), поэтому мы получим ошибку.

        Выхода два:

        Использовать str.charAt(0), поскольку этот метод всегда возвращает строку (для пустой строки — пустую).
        Добавить проверку на пустую строку.


        Вот второй вариант:

        function ucFirst(str) {
            
            if (!str) return str;

            return str[0].toUpperCase() + str.slice(1);
        }

        alert( ucFirst("вася") ); // Вася

        */
