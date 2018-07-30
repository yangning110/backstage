# vue-eshop introduction

全新的eshop project开发环境,使用了 Vue.js 数据驱动视图的MVVM模式框架，具有体积小，轻量级，模块友好，轻量无依赖的特点。很好的解决了前后端分离，组件化开发，单向数据绑定，无需手动管理DOM的等问题，配合 webpack + vue-router + vue-resource + vuex + ES6 可轻松构建可维护性良好的高质量Web项目。

# 技术栈
 webpack + vue + vue-router + vue-resource + vuex + es6
## 构建环境

环境搭建
====
####Code准备工作：

#####1.安装 [NodeJS](http://nodejs.cn/).

>我们只是需要NPM为我们管理JS库的依赖，所以选择4.4.4稳定版本即可。
>
>安装完成后通过终端输入或者命令行输入：`node -v`、`npm -v` 查看安装版本确认有无安装成功。
>倘若提示错误信息，命令不存在，则需要修改环境变量，将bin目录加入到path中，具体google一下。

#####2.通过Git拉取Vue-project代码.

#####3.安装依赖JS库和UI库.

>命令行进入项目所在文件夹 `cd /***/Vue-project`。
>
>执行命令：`npm install` 安装项目所需依赖的JS库。
>
>具体所安装的依赖库可查询项目根目录下的package.json中devDependencies中配置项，最后几条已经加入vue-router、vue-resource、vuex。

#####4.启动开发模式下的项目.

>`npm run dev`。

####IDE开发工具：
>推荐使用Sublime Text

#####1.安装 [Sublime](http://www.sublimetext.com/3).
#####2.插件配置说明
>依照[Sublime插件安装](https://www.talkingcoder.com/article/6280746799721152776)开启package control
>
>安装下面两个Vue插件
>
>Vuejs Snippets
>
>Vue Syntax Highlight


``` bash
# 安装依赖
npm install

#开启本地开发服务器，监控项目文件的变化，实时构建并自动刷新浏览器，访问 http://localhost:8080
#开发过程中 CSS 直接内联 < style > 以实现热更替，生产环境下会使用 ExtractTextPlugin 分离打包
npm run dev

#使用生产环境配置构建项目，构建好的文件会输出到 "dist" 目录，
npm run build

#运行单元测试
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 目录结构

    .
    ├── README.md
    ├── build                   // webpack 构建脚本目录
    │   ├── build-server.js                 运行本地构建服务器，可以访问构建后的页面
    │   ├── build.js                        生产环境构建脚本
    │   ├── dev-client.js                   开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
    │   ├── dev-server.js                   运行本地开发服务器
    │   ├── utils.js                        构建相关工具方法
    │   ├── webpack.base.conf.js            wabpack基础配置
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置
    ├── config                   // 环境变量和入口，出口配置
    │   ├── dev.env.js                      开发环境变量
    │   ├── index.js                        项目配置文件
    │   ├── prod.env.js                     生产环境变量
    │   └── test.env.js                     测试环境变量
    ├── dist                     // 项目build目录(公共模块单独打包已经功能实现)
    ├── node_modules             // 项目依赖包目录
    ├── src                      // 生产目录
    │   ├── assets               // CSS JS 和 图片资源
    │   ├── data                 // 数据文件
    │   ├── components           // 公共组件
    │   ├── views                // 页面目录 （根据模块归纳页面组件，不要都平铺在 `src/views` 下）
    │   ├──  module1  // 模块1
    │   │  └───    page1        页面文件夹
    │   │      ├── images       组件1的静态资源
    │   │      └── # template/style/script
    │   │      └── page1.vue    页面
    │   ├── directives           // 各种指令
    │   ├── filters.js           // 各种过滤器
    │   ├── router.js            // 前端路由配置
    │   └── App.vue              // 根组件
    │   └── main.js              // Webpack 预编译入口
    ├── index.html               // 项目HTML入口文件
    ├── static                   // 纯静态资源，放置高度静态但不经由 Webpack 处理的文件 e.g. jQuery ，或NPM没有的包。
    ├── package.json             // npm包配置文件，里面定义了项目的npm脚本，依赖包等配置信息
    ├── .babelrc                 // Babel 转码配置
    ├── .eslintignore            //（配置）ESLint 检查中需忽略的文件（夹）
    ├── .eslintrc                // ESLint 配置
    ├── .gitignore               //（配置）需被 Git 忽略的文件（夹）
    └── test                     // 测试文件目录（unit&e2e）
        └── unit                       单元测试
            ├── index.js               入口脚本
            ├── karma.conf.js          karma配置文件
            └── specs                  单测case目录
                └── Hello.spec.js

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 注意事项

    静态资源按模块区别，放在自己页面模块下，全局通用的放在assets，方便静态资源的管理


## 开发规范

    编码代码需要遵循的规范，开发过程采用 [**ESLint**](http://eslint.org/) 进行 code view，配置在项目根目录下的 `.eslintrc`。


# 使用之前
    使用最新ES2015语法，具体如下：
    正确使用const和let替代var
    使用模板字符串`${this.data}`
    将工具函数等依赖单独分离，并用import导入
    对象字面量缩写、箭头函数
    通用工具集可以在src/utils/assist内扩展
    尽量在test/routers内测试组件
# 组件
    命名
          * JS 中：
          * 组件：`Navbar`、`MsgList` 
          * 普通变量：`home`、`myCat`、`bookList`
          * 普通函数：`getMoney`、`handleSubmit`
          * 布尔值变量：`isLogin`、`hasMoney`
          * 私有变量：`_privateVar`
          * 全局变量、事件：`CONSTANT` (一般为单数)、`MY_CAT`、`LOG_IN`
          * 类（需要实例化的）：`MyStuff`、`Person`

    尽量简单、表意。
    export出的对象使用驼峰命名，比如Page、ButtonGroup
    如组件需要嵌套使用，子组件命名在父组件后加-item，比如timeline及timeline-item

# 目录
    组件在目录src/components/下，每个组件单独一个目录，目录命名使用小写，入口文件为index.js，
    导出组件，再由根入口文件src/index.js暴露给使用者
    每个组件的文件名使用小写，但与组件的名称一致，比如timeline.vue和timeline-item.vue

# 属性
    必须规定type或者使用validator进行验证
    如果validator验证为几个值中的一个，则使用src/utils/assist内的oneOf函数验证
    如果有尺寸的参数size，只能使用smalllarge，默认是适中，则不用写

# 事件
    命名
    使用on-为前缀，比如on-change
    规范
    使用$emit来对外触发事件，而不用$dispatch和$broadcast
    嵌套组件之间通信，使用$parent和$children，而不用$emit，避免使用者错误使用自定义事件

# 其它

    * 最小化引入 框架 / 类库
    ```javascript
    import _ from 'lodash'               // 恭喜您，您成功地引入了 lodash 全家桶，打包文件徒增几十KB
    import isEmpty from 'lodash/isEmpty' // Great!
    ```

    * HTML 模板中，较长的内容，请注释闭标签：
    ```html
    <div class="container">
      ...
    </div><!-- /.container -->

    * css命名不要太通用，比如.column , 自己页面上的不要写到全局作用域, 可以使用 scoped
    ```css```
        <!-- Add "scoped" attribute to limit CSS to this component only -->
        < style scoped>
        h1, h2 {
          font-weight: normal;
        }
    ```


## 拓展

本项目所用的构建环境使用Vue官方提供的 [vue-cli](https://github.com/vuejs/vue-cli) 进行构建,如果你想开发一个Vue的新项目可以这样做。

下面是使用方法：

``` bash
# 安装vue-cli （ 安装vue-cli之前，需要先安装了node, vue和webpack ）
npm install -g vue-cli

# 使用vue-cli初始化项目 开发工具使用 webpack, 还支持browserify
vue init webpack my-project

# 进入到目录
cd my-project

# 安装依赖
npm install

# 开始运行
npm run dev

# 生产环境，打包项目，会自动生成dist文件
npm run bulid
```
## 说明

上面的前两个命令会从vuejs-templates拉取模板并安装，然后用NPM安装依赖，最后只需要你用NPM 脚本启动就能开始开发了。

如果后期业务需要添加新的npm模块，注意安装时候的后缀：

--save 会把依赖包名称添加到 package.json 文件 dependencies 键下；

--save-dev 则添加到 package.json 文件 devDependencies 键下：

devDependencies 下列出的模块，是我们开发时用的，比如 grunt-contrib-uglify，我们用它混淆 js 文件，它们不会被部署到生产环境。
dependencies 下的模块，则是生产环境中需要的依赖，应使用 --save 。

如果init选择了eslint功能，则需要注意以下几点：

        1. 函数名字与括号之间要有空格

        2. 不要使用双引号

        3. 不要有多余的空行

        4.函数参数的逗号后要有空格

        5.每个结束语句以后不用加(;)“分号”

## 文档资料
1. [Vue-2.0](http://vuefe.cn/guide/).
2. [Vue-Router-2.0](http://vuefe.cn/vue-router/).
3. [Vue-Vuex-2.0](http://vuefe.cn/vuex/).
4. [UI-Element](http://element.eleme.io/#/).
5. [Vue-Resource](https://github.com/vuejs/vue-resource).


##10.21添加 vue-i18n 支持国际化配置
参考资料 [vue-i18n](https://kazupon.github.io/vue-i18n/).
