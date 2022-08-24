
        /*
        
        Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
        Функция должна быть нечувствительна к регистру:

        checkSpam('buy ViAgRA now') == true
        checkSpam('free xxxxx') == true
        checkSpam("innocent rabbit") == false

        */

        /*

        function checkSpam(str) {

            if (str.includes('viagra') || str.includes('xxx')) {
                return true;
            } else {
                return false;
            }
        }

        console.log(checkSpam('buy ViAgRA now'));

        */

        // Для поиска без учёта регистра символов переведём всю строку в нижний регистр, а потом проверим, есть ли в ней искомые подстроки:

        function checkSpam(str) {

            let lowerStr = str.toLowerCase();

        return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    }

        console.log( checkSpam('buy ViAgRA now') );
        console.log( checkSpam('free xxxxx') );
        console.log( checkSpam("innocent rabbit") );
