
/*
        function tableFor(event, journal) {

            let table = [];

            for (let i = 0; i < journal.length; i++) {

                let entry = journal[i];
                let index = 0;

                if (entry.events.includes(event)) {
                    index += 1;
                }

                if (entry.squirrel) index += 2;
                    table[index] += 1;

            }

            return table;

        }

        console.log(rableFor('ел пиццу', 'JOURNAL'));

    */

        function a(value) {

            for (let i = 0; i < value.length; i++) {
                let entry = value[i];
                console.log(entry);
            }

        }

        a('max');
