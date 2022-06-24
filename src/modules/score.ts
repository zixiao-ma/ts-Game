
export class Score {
    score:number
    span:HTMLElement

    constructor() {
        this.score =0;
        this.span = document.querySelector('.score span')!

    }

    PlusScore(value:number){

        this.score += value

        this.span.innerText = this.score.toString()

    }
    get scor(){
        return Number(this.span.innerText)
    }
}
