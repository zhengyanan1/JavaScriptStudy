
class BannerWebpackPlugin{
    constructor(options = {}){
        this.options = options
    }

    apply(compiler){
        compiler.hooks.emit.tapAsync("BannerWebpackPlugin", (compilation, callback)=>{
            debugger
            const extensions = ["css", "js"]
            // 1. 获取即将输出的资源文件：compilation.assets
            // 2. 过滤只保留js 和 css资源
            const assets = Object.keys(compilation.assets).filter(assetpath => {
                const splitted = assetpath.split(".")
                const extension = splitted[splitted.length - 1]
                return extensions.includes(extension)
            })

            // 3. 遍历剩下资源，添加上注释
            const prefix = 
`/*
*   Author: ${this.options.author}
*/
`
            console.log(assets)
            assets.forEach(asset => {
                const source = compilation.assets[asset].source()
                const content = prefix + source
                compilation.assets[asset] = {
                    // 最终资源输出时，调用source方法
                    source(){
                        return content
                    },
                    size(){
                        return content.length
                    }
                }
            })

            callback()
        })
    }
}

module.exports = BannerWebpackPlugin