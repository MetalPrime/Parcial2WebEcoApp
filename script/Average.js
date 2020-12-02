

class Average{

    constructor(){
        this.listScore = [];
        this.questionAverage;
    }

    list = (item) =>{
        this.listScore.push(item);
    }

    average = () =>{
        var total = this.listScore.length;
        var scoreN = 0;
        this.listScore.forEach(element =>{
            scoreN += parseInt(element);
        })
        


        this.questionAverage = (scoreN/total) ;
    
        if(isNaN(this.questionAverage)){
            return 0;
           
        } else {
            return this.questionAverage;
        }
    }
}