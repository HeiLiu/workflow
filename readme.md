## 前端工作流    

> 前端工作的开发流程

- babel js预编译器   将 js 通过语法转换器支持最新版本的 JavaScript  

> Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本  从源码到源码的编译

使用最新的js语法来编写，运行的代码可以根据需求编译成相应的版本  

babel 编译js  
`source_code` `.babelrc` `cli` `targets`(运行平台)
`presets`(预处理集)  
`babel`的预处理只是语法糖， `class`没有  
只会把`es5`里面没有`es6`的语法实现一遍，最基本的`const`在babel-core  
还有一些没有的 如：Obejct.assign() promise  
`plugins`
- npm 工作流管理  
添加scripts  
"test": "npm-run-all --parallel lint:js mocha"  
```
项目构建的基本流程
    npm run dev
    npm install
```  
- postcss  
    解决前缀问题, 使用 css 变量  

- stylus/ scss / less