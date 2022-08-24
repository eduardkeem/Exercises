
            let car1 = {
                color: "green",
                maxSpeed: 200,
            }

            console.log(car1.color);

            let car2 = {
                color: "red",
                maxSpeed: 250,
            }

            console.log(car2.maxSpeed);

            car2.color = car1.color;

            console.log(car2.color);
