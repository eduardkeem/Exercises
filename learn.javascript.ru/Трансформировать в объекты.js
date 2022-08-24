
        /*
        У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
        Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
        Например:
        */

        let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 21 };
        let petya = { name: "Петя", surname: "Иванов", id: 2, age: 22 };
        let masha = { name: "Маша", surname: "Петрова", id: 3, age: 23 };

        let users = [ vasya, petya, masha ];

        let usersMapped = users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
        age: user.age
        }));

        /*
        usersMapped = [
        { fullName: "Вася Пупкин", id: 1, age: 21 },
        { fullName: "Петя Иванов", id: 2, age: 22 },
        { fullName: "Маша Петрова", id: 3, age: 23 }
        ]
        */

        console.log( usersMapped[0].age ) // 1
        console.log( usersMapped[0].fullName ) // Вася Пупкин
