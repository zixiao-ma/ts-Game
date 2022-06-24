import MoveBlock from "./MoveBlock";
import Person from "./person";
import {Score} from "./score";
import moveBlock from "./MoveBlock";
const score = new Score()
export class GameController {
    move: MoveBlock | undefined
    speed: number
    ss:number
    timer:number| undefined
    constructor() {
        this.speed = 1500
       this.init()
        this.ss = 20
    }
    getHeight(){
        return (Math.round(Math.random()*(3-10)+10))*100
    }
    init() {
        const that = this

     this.timer = Number(setInterval(() => {
         this.fn()
     }, this.speed))
    }
    fn(){
        if( score.scor%10==0){
            if(this.speed <=700){
                this.speed = 700
            }

            this.speed = this.speed-60
        }
    if(score.scor >=20){

        this.ss =score.scor
        if( this.ss>=70){
            this.ss = 70
        }

    }
        setTimeout(()=>{

            this.move = new MoveBlock('box', this.ss)
            clearInterval(this.timer)
            this.init()

        },this.getHeight())


    }
}
