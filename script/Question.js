class Question{
    constructor(question){
        this.question = question;
    }

    render = () =>{
        let component = document.createElement('section');
        component.classList.add('question');

        component.innerHTML = `
        <div class="question__info">${this.question.description}</div>
        `;
        return component;
    }
}