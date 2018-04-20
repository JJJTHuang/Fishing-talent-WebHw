class Fish extends Spirit{
    constructor(type){
        if(type>5 || type<1){
            throw new Error('鱼的类型只能在1-5之间')
        }

        const data = window._g_resource['fish'][`fish${type}`]

        super({
            img:   data.img,
            sx:    data.frame.x,  sy: data.frame.y,
            w: data.frame.w,  h:data.frame.h,
            speed : Math.random()*1.5+1,
            rotation : 90
        })
        this.type = type
    }

    draw(gd){
        this.rotation = 0
        super.draw(gd)
        this.rotation = 90
    }
}