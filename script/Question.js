
class Question {
    constructor(question) {
        this.question = question;
        this.average;
        this.questionAverage;
        
    }

    render = () => {
        let component = document.createElement('section');
        component.classList.add('question');

        let btnDelete = document.createElement('button');
        btnDelete.innerHTML = 'X';
        btnDelete.classList.add('question__delete');


        this.average = new Average();
        firebase.database().ref("parcial2/scores").on('value', (elem) => {
    
            elem.forEach(
                element => {
                    let value = element.val();
                    if(value.quid === this.question.id){
                        this.average.list(value.score);
                    }
                    
                    this.questionAverage = this.average.average().toFixed(1);

                });

                component.innerHTML = `
                <div class="question__info">${this.question.description}</div>
                <div class="question__score">
                        <p>Score: <strong class="question__average">${this.questionAverage}</strong></p>
                    
                `;

                component.appendChild(btnDelete);

        });



        btnDelete.addEventListener('click', () => {
            if (this.question.isActual === "true") {
                firebase.database().ref('parcial2/questions/' + this.question.id).set({
                    id: this.question.id,
                    description: this.question.description,
                    isActual: false,
                })
            } else {
                firebase.database().ref('parcial2/questions/' + this.question.id).remove();

            }
        });
        return component;
        
        

        
    }
}