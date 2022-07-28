// 同步loader
module.exports = function(content){
    return content
}

module.exports = function(content, map, meta){
    console.log("test1")
    /** 
     * 1: err代表是否有错误
     * 2. 处理后的内容
     * 3. sourceMap 继续传递source-map
     * 4. 给其他loader传递的参数
     */
    this.callback(null, content, map, meta)
}