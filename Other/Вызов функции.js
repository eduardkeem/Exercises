
      let car = {
          maxSpeed: 240,
      };
        
      console.log("Скорость была: " + car.maxSpeed);

      function changeSpeed(a) {
          a.maxSpeed = 300;
      }

      changeSpeed(car);

      console.log("Скорость стала: " + car.maxSpeed);
