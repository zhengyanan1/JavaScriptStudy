module.exports = {
    extends: ["eslint:recommended"],
    env: {
        node: true,
        browser: true
    }, 
    parserOptions:{
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules:{
        "no-var": 2, //不能使用var定义变量
    },
    plugins: ['import']// 解决动态导入语法
}