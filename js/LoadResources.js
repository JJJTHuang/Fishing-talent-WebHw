function LoadResource(path) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'img/' + path,
            dataType: 'text',
            type: 'GET',
            success(txt) {
                let json = eval('(' + txt + ')')

                let res = {}

                let count = 0, total = 0

                for (let i in json) {
                    total++

                    let oImg = new Image()
                    oImg.src = 'img/' + json[i].src

                    oImg.onload = function () {

                        res[i] = {
                            img: this,
                            frame: json[i].frame
                        }

                        count++

                        if (count === total) {
                            resolve(res)
                        }
                    }

                    oImg.onerror = function () {
                        reject()
                    }
                }
            },
            error(err) {
                reject(err)
            }
        })
    })
}

async function LoadR(){
    let src = {
        bottom: 'bottom.json',
        bullet: 'bullet.json',
        cannon: 'cannon.json',
        coin: 'coin.json',
        fish: 'fish.json',
        number: 'number.json',
        web: 'web.json'
    }

    let imgs = {}
    
    //此处调用了LoadResource可能会失败,所以要catch一下
    try{
        for (let i in src) {
            imgs[i] = await LoadResource(src[i])
        }
        // return imgs
        //将资源变量挂载到全局,有利于开发效率的提高(但是一定不能多,5个以内吧)
        window._g_resource = imgs
    }catch(e){
        throw e
    }
}