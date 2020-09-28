# mtv
+ 
+ 
+

## 拉取项目
```
git 
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 记录: vue-router 4.0.0 不明确的bug
```
// 匹配 404 页面时bug
// bug: vue-router.esm-browser.js?954b:1022 Uncaught Error: Route "*" should be "/*".
// 提示使用: path: '/*' 但是这样缺无法拦截不存在的路由,不会跳到404页面
{
  path: '*',
  component: () => import('@/views/404/index.vue'),
}
```
