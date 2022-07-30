

module.exports = function(content){


    /**
     * 1. 直接使用我们定义的style-loader，只能处理样式
     * 不能处理样式中引入的其他资源
     * 
     * 2. 借助css-loader帮助解决样式中引入其他资源的问题
     * 问题是：css-loader暴露了一段js代码，style-loader代码需要先执行js代码，得到返回值，再动态创建style标签，插入到页面上
     * 
     * 3. style-loader使用pitch loader用法
     */
    // const script = `
    //     const styleEl = document.createElement('style');
    //     styleEl.innerHTML = ${JSON.stringify(content)};
    //     document.head.appendChild(styleEl)
    // `;

    // return script
}  

module.exports.pitch = function(remainingRequest){
    // remainingRequest 剩下的还需要处理的loader
    // console.log("remaining:===", remainingRequest) 
    ///Users/zhengyanan/Desktop/study/JavaScriptStudy/webpack5/Loaders/SOURCE/node_modules/css-loader/dist/cjs.js!/Users/zhengyanan/Desktop/study/JavaScriptStudy/webpack5/Loaders/SOURCE/src/css/index.css

    // 1.将remaingRequest 中的绝对路径改成相对路径（因为后面只能使用相对路径操作）  
    // 希望 Users/zhengyanan/Desktop/study/JavaScriptStudy/webpack5/Loaders/SOURCE/node_modules/css-loader/dist/cjs.js!/Users/zhengyanan/Desktop/study/JavaScriptStudy/webpack5/Loaders/SOURCE/src/css/index.css
    // 变成 ../../node_modules/css-loader/dist/cjs.js!../../src/css/index.css   
    const relativePath = remainingRequest.split("!").map(absPath => {
        // 返回相对路径
        return this.utils.contextify(this.context, absPath)
    }).join("!")
    // ../../node_modules/css-loader/dist/cjs.js!./index.css
    // console.log("relativePath:===", relativePath) 

    // 2. 引入css-loader处理后的资源
    // 3.创建style，将内容插入页面中生效
    const script = `
        import style from "!!${relativePath}"
        const styleEl = document.createElement('style');
        styleEl.innerHTML = style
        document.head.appendChild(styleEl)  
    `;

    // 终止后面的loader执行
    return script
}