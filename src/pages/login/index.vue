<template>
  <div class="index">
    <login-header></login-header>
    <login v-show="showLogin" 
          @toRegister='handleToRegister'
          :showRegister='showRegister'
          :showLogin='showLogin'>
    </login>
    <register v-show="showRegister" 
              @toLogin='handleToLogin'
              :showRegister='showRegister'
              :showLogin='showLogin'>
    </register>
  </div>
</template>

<script>
  import LoginHeader from './header.vue'
  import Login from './login.vue'
  import Register from './register.vue'
  export default{
    data () {
      return {
        showLogin: true,
        showRegister: false
      }
    },
    components: {
      LoginHeader,
      Login,
      Register
    },
    methods: {
      handleToRegister () {
        this.showLogin = false
        this.showRegister = true
      },
      handleToLogin () {
        this.showLogin = true
        this.showRegister = false
      }
    }
  }
</script>

<style>
  .index{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .login-wrap{
    text-align:center;
  }
  .register-wrap{
    text-align:center;
  }
  .logo{
    padding: 1.2rem 0;
  }
  .title{
    color: #2c3e50;
    font-size: .36rem;
    font-weight: bold;
    line-height: .36rem;
    margin-bottom: .4rem;
  }
  .txt{
    width: 5rem;
    height: .4rem;
    line-height: .4rem;
    margin:0 auto;
    margin-bottom: .2rem;
    outline:none;
    padding: .2rem;
    border:1px solid #888;
  }
  .btn{
    display: block;
    width: 5.4rem;
    height: .8rem;
    line-height: .8rem;
    border:none; 
    background-color:#41b883; 
    color:#fff; 
    font-size: .32rem; 
    margin:0 auto .1rem;
  }
  .log-reg{cursor:pointer;}
  .log-reg:hover{color:#41b883;}
</style>
