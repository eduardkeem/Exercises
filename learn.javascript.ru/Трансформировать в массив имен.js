
    // У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
  
   /*
        let vasya = { name: "Вася", age: 25 };
        let petya = { name: "Петя", age: 30 };
        let masha = { name: "Маша", age: 28 };
        let slava = { name: "Слава", age: 21 };

        let users = [ vasya, petya, masha, slava ];

        let array = [];

        for (let i = 0; i < users.length; i++) {
            array[i] = users[i].name;
        }

        let names = array.join(', ');

        console.log(names);

    */

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = users.map(item => item.name);

    console.log( names ); // Вася, Петя, Маша

