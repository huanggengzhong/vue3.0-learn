### vue3.0 学习项目

#### 知识点

setup 函数:可以替代 vue2.0 中的 data 和 method 属性,在 setup 函数中返回 data 和 method 就可以;
ref 函数:template 中使用的变量(函数不需要)必须要用 ref 包装一下;
reactive 函数:取值和设值不需要 value 属性,返回也不用一个个返回,直接将整个变量返回即可,它是对 ref 的一种优化;(在 ref 相对而言,个人倾向于 reactive 这种写法)
toRefs 函数:解决 template 要写多余的 data 问题

生命周期对比:

```js
Vue2--------------vue3
beforeCreate  -> setup()
created       -> setup()
beforeMount   -> onBeforeMount
mounted       -> onMounted
beforeUpdate  -> onBeforeUpdate
updated       -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed     -> onUnmounted
activated     -> onActivated
deactivated   -> onDeactivated
errorCaptured -> onErrorCaptured
```

总结发现:setup()这两个代替了 beforeCreated 和 created;同时用 unMounted 代替了 destroyed.
