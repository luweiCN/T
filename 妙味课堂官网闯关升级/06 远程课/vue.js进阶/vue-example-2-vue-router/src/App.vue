<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="index" tag="li" event="mouseover" exact>
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <router-link :to="{path: '/document'}" tag="li" event="mouseover" activeClass="activeClass">
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
    <!--<router-view name="slider"></router-view>-->

    <input type="button" value="后退" @click="backHandle"/>
    <input type="button" value="前进" @click="forwardHandle"/>
    <input type="button" value="控制前进后退的步数" @click="goHandle"/>
    <input type="button" value="控制指定的导航：push" @click="pushHandle"/>
    <input type="button" value="控制指定的导航：replace" @click="replaceHandle"/>

    <transition  :name='names'>
      <router-view class="center"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route (to, from) {
      if (to.meta.index < from.meta.index) {
        this.names = 'left'
      } else {
        this.names = 'right'
      }
    }
  },
  data () {
    return {
      index: '/',
      names: 'left'
    }
  },
  methods: {
    backHandle () {
      this.$router.back()
    },
    forwardHandle () {
      this.$router.forward()
    },
    goHandle () {
      this.$router.go(-2)
//      this.$router.go(2)
//      this.$router.go(200)
//      this.$router.go(-200)
//      this.$router.go(-0)
    },
    pushHandle () {
//      this.$router.push('/document')
      this.$router.push({path: '/document'})
    },
    replaceHandle () {
      this.$router.replace({path: '/document'})
    }
  }
}
</script>

<style>
  .v-enter{
    opacity: 0;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-enter-active{
    transition: 1s;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-leave-active{
    transition: 1s;
  }

  .left-enter{
    transform: translateX(100%);
  }
  .left-enter-active, .left-leave-active{
    transition: 1s;
  }
  .left-leave-to{
    transform: translateX(-100%);
  }

  .right-enter{
    transform: translateX(-100%);
  }
  .right-enter-active, .right-leave-active{
    transition: 1s;
  }
  .right-leave-to{
    transform: translateX(100%);
  }
</style>
