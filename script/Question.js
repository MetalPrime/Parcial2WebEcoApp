class Question{
    constructor(question){
        this.question = question;
    }

    render = () =>{
        let component = document.createElement('section');
        component.classList.add('question');

        let btnDelete = document.createElement('button');
        btnDelete.innerHTML = 'X';
        btnDelete.classList.add('question__delete');
        component.innerHTML = `
        <div class="question__info">${this.question.description}</div>
        <div class="question__score">
                <p>Score: <strong class="question__average"></strong></p>
            </div>
        `;

        component.appendChild(btnDelete);

        btnDelete.addEventListener('click',() =>{
            if(this.question.isActual === true){
                firebase.database().ref('parcial2/questions/' + this.question.id ).set({
                    id: this.question.id,
                    description: this.question.description,
                    isActual: false,
                })
            } else {
                firebase.database().ref('parcial2/questions/' + this.question.id ).remove();

            }
        });
        return component;
    }
}