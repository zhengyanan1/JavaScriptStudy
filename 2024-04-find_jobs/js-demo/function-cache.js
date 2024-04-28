const add = function (x,y) {
    return x+y;
}

const memoize = function (func, content) {
    let cache = Object.create(null)
    console.log(this, content);
    content = content || this
    return (...key) => {
      if (!cache[key]) {
        console.log('calculate============');
        cache[key] = func.apply(content, key)
      }
      return cache[key]
    }
  }

const calc = memoize(add);
const num1 = calc(100,200)
console.log(num1)

const num2 = calc(100,200) // 缓存得到的结果
console.log(num2)

// let s = {}
// s[[1,2]] = 8;
// console.log(s[[1,2]]);
