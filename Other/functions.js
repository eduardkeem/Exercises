
        //Задача 1
        //Кто попадет в консоль первым Вася или Коля?

        /*function showName() {
            console.log("Вася!");
        }
        setTimeout(showName, 0);
        console.log("Коля!");

        //Задача 2
        //Верно ли вызвана функция
        showMessage();
        function showMessage() {
            console.log("Сообщение");
        }

        //Задача 3
        //Верно ли вызвана функция
        let showMessage = function () {
            console.log("Сообщение");
        };
        showMessage();*/

        "use strict"
        
        if (2 > 1) {
            function showMessage() {
                console.log("Сообщение");
            }
            showMessage();
        }
