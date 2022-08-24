
        function  color(ccc) {
            if (ccc == null) {
                console.log("red");
                return;
            }
            if (ccc == "red") {
                return;
            }
            console.log(ccc);
        }

        color("green");


        let colorChek = color;

        function color(color = 'red') {
        if(color == 'red'){
        return;
        }
        console.log(color);
        }

        console.log("1.Цвет оказался по умолчанию поэтому функция завершила свою работу");
        colorChek();

        console.log("2.Цвет оказался red поэтому функция завершила свою работу");
        colorChek('red');

        console.log("3.Цвет оказался не red поэтому функция вывела в консоль новый цвет");
        colorChek('yellow');
