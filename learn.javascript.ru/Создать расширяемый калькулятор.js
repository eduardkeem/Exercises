
    /*
        Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

        Задание состоит из двух частей.

        1. Во-первых, реализуйте метод calculate(str), который принимает строку
        типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

        Пример использования:

        let calc = new Calculator;

        alert( calc.calculate("3 + 7") ); // 10

        2. Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами
        func(a,b), которая описывает его.

        Например, давайте добавим умножение *, деление / и возведение в степень **:

        let powerCalc = new Calculator;
        powerCalc.addMethod("*", (a, b) => a * b);
        powerCalc.addMethod("/", (a, b) => a / b);
        powerCalc.addMethod("**", (a, b) => a ** b);

        let result = powerCalc.calculate("2 ** 3");
        alert( result ); // 8

        Для этой задачи не нужны скобки или сложные выражения.
        Числа и оператор разделены ровно одним пробелом.
        Не лишним будет добавить обработку ошибок.
    */

            function Calculator() {

            // Сумма строки

            let arrayPlus = [];
            let sum = 0;

            this.sum = function(str) {

                arrayPlus = str.split('+');

                for (let i = 0; i < arrayPlus.length; i++) {
                    sum += Number(arrayPlus[i]);
                }
                return sum;
            };

            // Разность строки

            let arrayMinus = [];
            let sumMinus;

            this.dif = function(str) {

                arrayMinus = str.split('-');
                sumMinus = Number(arrayMinus[0]);

                for (let k = 1; k < arrayMinus.length; k++) {
                    
                    sumMinus -= Number(arrayMinus[k]);
                }
                return sumMinus;

            };
        }

        let calc = new Calculator;

        console.log(calc.sum('3 + 8 + 1 + 2'));

        console.log(calc.dif('9 - 4 - 1 - 1 - 1'));
 

        /*
        function Calculator() {

        this.methods = {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b
        };

        this.calculate = function(str) {

            let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
            }

            return this.methods[op](a, b);
        }

        this.addMethod = function(name, func) {
            this.methods[name] = func;
        };
        }
        */
