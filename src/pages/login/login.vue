<template>
  <transition name="fade" mode="out-in">
    <div class="login-wrap">
    	<div class="logo">
    		<img src="../../../static/img/logo.jpg">
    	</div>
      <h3 class="title">账号登录</h3>
      <p>
        <span class="checkphone" v-show="checkphone">请输入正确的手机号！</span>
        <input class="txt" type="text" placeholder="请输入手机号" 
        ref='loginUser' @blur.stop='handleBlur' @focus="handleFocus">
      </p>
      <p >
        <span class="checkpassword" v-show="checkpassword">密码6-12数字/字母/下划线组合！</span>
        <input class="txt" type="password" placeholder="请输入密码" ref='loginPwd' @blur.stop="handlePassword" @focus="handleFocus">
      </p>
      <span class="isNo" v-show="isNo">用户名密码错误</span>
      <button class="btn" @click='login'>登录</button>
      <!-- <button class="btn" @click='loginQQ'>QQ登录</button> -->
      <span class="log-reg" @click='handleToRegister'>没有账号？马上<a class="a-reg">注册</a></span>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  export default{
    data () {
      return {
        username: '',
        password: '',
        checkphone: false,
        checkpassword: false,
        isNo: false,
        phone: false,
        pwd: false
      }
    },
    methods: {
      handleToRegister () {
        this.checkphone = false
        this.checkpassword = false
        this.$emit('toRegister')
      },
      login () {
        if (this.$refs.loginUser.value === '' || this.$refs.loginPwd.value === '') {
          this.checkpassword = true
          this.checkphone = true
        } else {
          // axios.get('/api/userlogin.json')
          //     .then(this.handleUserLoginSucc.bind(this))
          //     .catch(this.handleUserLoginErr.bind(this))
          if (this.handleValidate(this.$refs.loginUser.value)) {
            this.username = this.$refs.loginUser.value
            this.password = this.$refs.loginPwd.value
            if (this.pwd && this.phone) {
              axios.post('/api/user/login', {
                username: this.username,
                password: this.password
              })
              .then(this.handleUserLoginSucc.bind(this))
              .catch(this.handleUserLoginErr.bind(this))
            }
          }
        }
      },
      // loginQQ () {
      //   axios({
      //     type: 'GET',
      //     url: 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=1106851288&redirect_uri=localhost:8080&state=test',
      //     dataType: 'jsonp'
      //   })
      //   .then(this.handleQQLoginSucc.bind(this))
      //   .catch(this.handleQQLoginErr.bind(this))
      // },
      // handleQQLoginSucc (res) {
      //   console.log(res)
      // },
      // handleQQLoginErr () {
      //   console.log('error')
      // },
      handleUserLoginSucc (res) {
        res = (res.data) ? res.data : null
        if (res.data.login && res.data.userInfo.length !== 0 && this.handleValidate(this.$refs.loginUser.value)) {
          document.cookie = 'userid =' + res.data.userInfo[0].id
          this.$router.push('/about')
        } else {
          this.isNo = true
        }
      },
      handleUserLoginErr () {
        console.log('error')
      },
      handleBlur () {
        this.handleValidate(this.$refs.loginUser.value)
      },
      handleValidate (phone) {
        let mobileReg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
        if (!mobileReg.test(phone)) {
          this.checkphone = true
          this.phone = false
          return false
        } else {
          this.phone = true
          this.checkphone = false
          return true
        }
      },
      handlePassword (e) {
        var value = e.target.value
        var passwordReg = /^\w{6,12}$/
        if (!passwordReg.test(value)) {
          this.checkpassword = true
          this.pwd = false
        } else {
          this.checkpassword = false
          this.pwd = true
        }
      },
      handleFocus () {
        this.checkphone = false
        this.checkpassword = false
        this.isNo = false
      }
    }
  }
</script>

<style scoped>
  .login-wrap{
    text-align:center;
    position: absolute;
    top: .88rem;
    bottom: 0;
    width: 100%;
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
    height: .5rem;
    border: none;
    line-height: .4rem;
    margin:0 auto;
    outline:none;
    margin-bottom: .2rem;
    padding: .2rem;
    border:1px solid #888;
    border-radius: .4rem;
  }
  .btn{
    display: block;
    width: 5.4rem;
    height: .8rem;
    line-height: .8rem;
    border: none; 
    background-color:#41b883; 
    color:#fff; 
    font-size: .32rem; 
    margin:0 auto .1rem;
    border-radius: .4rem;
  }
  .log-reg{cursor:pointer;}
  .log-reg:hover{color:#41b883;}
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .a-reg{
    text-decoration: underline;
  }
  .checkphone, .checkpassword, .isNo{
    text-align: center;
    line-height: .5rem;
    color: red;
    font-size: .18rem;
  }
</style>
