<template>
  <div>
    我是user
    <div class="user-list">
      <router-link style="padding: 0 20px" :to="'/user/' + item.type + '/' + item.id" key="index" v-for="item in userList">{{item.userName}}</router-link>
    </div>
    <div class="user-info" v-if="userInfo.userName" style="font-size: 20px;">
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
  </div>
</template>

<script>
    let data = [
      {
        id: 1,
        type: 'vip',
        userName: 'leo1',
        sex: '男',
        hobby: '写代码'
      },
      {
        id: 2,
        type: 'vip',
        userName: 'leo2',
        sex: '男',
        hobby: '唱歌'
      },
      {
        id: 3,
        type: 'common',
        userName: 'leo3',
        sex: '男',
        hobby: '读书'
      }
    ]

//    /* eslint-disable eqeqeq */
    export default {
      data () {
        return {
          userList: data,
          userInfo: {}
        }
      },
      watch: {
        $route () {
          this.getData()
        }
      },
      created () {
//        console.log(this.$route.params.userId)
        this.getData()
      },
      methods: {
        getData () {
          let id = this.$route.params.userId
          if (id) {
            this.userInfo = this.userList.filter((item) => {
              return Number(item.id) === Number(id)
            })[0]
          } else {
            this.userInfo = {}
          }
        }
      }
    }
</script>

<style>

</style>
