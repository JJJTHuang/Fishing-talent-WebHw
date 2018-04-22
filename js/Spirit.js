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

        this.scaleX = options.scaleX || 1
        this.scaleY = options.scaleY || 1
        this.speed = options.speed || 0

        this.frame = options.frame || 0 //帧计数器
        this.max_frame = 3
        this.tick = options.tick || 0
        this.max_tick = 10//每10帧动画一次
    }

    draw(gd) {
        gd.save()

        gd.translate(this.x, this.y)

        gd.rotate(this.rotation* Math.PI / 180)

        gd.scale(this.scaleX, this.scaleY)

        gd.drawImage(
            this.img,
            this.sx, this.sy, this.w, this.h,
            -this.w / 2, -this.h / 2, this.w, this.h, //这里的-this.w / 2,-this.h / 2是以图片中心点为轴
        )

        gd.restore()
    }

    move(gd) {
        let speedx = this.speed * Math.sin(this.rotation * (Math.PI / 180)) //横坐标速度
        let speedy = this.speed * Math.cos(this.rotation * (Math.PI / 180)) //纵坐标速度
        this.x += speedx
        this.y -= speedy
    }

    setFrame(frame) {
        this.sy = frame * this.h
    }

    nextFrame() {
        //达到一定帧数就换一张图片,从而达到动画的效果
        if (this.tick == this.max_tick) {
            if (this.frame == this.max_frame) {
                this.frame = 0
            }
            this.tick = 0
            this.frame++
            this.setFrame(this.frame)
        }

        this.tick++

        
        // this.tick === this.max_tick ? (function(){
        //     this.frame === this.max_frame ? this.frame = 0 : ''
        //     this.tick = 0
        //     this.frame++
        //     this.setFrame(this.frame)            
        // })() : ''
    }

    //检测物体是否超出画布
    outOfCanvas(w,h){
        if(
            this.x > w + this.w || this.x < 0 - this.w ||
            this.y > h + this.h || this.y < 0 - this.h
        ){
            return true
        }else{
            return false
        }
    }

    //检测两个物体是否发生碰撞
    Collision(obj){
        let R = this.w / 2.5 , r = obj.w / 2.5,
            x = this.x - obj.x ,y = this.y - obj.y,
            dis = Math.abs(Math.sqrt(Math.pow(x,2)+Math.pow(y,2)))

        return (dis <= R+r)
    }
}