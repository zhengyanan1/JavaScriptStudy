/**
 * 1. webpack 加载webpack.config.js中所有配置，此时就会new TestPlugin,执行插件的constructor
 * 2. webpack创建 compiler 对象
 * 3. 遍历所有plugins插件，调用插件的apply方法
 * 4. 执行剩下的编译流程（触发各个hooks事件）
 */
class TestPlugin{

    constructor(){
        console.log("TestPlugin constructor ")
    }

    apply(compiler){
        console.log("TestPlugin apply")
        // 由文档可知，environment是同步钩子，所以需要使用tap注册...
        compiler.hooks.environment.tap('TestPlugin', () => {
            console.log("TestPlugin---environment")
        });

        // emit 是异步串行钩子
        compiler.hooks.emit.tap("TestPlugin", (compilation) =>{
            console.log("TestPlugin emit 111")
        });

        compiler.hooks.emit.tapAsync("TestPlugin", (compilation, callback) =>{
            setTimeout(()=>{
                console.log("TestPlugin emit 222")
                callback()
            }, 2000)
        });

        compiler.hooks.emit.tapPromise("TestPlugin", (compilation)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    console.log("TestPlugin emit 333")
                    resolve()
                }, 1000)
            })
        })

        // 异步并行钩子
        compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback)=>{
            compilation.hooks.seal.tap("TestPlugin", ()=>{
                console.log("TestPlugin seal")
            })
            
            setTimeout(()=>{
                console.log("TestPlugin make 111")
                callback()
            }, 3000)
        })
        compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback)=>{
            setTimeout(()=>{
                console.log("TestPlugin make 222")
                callback()
            }, 2000)
        })
        compiler.hooks.make.tapAsync("TestPlugin", (compilation, callback)=>{
            setTimeout(()=>{
                console.log("TestPlugin make 333")
                callback()
            }, 1000)
        })
    }
}

module.exports = TestPlugin