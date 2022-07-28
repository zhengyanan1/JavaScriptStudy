
module.exports = function(content){
    // 清除内容中的console.log（xxx）

    return content.replace(/console\.log\(.*\);?/g, "")
}