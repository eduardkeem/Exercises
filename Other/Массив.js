
        let company = {
            name: "smartplane",
            post: ["engineer", "driver"],
            getPost(info) {
                console.log("Текущий специалист - " + this.post[info]);
            } 
        }

        company.getPost(0); // Вывод engineer
