

function getLegalMacNum(str){
    const sourceStr = str
    let helper = new Set()
    let regex = /[0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F]-[0-9a-fA-F][0-9a-fA-F]/g
    let regex2 = /[0-9a-fA-F][0-9a-fA-F]:[0-9a-fA-F][0-9a-fA-F]:[0-9a-fA-F][0-9a-fA-F]:[0-9a-fA-F][0-9a-fA-F]:[0-9a-fA-F][0-9a-fA-F]:[0-9a-fA-F][0-9a-fA-F]/g
    let startIndex = -1

    while((startIndex = str.search(regex)) != -1){
        const one = str.substring(startIndex, startIndex + 17)

        helper.add(one.toUpperCase())
        str = str.substring(3)
    }

    str = sourceStr
    while((startIndex = str.search(regex2)) != -1){
        const one = str.substring(startIndex, startIndex + 17)
        helper.add(one.toUpperCase().replace(/:/g, '-'))
        str = str.substring(3)
    }
    return helper.size
}


console.log(getLegalMacNum('01-02-03-04-05-06-07'))
console.log(getLegalMacNum('01:02:03:002-03-04-05-06-07'))
console.log(getLegalMacNum('0a-0a-0a-0a-0a-0a-0A'))
