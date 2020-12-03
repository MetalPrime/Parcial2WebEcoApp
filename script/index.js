window.addEventListener('load', function () {
    const listHistoric = document.querySelector('.historic__list');

    const inputQuestion = document.querySelector('.actual__inputQuestion')
    const btnQuestion = document.querySelector('.actual__btnOk');

    const actualQuestion = document.querySelector('.actual__question');

    const database = firebase.database();

    const noQuestion = document.querySelector('.noQuestion');

    btnQuestion.addEventListener('click', function (event) {

        let value;
        if (inputQuestion.value == '') {
            alert('digite algo por favor');
            console.log('loco de mierda no funciona');
        } else {

            database.ref('parcial2/questions').once('value').then(
                function (elem) {
                    elem.forEach(element => {
                        value = element.val();
                        console.log(value);
                    });

                    database.ref('parcial2/questions/' + value.id).set({
                        id: value.id,
                        description: value.description,
                        isActual: "false",
                    })
                });

                


                let questionsReference = database.ref('parcial2/questions').push();
                let question = {
                    id: questionsReference.key,
                    description: inputQuestion.value,
                    isActual: "true",
                }
    
                questionsReference.set(question);
                console.log('loco de mierda')
                inputQuestion.value = '';

            


        }

    });


    database.ref('parcial2/questions').on('value', function (elem) {
        listHistoric.innerHTML = '';
        actualQuestion.innerHTML = '';
        let newQuestion;
        let value;

        elem.forEach(element => {
            value = element.val();
            newQuestion = new Question(value);
            if (value.isActual === "true") {
                actualQuestion.appendChild(newQuestion.render());
            } else {
                
                listHistoric.appendChild(newQuestion.render());
            } 
            
            

        });

        
    });
});