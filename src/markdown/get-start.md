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