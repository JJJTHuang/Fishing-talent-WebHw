class Cannon extends Spirit{
    constructor(type){
        if(type>7 || type<1){
            throw new Error('炮塔的类型只能在1-7之间')
        }

        const data = window._g_resource['cannon'][`cannon${type}`]

        super({
            img:   data.img,
            sx:    data.frame.x,  sy: data.frame.y,
            w: data.frame.w,  h:data.frame.h,
        })

        this.type = type
        this.S_flag = false
    }

    setType(type){
        //仅仅改变类型,炮塔的是不会变的
        //因此要改动下面的属性,也就是不同类型的炮塔对应的图片,以及坐标等
        this.type  = type

        let data = _g_resource['cannon'][`cannon${type}`]

        this.img = data.img
        this.sx = data.frame.x
        this.sy = data.frame.y
        this.w = data.frame.w
        this.h = data.frame.h
    }

    nextFrame(){
        super.nextFrame()
    }
}