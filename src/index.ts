import './style/index.less'
import {GameController} from "./modules/GameController";
const startGame:HTMLElement = document.querySelector('.startGame')!
const resetGame:HTMLElement  = document.querySelector('.resetGame')!
let game = null
startGame!.addEventListener('click',function (){
   game =  new GameController()
 this.disabled = true
})
resetGame!.addEventListener('click',function (){
   window.location.reload()
})




