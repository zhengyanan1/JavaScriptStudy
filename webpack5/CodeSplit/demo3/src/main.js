import {sum} from "./math"
// import count from "./count"


console.log("hello, main")
console.log(sum(1,2,3))

document.getElementById('btn').onclick = function(){
    // import 动态导入，会将动态导入的文件拆分成单独模块，需要使用时动态导入
    import("./count")
        .then((res)=>{
            console.log("success", res.default(2, 1))
        })
        .catch((err)=>{
            console.log("fail", err)
        })
}