// abstract class Piece{
//     private age: number
//     constructor(age: number){
//         this.age = age
//     }
// }
// let p = new Piece()

class MySet{
    has(value: number):boolean{
        return true
    }

    add(value: number): this{
        return this
    }
}
let mySet = new MySet()
mySet.add(1)

class MyClass{}
interface MyInterface{}


type State = {
    [key:string]: string
}
class StringDatabase{
    state: State = {}
    get(key:string): string | null{
        return key in this.state ? this.state[key] : null
    }
    set(key:string, value: string): void{
        this.state[key] = value
    }
    static from(state: State){
        let db = new StringDatabase()
        for(let key in state){
            db.set(key, state[key])
        }
        return db
    }
}
let sd = new StringDatabase()
console.log(sd instanceof StringDatabase)


class Harden{
    private age: number
    protected constructor(age: number){
        this.age = age
    }
}
class HardenChild extends Harden{
    constructor(age: number){
        super(age)
    }
}
class HardenSon extends HardenChild{
    constructor(age: number){
        super(age)
    }
}
let harden = new HardenChild(10)

class RequestBuilder {
    protected data: object | null = null
    protected method: 'get' | 'post' | null = null
    protected url: string | null = null
  
    setMethod(method: 'get' | 'post'): RequestBuilderWithData {
      return new RequestBuilderWithData().setMethod(method)
    }
}

class RequestBuilderWithData extends RequestBuilder {
    setMethod(method: 'get' | 'post' | null): this {
      this.method = method
      return this
    }
    setData(data: object | null): RequestBuilderWithDataAndURL {
        return new RequestBuilderWithDataAndURL().setMethod(this.method).setData(data)
    }
}
  
class RequestBuilderWithDataAndURL extends RequestBuilderWithData {
    setURL(url: string): this {
      this.url = url
      return this
    }
    send() {
      // ...
    }
  }
  
  new RequestBuilder()
        .setMethod('get')
        .setData({})
        .setURL('')
        .send()