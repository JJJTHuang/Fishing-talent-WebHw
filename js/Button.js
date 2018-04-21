class Button extends Spirit {
    constructor(type) { 

        const data = window._g_resource['bottom'][`cannon_${type}`]

        super({
            img: data.img,
            sx: data.frame.x, sy: data.frame.y,
            w: data.frame.w, h: data.frame.h
        })

        this.type = type

    }

    //检测按下的区域是否是按钮
    //blue说 由于js木有private,前面加下划线的这种写法一般用于定义内部变量
    _check(x,y){
        if(
            x <= this.x + this.w/2 && x >= this.x - this.w/2 &&
            y <= this.y + this.h/2 && y >= this.y - this.h/2
        ){
            return true
        }else{
            return false
        }
    }

    checkDown(x,y){
        if(this._check(x,y)){

            let data = _g_resource['bottom'][`cannon_${this.type}_down`]

            this.img = data.img
            this.sx  = data.frame.x
            this.sy = data.frame.y
            this.w = data.frame.w
            this.h = data.frame.h

            return true
        }
    }

    checkUp(x,y){
        if (this._check(x, y)){
            let data = _g_resource['bottom'][`cannon_${this.type}`]

            this.img = data.img
            this.sx = data.frame.x
            this.sy = data.frame.y
            this.w = data.frame.w
            this.h = data.frame.h

            return true
        }
    }
}