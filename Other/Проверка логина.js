
        let login = prompt("Напишите свой логин");//Кто там?


        if (login == "Админ") {
            password = prompt("Введите пароль");
            if (password == "Я главный") {
            alert("Здравствуйте!");
        }   else if (password == "" || password == null) {
            alert("Отменено");
        }   else {
            alert("Неверный пароль");
        }   } else if (login == "" || login == null) {
            alert("Отменено");
        } else {
            alert("Я вас не знаю");
        }
