<!--模版template类-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view><!--路由匹的配路径加载的视图-->
  </div>
</template>

<!--逻辑script-->
<script>
// 要使用这个组件需要把他导出
export default {
  name: 'app' // 定义当前组件的名称
}
</script>

<!--样式style-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
