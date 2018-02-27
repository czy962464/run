<template>
  <div class="index">
    <about-header @change='handleChangeInfo'></about-header>
    <container :userinfo='userinfo' v-show='isShow' ref='contain'></container>
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
  export default {
    name: 'running',
    components: {
      Bottom,
      Container,
      AboutHeader,
      Editor
    },
    data () {
      return {
        userinfo: {},
        isShow: true,
        newHome: '',
        newEmotional: ''
      }
    },
    activated () {
      console.log(123)
      this.getUserInfoData()
    },
    methods: {
      getUserInfoData () {
        axios.get('/api/user/user_info')
              .then(this.handleUserInfoSucc.bind(this))
              .catch(this.handleUserInfoErr.bind(this))
      },
      handleUserInfoSucc (res) {
        res = (res.data) ? res.data : null
        if (res) {
          this.userinfo = res.other
        }
      },
      handleUserInfoErr () {
        console.log('error')
      },
      handleChangeInfo () {
        this.isShow = false
      },
      handleChangeSaveInfo (home, emotional) {
        document.cookie = 'id = 123'
        axios.get('/api/user/update?city=' + home + '&nickname=' + emotional)
              .then(this.handleUserInfoSucc.bind(this))
              .catch(this.handleUserInfoErr.bind(this))
        this.newHome = home
        this.newEmotional = emotional
        this.$refs.contain.handleChangeData(this.newHome, this.newEmotional)
        this.isShow = true
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