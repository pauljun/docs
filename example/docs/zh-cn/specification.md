# seemmo

------

> **该项目为内部框架升级的基础框架，旨在不改变原有习惯的情况下，进行框架升级，并模块化各基本组件**

## 项目基本情况介绍

* 项目主体由vue-cli3.0脚手架搭建
* 采用vue + element + vue-router + axios等相关基本库构成
* 项目中尽量采用es6的语法糖作为编写手段
* 项目有严格的eslint检查规范，请在提交之前进行严格的检查，不要放过任何一个警告

## 项目准备和启动

### 1. 拉取代码

```shell
git clone git@192.168.2.3:wuzhe/video_structure_vue.git
```

### 2.进入目录安装相关依赖

```shell
cd *dir*
npm install( 如果安装有cnpm建议使用cnpm )
```

### 3.启动开发环境

```shell
npm run start 或 npm run serve
* 开发环境为热部署环境，无需关闭重启窗口，改动将热部署对应窗口
* 本地开发接口代理设置和本地开发端口设置均在vue.config.js中
```

### 4.打包编译发布项目

```shell
npm run build
* 建议交由指定人员进行，对于已经可以部署到现场的项目建议去掉map文件，加快性能
```

### 其余的一些功能

```shell
* 根据eslint相关规则检查项目代码，并修改部分可以自动修复的功能，不能修改的部分将显示在控制台
npm run lint
```

## 项目基本结构

```
│  package-lock.json
│  package.json				依赖等相关配置文件
│  .eslintrc.js					eslint检查规则，项目统一
│  vue.config.js				vue项目相关配置文件
├─dis						项目打包成品目录
├─public						项目依赖的静态不编译资源，该文件夹资源不会进过webpack打包
│      favicon.ico
│      index.html				整个项目的index.html页面，文件中<%= BASE_URL %> 将会打包转义成项目根目录
└─src						源码目录
    │  App.vue					项目根vue
    │  main.js					项目入口js
    │  router.js					项目路由
    │  store.js					vuex文件，暂未使用
    ├─assets					项目中使用的资源，建议将图标等放在此处，可有效防止404的现象
    │      logo.png
    │      ......
    ├─common					公共使用相关文件 todo
    │      tools.js
    ├─components				公共使用组件	内部结构todo
    │      menu.vue
    └─views					分模块的页面vue，即component中根据设计的合计界面
           login.vue
           ......
```



## 注意事项

* 通过main.js中的设置项目中已经将**tools模块**放到**this.tools**属性下
* 通过main.js中的设置项目中已经将**service模块**放到**this._services**属性下
* 无论首页或者模块，建议与初始化展示不相关的文件、模块均使用赖加载的形式加载到项目中
* @ 符号在项目中可以直接指向src目录，即 @/main.js = src/main.js 该方法可以方便的在目录层级深的时候找到文件
* 文件结构也是编写代码的一部分，文件架构上也希望能够有所层级区分

## TODO

- [ ] 完善项目结构，最佳适合和方便的功能
- [ ] 针对代码文档结构和项目编码出一套项目规范
- [x] 结合gitlab 完成master分支的自动化编译过程，方便前端开发的打包和测试



## 代码规范

遵循eslint验证方式，支持以下写法，欢迎补充:

- 不建议使用双"", 双引号统一改成单引号
- 制表符长度使用 tab 默认为4个
- 建议使用vscode进行开发，进行统一格式化验证
- 尽量解决控制台警告报错信息
- 单个组件代码量控制在300行以内，特殊表单，工具类库代码量可不做强制要求
- 所有组件props传值，如果props只有一个值，一行也写完，如果props超过一个值，请换行写，方便代码审阅, 如下图：

```
# 单个props值
<el-row class='h-100'>

# 多个props值
<el-form
    class='plr-10 form-full-style h-left-condition'
    ref='form'
    :model='vidParam'
    label-width='80px'
    label-position='left'
    :rules='rules'
    hide-required-asterisk
>
```

- 单个组件尽量写注释，每个组件头部建议备注开发者姓名以及开始时间和代码更新时间， 方法统一使用注释，写出方法参数备注。

  ``` 
  # 头部注释
  <!--
  	@title 人像布控
  	@author wwj
  	@time 2019-3-15 10:58
  	@desc 人像布控管理
  	@modify 2019-3-15 10:58 by xxxx
  -->
  
  # data注释
    data() {
      return {
        // vid提交数据
        vidParam: {
          type: 'add',				//add:添加 edit: 编辑 
          taskName: '',				//任务名称
        }
      }
    }
    
  # 方法注释
  /**
   * @desc 获取循环模式
   * @param {String} code 关键字
  */
  getadTimeType(code) {
      
  }
  
  ```


## END

> 如果有任何希望或者建议，请联系金功学、金韬、吕威等，或者直接写到下方
