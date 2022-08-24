
        /*
        Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

        То есть дефисы удаляются, а все слова после них получают заглавную букву.

        Примеры:

        camelize("background-color") == 'backgroundColor';
        camelize("list-style-image") == 'listStyleImage';
        camelize("-webkit-transition") == 'WebkitTransition';


        P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, 
        потом переделайте всё как нужно и методом join соедините обратно.
        */

        function camelize(str) {

            return str
                .split('-')
                // разбивает 'my-long-word' на массив ['my', 'long', 'word']
                .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) // Если индекс элемента 0, тогда возврат этой же строки, если нет, тогда возврат строки но первый символ с большой буквы
                // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
                // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
                .join('')
                // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
        }

        console.log(camelize("my-long-word"));
