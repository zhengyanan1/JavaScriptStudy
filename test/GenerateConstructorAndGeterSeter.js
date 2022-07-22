/* 对于一个tsx的class文件，自动生成constructor、setter 和 getter
    commands:
        fileName xxx
    其中， xxx 的范围是[1, 7].
    xxx & 100 == 100: 生成一个默认赋值的constructor
    xxx & 10 == 10: 生成setter
    xxx & 1 == 1: 生成getter


    需要你先自己预定义好这样一个class文件
    class RealTimeMatchInfo{
        bo: number // 赛制bo1, bo3, bo5
        location: string
        round: number // 当前是第几场， 从1开始
        matchId: number
        seasonId: number
        stageId: number
        status: number //  状态 0: 未开始; 1: 进行中; 2: 已结束
        teamA: number // 战队A id
        teamAScore: number // 战队A 获胜的游戏单局数
        teamB: number // 战队B id
        teamBScore: number // 战队B 获胜的游戏单局数
        winTeam: number // 系列赛胜利战队ID
    }
*/
const fs = require('fs')
const path = require('path')
const child_process = require("child_process")


const args = process.argv
if(args.length != 4){
    console.error("the num of params is wrong!")
    process.exit()
}

let _filePath = args[2]
let _mode = parseInt(args[3], 2)


if(!isFileExist(_filePath)){
    console.error("class 文件不存在！")
    process.exit()
}
if(_mode < 1 || _mode > 7){
    console.error("模式不正确，请重新输入")
    process.exit()
}


let isGenerateConstructor = (_mode & 0b100) == 0b100
let isGenerateSetter = (_mode & 0b10) == 0b10
let isGenerateGetter = (_mode & 0b1) == 0b1

let lastStartSearchIndex = 0 // 开始查找的起始行，用于处理一个文件里不止一个class的情况
let results = []
while(true){
    let result = checkClassFileFormat(_filePath, lastStartSearchIndex)
    if(result.ret){
        results.push(result)
        lastStartSearchIndex = result.end + 1
    }
    else{
        break
    }
}

// console.log(results)
if(results.length > 0){
    generateTargetFile(isGenerateConstructor, isGenerateSetter, isGenerateGetter, results)
    const newFilePath = _filePath + "2"
    child_process.execSync(`rm ${_filePath}`)
    child_process.execSync(`mv ${newFilePath} ${_filePath}`)
    console.log("generate constructor or setter or getter successfully~~~")
}
else{
    const _message = "class file's format is error!"
    console.error(_message)
    process.exit()
}


function generateTargetFile(hasConstructor, hasSetter, hasGetter, results){
    const out = _filePath + "2"
    fs.writeFileSync(out, "")

    for(let i = 0; i < results.length; i++){
        const result = results[i]
        const _copyStartIndex = i == 0 ? 0 : results[i - 1].end + 1
        const _copyFinalIndex = i == results.length - 1 ? result.lines.length : result.end + 1

        const _start = result.start
        const _end = result.end
        const _lines = result.lines
        const _keys = parseKeys(_start, _end, _lines)


        for(let i = _copyStartIndex; i < _end; i++)   fs.writeFileSync(out, _lines[i] + "\n", {flag: 'a+'})

        if(hasConstructor)  addConstructorPart(out, _keys)
        if(hasSetter)       addSetterPart(out, _keys)
        if(hasGetter)       addGetterPart(out, _keys)

        for(let i = _end; i < _copyFinalIndex; i++)   fs.writeFileSync(out, _lines[i] + "\n", {flag: 'a+'})
    }
}

function parseKeys(start, end, lines){
    let fields = []
    for(let i = start; i < end ; i++){
        const current = lines[i]
        const matchResult = current.match(/^\s*(\w+): (\w+(\[\])*)/)
        if(matchResult != null){
            const fieldName = matchResult[1]
            const fieldType = matchResult[2]
            const defalutValue = getDefaultValue(fieldType)
            fields.push({name:fieldName, type: fieldType, value: defalutValue})
        }
    }
    return fields
}

function getDefaultValue(_type){
    if(_type == "string"){
        return '""'
    }
    else if(_type == "number"){
        return -1
    }
    else if(_type == "boolean"){
        return false
    }
    else if(_type.endsWith("[]")){
        return "[]"
    }
    else{
        return `new ${_type}()`
    }
}

function addConstructorPart(out, keys){
    fs.writeFileSync(out, "\n\tconstructor(){\n", {flag: 'a+'})
    for(let i = 0; i < keys.length; i++){
        const _key = keys[i]
        const _name = _key.name
        const _type = _key.type
        const _defaultValue = _key.value
        fs.writeFileSync(out, `\t\tthis.${_name} = ${_defaultValue}\n`, {flag: 'a+'})
    }

    fs.writeFileSync(out, "\t}\n\n", {flag: 'a+'})
}

function addSetterPart(out, keys){
    for(let i = 0; i < keys.length; i++){
        const _key = keys[i]
        const _name = _key.name
        const _type = _key.type

        const _funcName = "set" + _name.slice(0, 1).toUpperCase() + _name.slice(1)
        fs.writeFileSync(out, `\t${_funcName}(${_name}: ${_type}){\n`, {flag: 'a+'})
        fs.writeFileSync(out, `\t\tthis.${_name} = ${_name}\n`, {flag: 'a+'})
        fs.writeFileSync(out, `\t}\n\n`, {flag: 'a+'})
    }
}

function addGetterPart(out, keys){
    for(let i = 0; i < keys.length; i++){
        const _key = keys[i]
        const _name = _key.name
        const _type = _key.type

        const _funcName = "get" + _name.slice(0, 1).toUpperCase() + _name.slice(1)
        fs.writeFileSync(out, `\t${_funcName}(){\n`, {flag: 'a+'})
        fs.writeFileSync(out, `\t\treturn this.${_name}\n`, {flag: 'a+'})
        fs.writeFileSync(out, `\t}\n\n`, {flag: 'a+'})
    }
}

function checkClassFileFormat(path, searchStartIndex){
    const fileContent = fs.readFileSync(path, {encoding: 'utf-8'})
    const lines = fileContent.split("\n")
    
    let start = findStartLineIndex(lines, searchStartIndex)
    let end = findEndLineIndex(lines, searchStartIndex)
    let isOK = true
    if(start == -1 || end == -1)    isOK = false

    return { ret: isOK, start: start, end: end, lines: lines}
}

function findStartLineIndex(lines, searchStartIndex){
    for(let i = searchStartIndex; i < lines.length; i++){
        const current = lines[i]
        // console.log(current)
        if(current.match(/class \w+{/)){
            return i
        }
    }
    return -1
}

function findEndLineIndex(lines, searchStartIndex){
    for(let i = searchStartIndex; i < lines.length; i++){
        const current = lines[i]
        if(current.match(/}/)){
            return i
        }
    }

    return -1
}

function isFileExist(path){
    let stat
    try{
        stat = fs.lstatSync(path)
    }
    catch(e){
        return false
    }
    return stat.isFile()
}