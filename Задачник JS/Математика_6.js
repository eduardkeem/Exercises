
        /* Составьте программу, которая генерирует и выводит на экран длины сторон
        катетов прямоугольного треугольника, не превышающих 10см. Программа должна подсчитать
        длину гипотенузы этого треугольника, его площадь и периметр и вывести их на экран.
        Затем эти вычисленные значения следует округлить и вывести результат на экран в
        отдельной строке.
        Проверка => вывод в 1 строке, например: 4.2, 5.7; вывод во 2 строке: 7.08, 11.97, 16.98;
        вывод в 3 строке: 7, 12, 17. */

               let firstCathetus;

            function getFirstCathetus(min, max){
                firstCathetus = Math.round((Math.random() * (max - min) + min) * 10) / 10;
                return firstCathetus;
            }

            getFirstCathetus(1, 10);

               let secondCathetus;

            function getSecondCathetus(min, max){
                secondCathetus = Math.round((Math.random() * (max - min) + min) * 10) / 10;
                return secondCathetus;
            }

            getSecondCathetus(1, 10);

            console.log("Первый катет: " + firstCathetus + ",", "Второй катет: " + secondCathetus + ";");

               let hypotenuse;

            function getHypotenuse(value1, value2) {
                hypotenuse = Math.round((Math.sqrt(Math.pow(firstCathetus, 2) + Math.pow(secondCathetus, 2))) * 100) / 100;
                return hypotenuse;
            }

            getHypotenuse(firstCathetus, secondCathetus);


               let square;

            function getSquare(value1, value2) {
                square = Math.round(0.5 * (value1 * value2) * 100) / 100;
                return square;
            }

            getSquare(firstCathetus, secondCathetus);


               let perimeter;

            function getPerimeter(value1, value2) {
               perimeter = Math.round((value1 + value2 + hypotenuse) * 100) / 100;
               return perimeter;
            }

            getPerimeter(firstCathetus, secondCathetus);


            console.log("Гипотенуза: " + hypotenuse + ",","Площадь: " + square + ",","Периметр: " + perimeter + ";");

            console.log("Гипотенуза: " + Math.round(hypotenuse) + ",","Площадь: " + Math.round(square) + ",","Периметр: " + Math.round(perimeter) + ";");