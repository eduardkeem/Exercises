
        function zeroPad(number, width) {
            let string = String(number);  // Приравниваем number к строке, т.к. нельзя будет посчитать кол-во букв в параметре number!
            while (string.length < width) {
                string = "0" + string;
            }
            return string;
        }
        function printFarmInventory(cows, chickens, pigs) {
            console.log(`${zeroPad(cows, 3)} коров`);
            console.log(`${zeroPad(chickens, 3)} цыплят`);
            console.log(`${zeroPad(pigs, 3)} свиней`);
        }

        printFarmInventory(7, 16, 3);
