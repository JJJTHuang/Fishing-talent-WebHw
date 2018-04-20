class Bullet extends Spirit {
    constructor(type) {
        if (type > 7 || type < 1) {
            throw new Error('炮弹的类型只能在1-7之间')
        }

        const data = window._g_resource['bullet'][`bullet${type}`]

        super({
            img: data.img,
            sx: data.frame.x, sy: data.frame.y,
            w: data.frame.w, h: data.frame.h,
            speed : 7
        })

        this.type = type
    }
}