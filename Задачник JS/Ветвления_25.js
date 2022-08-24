
        /* Составьте программу, которая принимает с клавиатуры три числа:
        два перых должны быть длиной сторон катетов прямоугольного треугольника, 
        а третье - длиной гипотенузы. Программа должна проверить, соответствуют ли 
        введенные значения этому требованию.
        Проверка => ввод: 4, 3, 5 => вывод: длина гипотенузы соответствует длине
        катетов; ввод: 5, 4, 6 => вывод: длина гипотенузы не соответствует 
        длине катетов. */

         const cathetOne = Number(prompt("Введите длину первого катета:"));
         const cathetTwo = Number(prompt("Введите длину второго катета"));
         const hypotenuse = Number(prompt("Введите длину гипотенузы"));

         const cathetOneSquare = cathetOne * cathetOne;
         const cathetTwoSquare = cathetTwo * cathetTwo;
         const hypotenuseSquare = hypotenuse * hypotenuse;

         const sumCathets = cathetOneSquare + cathetTwoSquare;

         if (sumCathets == hypotenuseSquare) {
            alert("Длина гипотенузы соответствует длине катетов");
         } else {
             alert("Длина гипотенузы не соответствует длине катетов");
         }
