// version4: final
function Permutation4(str){
    if(str.length == 0) return []

    let data = str.split('')
    let result = new Set()
    search4(data, 0, result)

    return Array.from(result)
}

function search4(data, currentIndex, result){
    if(currentIndex === data.length){
        const one = data.join('')
        // if(result.indexOf(one) == -1) result.push(one)
        result.add(one)
        return
    }

    for(let i = currentIndex; i < data.length; i++){
        swap(data, i, currentIndex);
        search4(data, currentIndex + 1, result)
        swap(data, i, currentIndex)
    }
}

function swap(array, left, right){
    let t = array[left]
    array[left] = array[right]
    array[right] = t
}


// version3:
function Permutation3(str, current = '', result = []){
    if(str.length == 0) result.push(current)

    for(let i = 0; i < str.length; i++){
        current += str[i]
        let nextStr = str.slice(0, i) + str.slice(i + 1)
        Permutation3(nextStr, current, result)
        current = current.slice(0, -1)
    }

    return [...new Set(result)]
}

// version2：
function Permutation2(str)
{
    if(str.length == 0) return []

    let result = new Set()
    let data = []
    let current = 0
    for(let i = 0; i < str.length; i++){
        data[i] = i
    }

    search2(data, current, str, result)

    result = Array.from(result)
    console.log(result)
    return result.map((v, index)=>{
        v = '' + v
        let one = ''
        for(let i = 0; i < v.length; i++){
            one += str[i]
        }
        if(one.length < str.length) one = str[0] + one
        return one
    })
}

function search2(data, current, str, result){
    if(data.length == 0){
        result.add(current)
    }

    for(let i = 0; i < data.length; i++){
        const one = data[i]

        current = 10 * current + (one - '0')
        data.splice(i, 1)
        search2(data, current, str, result)
        data.splice(i, 0, one)
        current = Math.floor(current / 10)
    }
}

// version1：超时
function Permutation(str)
{

    if(str.length == 0) return []

    let result = new Set()
    let visited = new Array(str.length).fill(false)
    let current = ''

    search(str, visited, current, result)

    return [...result]
}

function search(str, visited, current, result){
    if(current.length == str.length){
        result.add(current)
        return
    }

    for(let i = 0; i < str.length; i++){
        if(!visited[i]){
            visited[i] = true
            current += str[i];

            search(str, visited, current, result)

            visited[i] = false
            current = current.substring(0, current.length - 1)
        }
    }
}


module.exports = {
    Permutation : Permutation
};
console.log(Permutation2('aab'))