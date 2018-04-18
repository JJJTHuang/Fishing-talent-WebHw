class Spirit {
    constructor(options) {
        this.img = options.img

        this.sx = options.sx || 0
        this.sy = options.sy || 0
        this.w = options.w || this.img.width
        this.h = options.h || this.img.height
        this.x = options.x || 0
        this.y = options.y || 0

        this.rotation = options.rotation || 0

        this.scale = options.scale || 1

        this.speed = options.speed || 0

        this.frame = options.frame || 0 //帧计数器
        this.max_frame = 3
        this.tick = options.tick || 0
        this.max_tick = 10//每10帧动画一次
    }

    draw(gd) {
        gd.save()

        gd.translate(this.x, this.y)

        gd.drawImage(
            this.img,
            this.sx, this.sy, this.w, this.h,
            -this.w / 2, -this.h / 2, this.w, this.h, //这里的-this.w / 2,-this.h / 2是以图片中心点为轴
        )

        gd.restore()
    }

    move(gd) {
        let speedx = this.speed * Math.sin(this.rotation * (Math.PI / 180))
        let speedy = this.speed * Math.cos(this.rotation * (Math.PI / 180))
        console.log(this.rotation)
        this.x += speedx
        this.y -= speedy

    }

    setFrame(frame) {
        this.sy = frame * this.h
    }

    nextFrame() {
        if (this.tick == this.max_tick) {
            if (this.frame == this.max_frame) {
                this.frame = 0
            }
            this.tick = 0
            this.frame++
            this.setFrame(this.frame)
        }

        this.tick++
        console.log(this.tick, this.frame)
    }
}