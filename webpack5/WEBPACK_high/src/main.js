import count from "./js/count";
import sum from "./js/sum";

import "./css/iconfont.css"
import "./css/index.css"
import "./less/index.less"
import "./sass/index.sass"
import "./sass/index.scss"
import "./stylus/index.styl"

console.log(count(1, 23))
console.log(sum(1, 2, 3, 4, 5, 6))


if(module.hot){
    // 判断是否支持热模块替换
    module.hot.accept("./js/count")
    module.hot.accept("./js/sum")
}