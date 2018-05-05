<template>
  <div class="friend-index">
    <friend-header></friend-header>
    <friend-container :friend='friend' @delete='handleDeleteFriend'></friend-container>
  </div>
</template>

<script>
  import axios from 'axios'
  import FriendHeader from './header.vue'
  import FriendContainer from './container.vue'
  export default {
    name: 'friend-index',
    components: {
      FriendHeader,
      FriendContainer
    },
    data () {
      return {
        friend: []
      }
    },
    methods: {
      getFriendList () {
        axios.get('/api/friend/list?userid=' + this.getCookie())
           .then(this.handleSuccessList.bind(this))
           .catch(this.handleErrorList.bind(this))
      },
      handleSuccessList (res) {
        res = (res.data) ? res.data : null
        if (res) {
          this.friend = res.data.friend
        }
      },
      handleErrorList () {
        console.log('error')
      },
      handleDeleteFriend (username) {
        axios.post('/api/friend/delete', {
          username: username,
          userid: this.getCookie()
        })
        .then(this.handleSuccessDelete.bind(this))
        .catch(this.handleErrorDelete.bind(this))
      },
      handleSuccessDelete (res) {
        res = (res.data) ? res.data : null
        if (res && res.data.delete) {
          this.$router.go({path: './friend'})
        }
      },
      handleErrorDelete () {
        console.log('error')
      },
      getCookie () {
        var strcookie = document.cookie
        var arrcookie = strcookie.split(';')
        var arr = []
        for (var i = 0; i < arrcookie.length; i++) {
          arr = arrcookie[i].split('=')
          if (arr[0] === 'userid') {
            return arr[1]
          } else {
            return false
          }
        }
      }
    },
    created () {
      this.getFriendList()
    }
  }
</script>

<style scoped>
</style>