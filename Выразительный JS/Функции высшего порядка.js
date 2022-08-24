
        function noisy(f) {
            return (...args) => {
                console.log('вызов для', args);
                let result = f(...args);
                console.log('вызов для', args, 'возвращает', result);
                return result;
            };
        }

        noisy(Math.min)(3, 2, 1);