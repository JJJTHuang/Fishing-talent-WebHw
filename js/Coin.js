class Coin extends Spirit {
    constructor(type) {
        if (type > 2 || type < 1) {
            throw new Error('金币的类型只能在1-2之间')
        }

        const data = window._g_resource['coin'][`coinAni${type}`]

        super({
            img: data.img,
            sx: data.frame.x, sy: data.frame.y,
            w: data.frame.w, h: data.frame.h,
        })
        this.type = type
    }
}