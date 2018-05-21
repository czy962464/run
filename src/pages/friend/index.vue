<template>
  <div class="friend-index">
    <friend-header></friend-header>
    <friend-container 
      :friend='friend' 
      @delete='handleDeleteFriend' 
      v-show="delet"
    ></friend-container>
    <div class="addfriend" @click='handleAdd' v-show='addbtn'>添加好友</div>
    <friend-add @add='handleAddFriend' :nofriend='nofriend' v-show='add'></friend-add>
    <div class="addfriend" @click='handleBack' v-show='backbtn'>返回</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import FriendHeader from './header.vue'
  import FriendContainer from './container.vue'
  import FriendAdd from './add.vue'
  export default {
    name: 'friend-index',
    components: {
      FriendHeader,
      FriendContainer,
      FriendAdd
    },
    data () {
      return {
        friend: [],
        nofriend: [],
        delet: true,
        add: false,
        addbtn: true,
        backbtn: false
      }
    },
    watch : {
      change () {
        this.getFriendList()
      }
    },
    methods: {
      getFriendList () {
        axios.get('/api/friend/list?userid=' + this.getCookie())
           .then(this.handleSuccessList.bind(this))
           .catch(this.handleErrorList.bind(this))
      },
      handleAdd () {
        this.delet = false
        this.addbtn = false
        this.add = true
        this.backbtn = true
        this.getAddFriendList()
      },
      handleBack () {
        this.delet = true
        this.add = false
        this.addbtn = true
        this.backbtn = false
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
      getAddFriendList () {
        axios.get('/api/friend/nolist?userid=' + this.getCookie())
          .then(this.handleSuccessNoList.bind(this))
          .catch(this.handleErrorNoList.bind(this))
      },
      handleSuccessNoList (res) {
        console.log(res)
        res = (res.data) ? res.data : null
        if (res) {
          this.nofriend = res.data.nofriend
        }
      },
      handleErrorNoList () {
        console.log('error')
      },
      handleAddFriend (username) {
        axios.post('/api/friend/add', {
          username: username,
          userid: this.getCookie()
        })
        .then(this.handleSuccessAdd.bind(this))
        .catch(this.handleErrorAdd.bind(this))
      },
      handleSuccessAdd (res) {
        res = (res.data) ? res.data : null
        if (res && res.data.add) {
          this.$router.go({path: './friend'})
        }
      },
      handleErrorAdd () {
        console.log('error')
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
  .addfriend{
    height: .8rem;
    width: 3rem;
    border-radius: 5px;
    background: #42c69a;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    margin: .5rem auto;
  }
</style>