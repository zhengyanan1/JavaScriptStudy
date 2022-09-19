function myLog(message: string, userId?:string){
    console.log(message, userId)
}
myLog("1")


function sum(){
    return Array.from(arguments).reduce((total, n)=> total + n, 0)
}

function fancyDate(this: Date){
    console.log(this)
    return `${this.getDate()}`
}
console.log(fancyDate.call(new Date))
// fancyDate()


function* createNumbers(): IterableIterator<number>{
    let n = 0
    while(true){
        yield n++
    }
}
let numbers = createNumbers()
numbers.next()
numbers.next()
numbers.next()

let a = fancyDate


type WarnUser = {
    wasCalled: boolean
    (warning: string): void
}
const warnUser: WarnUser = (warning: string)=>{
    if(warnUser.wasCalled){
        return
    }
    warnUser.wasCalled = true
    console.log(warning)
}
warnUser.wasCalled = false


let arr = []
Promise<number>


type TreeNode = {
    value: string
}

type LeafNode = TreeNode & {
    isLeaf: boolean
}
let leaf:LeafNode = {
    value: '1',
    isLeaf: false
}


function is<T>(a: T, ...b: T[]): boolean {
    return b.every(_ => _ === a)
  }
  

console.log(is('string', "string"))

// console.log(is(10, 'foo'))
console.log(is([1], [1, 2], [1, 2, 3]))