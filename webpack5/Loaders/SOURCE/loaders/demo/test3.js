// raw loader 接受到的数据是buffer
module.exports = function(content){
    console.log(content, "...")
    return content
}

module.exports.raw = true