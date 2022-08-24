
        function pow(x, n) {

        let result;

        for (i = 1; i <= n; i++) {
            result = x ** i;
        }
        return result;
        }

        let x = prompt("Введите возводимое число", '');
        let n = prompt("Введите степень числа", '');

        if (n < 1) {
        alert(`Степень ${n} не поддерживается, используйте натуральное число`);
        } else {
        alert( pow(x, n) );
        }
