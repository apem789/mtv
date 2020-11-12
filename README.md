# mtv
+ 技术栈: vue3.0 + vue-router4.0 + vuex4.0 + typescript
+ ui: vant3.0.0 


## 拉取项目（master）
```
git clone https://github.com/apem789/mtv.git
```


### 安装和本地运行
```
cd mtv
yarn && yarn serve
```


### 打包
```
yarn build
```


### Lints and fixes files
```
yarn lint --fix
```


### 记录: vue-router 4.0.0 做404页面的改动
```
// 原以为: vue-router 4.0.0 匹配 404 写法有bug
// bug: vue-router.esm-browser.js?954b:1022 Uncaught Error: Route "*" should be "/*".
// 提示使用: path: '/*' 但是这样缺无法拦截不存在的路由,不会跳到404页面
// 以下旧的写法是错误的
{
  path: '*',
  component: () => import('@/views/404/index.vue'),
}

已解决：
// vue-router 4.0.0 新版本做404处理的通配符号改变了
// 可以在404页面收集 pathMath 用户输入的不存在路由记录
{
  path: '/:pathMath(.*)*',
  component: () => import('@/views/404/index.vue'),
}
```
