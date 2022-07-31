

class CleanWebpackPlugin{
    apply(compiler){

        // 2. 获取打包输出的目录
        const outputPath = compiler.options.output.path
        const fs = compiler.outputFileSystem
        // 1. 注册钩子，在打包输出前 emit
        compiler.hooks.emit.tap("CleanWebpackPlugin", (compilation) =>{
            // 3. 通过fs删除打包输出目录下的所有文件
            this.removeFiles(fs, outputPath)
        })
    }

    removeFiles(fs, filePath){
        // 想要删除目录，需要先删除目录下的所有文件
        const files = fs.readdirSync(filePath)
        files.forEach(file => {
            const _path = `${filePath}/${file}`
            const fileStat = fs.statSync(_path)
            // console.log(fileStat)
            if(fileStat.isDirectory()){
                this.removeFiles(fs, _path)
            }else{
                fs.unlinkSync(_path)
            }
        })
        fs.rmdirSync(filePath)
    }
}

module.exports = CleanWebpackPlugin