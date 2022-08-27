//Init module if you need
let helperMap = null
let firstStr = ''
function Init()
{
    let helper = new Map()
    let firstStr = ''
}
//Insert one char from stringstream
function Insert(ch)
{
    if(helperMap.has(ch)){
        helperMap.set(ch, helperMap.get(ch) + 1)
    }
    else{
        helperMap.set(ch, 1)
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for(let ch in helperMap.keys()){
        if(helperMap.get(ch) === 1) return ch
    }

    return '#'
}

module.exports = {
	Init : Init,
    Insert : Insert,
    FirstAppearingOnce: FirstAppearingOnce
};