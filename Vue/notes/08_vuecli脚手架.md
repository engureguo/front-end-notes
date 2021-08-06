

# Prepare (2.x版本 vue-cli已过时)

1. npm install -g vue-cli

2. vue -V (2.x版本,最新是 3.x版本)

3. vue-cli init webpack simple-site(不能有大写字母)



vue-cli官方: https://github.com/vuejs/vue-cli/tree/v2#vue-cli--



# Start



## 添加一个组件



1.创建组件 components/User.vue

⭐细节:div的id属性和下边的name属性相同

```html

<template>

  <div id="User">

  {{ msg }}

 </div>

</template>



<script>

export default {

  name: "User",

  data() {

    return {

      msg: "this is user page."

    }

  }

}

```

2.添加路由 router/index.js

```js

import User from '@/components/User'  *// 需要导入!*

Vue.use(Router)



export default new Router({

  routes: [{

​      path: '/',

​      name: 'HelloWorld',

​      component: HelloWorld

​    },

​    {

​      path: '/user',

​      name: 'User',

​      component: User

​    }

  ]

})

```

3.修改主页

⭐细节:使用router-link的to属性进行跳转

```html

<template>

  <div id="app">

    <img src="./assets/logo.png">

  <br>

  <router-link to="/">首页</router-link>

  <router-link to="/user">User</router-link>

  <hr>

  <router-view/>

 </div>

</template>

```



## 使用 axios 异步请求



1.安装包

npm install axios --save



2.导入

在 src/main.js 下, 导入并设置为全局可用

```js

import axios from 'axios'



Vue.use(axios)

Vue.prototype.$axios = axios; *// prototype.$xxx = yyy, this.$xxx.aaa*

```



3.使用

```js

export default {

  name: "User",

  data() {

​    return {

​      msg: "this is user page."

​    }

  },

  created() {

​    this.$axios.get("http://localhost:8080/api/getdata")

​      .then(resp => {

​        console.log(resp)

​      })

  }

}

```



4.配置跨域问题

在 config/index.js 下

```js

proxyTable: {

  '/api': {

​    target: 'http://127.0.0.1:8081/',

​    changeOrigin: true, *//如果需要跨域*

​    pathRewrite: {

​      '^/api': '/'

​        */*这里理解成用面的地址，后面组件中我们掉接口时直接用api代替* 

​        *比如我要调用 'http://425.0.100.100:8888/user/add'，*

​        *直接写 ^/api/user/add 即可*/*

​    }

  }

},

```





# 3.x 版本的 Vue 脚手架



@vue/cli新版本: https://cli.vuejs.org/zh/guide/

支持使用旧版的 vue-cli 创建项目



- `vue ui` 使用可视化界面创建运行项目

- 配置启动端口号和自动打开浏览器

****旧版本****

在 config/index.js 中配置

****新版本****

```json

"vue": {

  "devServer": {

​    port: 8888,

​    open: true

  }

}

```



# 使用 element-ui

官网:https://element.eleme.cn/#/zh-CN



1. 安装 `npm i element-ui -S`

2. 导入

```js

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

```

