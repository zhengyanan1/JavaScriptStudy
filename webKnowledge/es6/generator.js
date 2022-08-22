let asyncSum = function(a, b) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(a + b)
      }, 1000)
    })
  }
  ​
  let g = function* () {
    let ret = yield asyncSum(1, 2)
    console.log(ret)
    return ret
  }
  ​
  let iter = g()
  ​
  let p = iter.next().value
  p.then(sum => {
    iter.next(sum)
  })