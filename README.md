# 介绍

Moon UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库是我在学习Vue3时写的，全程亲手编写，尽量不采用第三方库。

此库仅限学习使用，不建议用于生产环境。

源代码放在了 [Github](https://github.com/Amayw/MoonUI3) ，历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例。

### ✨ 特性

🌈 基于 Vue 3 开发的UI库。

🛡 使用 TypeScript 开发。

⚙ 代码简洁可读性好上手快。

🎨 高质量 Vue 组件。

# 安装

打开终端运行下列命令：

### npm安装
```
npm install Moon-ui
```

或

### yarn安装
```
yarn add Moon-ui
```

# 开始使用
请先安装本组件库，具体安装方法见上一节。

然后在你的代码中添加如下代码，引用组件。

```
import {Button, Tabs, Switch, Dialog} from "Moon-ui"
```

接下来就可以使用Moon-ui啦。

### Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>

<script>
 import {Button, Tabs, Switch, Dialog} from "Moon-ui"
 export default {
   components: {Button}
 }
</script>
```


## 运行步骤

1. 运行 yarn
2. 运行 yarn dev
