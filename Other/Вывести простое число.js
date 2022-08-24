
        let num = 7;

        let flag = "Простое число";
        for (let i = 2; i < num; i++) {
	    if (num % i == 0) {
		flag = "Не простое число";
		break; // выйдем из цикла
	    }
    }

        console.log(flag);

