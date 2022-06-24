import {Score} from "./score";
const score = new Score()
import Person from "./person";
const person = new Person()
class MoveBlock {
    parent_element:HTMLElement|any
    //高度
    height:number
    //right定位
    speed:number
    //
    right:number
    timer: number| any
    lastBlock:HTMLElement|any
    x:number
    y:number

    constructor(ele:string,speed:number) {
        this.parent_element = document.getElementById(ele)!
        this.height = this.getHeight()

        this.init()
        //速度
        this.speed =speed
        this.right=-(this.getHeight())
        //x和y坐标
        this.x = 0
        this.y=0
    }
    init(){
        this.createBlock()
    }
    getHeight(){
        return (Math.round(Math.random()*(15-4)+5))*10
    }

    createBlock(){
            this.parent_element.insertAdjacentHTML('beforeend',`<div class="move_box" style="height:${this.getHeight()}px"></div>`)

        this.lastBlock=this.parent_element.lastChild || null;
        this.timer =  setInterval(() => {
            try {
                this.move()
              } catch (error:any) {
              }

            this.getPosition()
          }, 100);

    }

    move(){
        // console.log(person.personX) 120
      if(this.lastBlock.offsetLeft<=person.personX&&this.lastBlock.offsetLeft>=person.personX-40){
          if(this.lastBlock.offsetTop<=person.personY){
              this.parent_element.innerHTML='<div class="bgc"></div>'
              throw new Error('死了')
          }

        }

        if(this.speed>=70){
            this.speed = 70
        }
        const that = this
        this.right+=this.speed
        this.lastBlock.style.right = that.right+'px'
        if(this.right>=(this.parent_element.clientWidth+40)){
            score.PlusScore(1)
            try {
                this.parent_element.removeChild(this.lastBlock)
                clearInterval(this.timer)

              } catch (error) {

              }

        }
    }
    getPosition(){
        this.x = this.lastBlock.offsetLeft
        this.y = this.lastBlock.offsetTop
    }
    get X(){
        return this.x
    }
    get Y(){
        return this.y
    }

}
export default MoveBlock
