class Person {
    person_ele:HTMLElement
    // person的bottom定位
    h:number
    per_timer:number| any
    allow:boolean
    constructor() {
        this.person_ele = document.querySelector('.person')!
        this.h = 0
        this.init()
        this.allow = true
    }
    init(){
            document.addEventListener('keydown',this.onKeyDown.bind(this))
    }
    setHeight(){
        this.person_ele.style.bottom = this.h+'px'
    }

    changeH(){
        this.per_timer= setInterval(() => {
             this.h-=10
            this.setHeight()
            if(this.h<=0){
                clearInterval(this.per_timer)
            }
           }, 10);
    }
    onKeyDown(event:KeyboardEvent){
        const _that = this
        if(!this.allow) return
        if(event.code==='ArrowUp'&&this.h<=0){
            this.person_ele.className = 'person transition'
                this.allow = false
                this.h =210
                this.setHeight()

                setTimeout(() => {
                    this.person_ele.className = 'person'
                    _that.changeH()


                        this.allow = true

                }, 600);

            }
        }
        get personX(){
        return this.person_ele.offsetLeft+this.person_ele.clientWidth
        }
    get personY(){
        return this.person_ele.offsetTop+this.person_ele.clientHeight
    }

    }


export default Person
