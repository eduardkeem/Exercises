
        let theNumber = Number(prompt("Введите число"));
        if (!Number.isNaN(theNumber)) {
            alert("Это число является квадратным корнем из " + theNumber * theNumber);
        } else {
            alert("Эй, почему Вы ввели не число?");
        }
