<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="index" tag="li" event="mouseover" exact>
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <router-link :to="{path: '/document#abc'}" tag="li" event="mouseover" activeClass="activeClass">
          <i class="fa fa-book"></i>
          <span>document</span>
        </router-link>
        <router-link to="/about" tag="li" event="mouseover">
          <i class="fa fa-glass"></i>
          <span>about</span>
        </router-link>
        <router-link to="/user" tag="li" event="mouseover">
          <i class="fa fa-glass"></i>
          <span>user</span>
        </router-link>
      </ul>
    </div>
    <router-view name="slider"></router-view>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/'
    }
  }
}
</script>

<style>

</style>
