# vue-history-mode

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 注意事项
1. 配置路由时, 保证路由以.html结尾
2. 路由名前缀要与`views`里的页面名前缀一致, 因为打包的时候是读取的`views`里的文件名来生成页面, 如果路由名不能一致, 就会导致页面跳转时路由不匹配
3. 适用于路由页面不多的项目, 否则会浪费用户资源
