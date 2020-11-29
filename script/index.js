window.addEventListener('load', function(){
    const listHistoric = document.querySelector('.historic__list');

    const inputQuestion = document.querySelector('.actual__inputQuestion')                                                                                                                                                                        
    const btnQuestion = document.querySelector('.actual__btnOk');

    const actualQuestion = document.querySelector('.actual__question');
    const actualAverage = document.querySelector('.actual__average');

    const database = firebase.database();

    btnQuestion.addEventListener('click',function(event){

        if(inputQuestion.value == ''){
            alert('digite algo por favor');
            console.log('loco de mierda no funciona');
        } else{
            let questionsReference = database.ref('parcial2/questions').push();
            let question = {
                id: questionsReference.key,
                description: inputQuestion.value,
                isActual : true,
            }
    
            questionsReference.set(question);
            console.log('loco de mierda')
            inputQuestion.value = '';
        }

    });

    database.ref('parcial2/questions').on('value', function(elem){
        listHistoric.innerHTML = '';
        actualQuestion.innerHTML = '';
        let newQuestion;
        let value;

        elem.forEach(element => {
            value = element.val();
            newQuestion = new Question(value);
            if(value.isActual){
                actualQuestion.appendChild (newQuestion.render());
            } else{
                listHistoric.appendChild(newQuestion.render());
            }
        }); 
    });
});