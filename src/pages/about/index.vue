<template>
  <div class="index">
    <before-login v-show='!isLogin'></before-login>
    <about-header @change='handleChangeInfo' :userinfo='userinfo' v-show='isLogin ? isShow : isLogin'></about-header>
    <container :userinfo='userinfo' v-show='isLogin ? isShow : isLogin' ref='contain'></container>
    <editor :userinfo='userinfo' v-show='!isShow' @change='handleChangeSaveInfo'></editor>
    <bottom></bottom> 
  </div>
</template>

<script>
  import axios from 'axios'
  import Bottom from 'components/common/bottom.vue'
  import Container from './container.vue'
  import Editor from './editor.vue'
  import AboutHeader from './header.vue'
  import BeforeLogin from './beforeLogin.vue'
  export default {
    name: 'running',
    components: {
      Bottom,
      Container,
      AboutHeader,
      Editor,
      BeforeLogin
    },
    data () {
      return {
        userinfo: {},
        isShow: true,
        isLogin: false,
        newHome: '',
        newEmotional: ''
      }
    },
    activated () {
      console.log(123)
      if (this.getCookie()) {
        this.isLogin = true
        this.getUserInfoData()
      } else {
        this.isLogin = false
      }
    },
    methods: {
      getUserInfoData () {
        axios.post('/api/user/user_info', {
          userid: this.getCookie()
        })
        .then(this.handleUserInfoSucc.bind(this))
        .catch(this.handleUserInfoErr.bind(this))
      },
      handleUserInfoSucc (res) {
        res = (res.data) ? res.data : null
        if (res) {
          this.userinfo = res.data.userInfo
        }
      },
      handleUserInfoErr () {
        console.log('error')
      },
      handleChangeInfo () {
        this.isShow = false
      },
      handleChangeSaveInfo (nickname, signature, home, emotional) {
        axios.post('/api/user/update', {
          userid: this.getCookie(),
          nickname: nickname,
          signature: signature,
          home: home,
          emotional: emotional
        })
        .then(this.handleUserInfoSucc.bind(this))
        .catch(this.handleUserInfoErr.bind(this))
        // axios.get('/api/user/update?nickname=' + nickname + '&signature=' + signature + '&home=' + home + '&emotional=' + emotional)
        //       .then(this.handleUserInfoSucc.bind(this))
        //       .catch(this.handleUserInfoErr.bind(this))
        // this.newHome = home
        // this.newEmotional = emotional
        // this.$refs.contain.handleChangeData(this.newHome, this.newEmotional)
        this.isShow = true
      },
      getCookie () {
        var strcookie = document.cookie
        var arr = strcookie.split('=')
        if (arr[0] === 'userid') {
          return arr[1]
        }
      }
    }
  }
</script>

<style scoped>
  .index {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>