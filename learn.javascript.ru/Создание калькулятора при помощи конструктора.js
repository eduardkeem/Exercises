
        /*
        Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

        read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
        sum() возвращает сумму введённых свойств.
        mul() возвращает произведение введённых свойств.

        Например:

        let calculator = new Calculator();
        calculator.read();

        alert( "Sum=" + calculator.sum() );
        alert( "Mul=" + calculator.mul() );
        */

        function Calculator() {

            this.read = function() {
                this.a = Number(prompt('Введите первое значение:'));
                this.b = Number(prompt('Введите второе значение:'));
            };

            this.sum = function() {
                return this.a + this.b;
            };

            this.mul = function() {
                return this.a * this.b;
            };
        }


        let calculator = new Calculator();

        calculator.read();

        alert( "Сумма =" + calculator.sum() );
        alert( "Произведение =" + calculator.mul() );
