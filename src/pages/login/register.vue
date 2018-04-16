<template>
  <transition name="fade" mode="out-in">
    <div class="register-wrap">
      <div class="logo">
        <img src="../../../static/img/logo.jpg">
      </div>
      <h3 class="title">用户注册</h3>
      <p class="info-txt">
        <span class="reg-title" ref='regname'></span>
        <input @focus='handleNameFoucs' class="txt" type="number" placeholder="请输入手机号" ref="username" @blur='handleBlur'>
      </p>
      <p class="info-txt">
        <span class="reg-title" ref='regpwd'></span>
        <input @focus='handlePwdFoucs' @blur='handlePwdBlur' class="txt" type="password" placeholder="请输入密码" ref="password">
      </p>
      <div class="code">
        <span class="reg-code" ref='regcode'></span>
        <div class="code-input">
          <input class="code-txt" type="number" placeholder="请输入验证码" ref="codenum" @blur='handleBlurCode' @focus='handleCodeFoucs' >
          <button class="code-btn" @click='handleGetPhoneCode' ref='codeBtn'>获取验证码</button>
        </div>
        
      </div>
      <button class="btn" @click="handleUserRegister">注册</button>
      <span class="log-reg" @click='handleToLogin'>已有账号？马上<a class="a-log">登录</a></span>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  export default{
    data () {
      return {
        code: '',
        username: '',
        password: '',
        time: 59,
        isCodeNum: true,
        inputCode: '',
        nameCheck: false,
        pwdCheck: false,
        randomcode: ''
      }
    },
    methods: {
      handleToLogin () {
        this.$emit('toLogin')
      },
      handleUserRegister () {
        if (this.$refs.username.value === '') {
          this.$refs.regname.innerHTML = '用户名不能为空'
        } else if (this.$refs.password.value === '') {
          this.$refs.regpwd.innerHTML = '密码不能为空'
        } else {
          this.username = this.$refs.username.value
          this.password = this.$refs.password.value
          // axios.get('/api/registe.json')
          //     .then(this.handleUserRegisterSucc.bind(this))
          //     .catch(this.handleUserRegisterErr.bind(this))
          axios({
            method: 'post',
            url: '/api/user/reg',
            data: {
              username: this.username,
              password: this.password,
              code: this.code
            }
          }).then(this.handleUserRegisterSucc.bind(this))
          .catch(this.handleUserRegisterErr.bind(this))
        }
      },
      handleUserRegisterSucc (res) {
        res = (res.data) ? res.data : null
        this.handleDataCorrect(res)
      },
      handleUserRegisterErr () {
        console.log('服务器连接失败')
      },
      handleGetPhoneCode () {
        this.randomcode = this.getRandomCode()
        if (this.isCodeNum) {
          this.isCodeNum = false
          if (this.$refs.username.value) {
            this.username = this.$refs.username.value
            this.$refs.codeBtn.innerHTML = '60s'
            this.$refs.codeBtn.style.backgroundColor = '#ccc'
            var timer = setInterval(() => {
              this.$refs.codeBtn.innerHTML = this.time-- + 's'
              if (this.time <= 0) {
                clearInterval(timer)
                this.isCodeNum = true
                this.$refs.codeBtn.style.backgroundColor = '#41b883'
                this.$refs.codeBtn.innerHTML = '获取验证码'
              }
            }, 1000)
            // axios.get('/static/code.json')
            // .then(this.handlePhoneCodeSucc.bind(this))
            axios({
              method: 'post',
              url: '/code',
              data: {
                sid: 'bbcf4dd1920b2f6e3f1dfab86ce1aa96',
                token: 'd4ea631cbf617638388d3b1c2216d336',
                appid: 'c9a69818c8404ff2ad85975d92140f3f',
                templateid: '299745',
                mobile: this.username,
                param: this.randomcode
              },
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
              }
            })
            .then(this.handlePhoneCodeSucc.bind(this))
          }
        }
      },
      handlePhoneCodeSucc (res) {
        res = (res.data) ? res.data : null
        this.code = this.randomcode
      },
      handleDataCorrect (res) {
        this.inputCode = this.$refs.codenum.value
        if (res.data.register === false) {
          this.$refs.regname.innerHTML = '用户名已注册'
        } else {
          if (this.inputCode !== this.code) {
            this.$refs.regcode.innerHTML = '验证码输入错误'
          } else if (this.inputCode === '') {
            this.$refs.regcode.innerHTML = '请输入验证码'
          } else if (this.pwdCheck && this.nameCheck) {
            this.$emit('toLogin')
          }
        }
      },
      handleBlur () {
        this.handleValidate(this.$refs.username.value)
      },
      handleBlurCode () {
        let codeReg = /^\d{6}$/
        if (!codeReg.test(this.$refs.codenum.value)) {
          this.$refs.regcode.innerHTML = '验证码必须是六位'
        } else {
          return true
        }
      },
      handleValidate (phone) {
        let mobileReg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/
        if (!mobileReg.test(phone)) {
          this.$refs.regname.innerHTML = '请输入正确的手机号'
        } else {
          this.nameCheck = true
        }
      },
      handleNameFoucs () {
        this.$refs.regname.innerHTML = ''
      },
      handleCodeFoucs () {
        this.$refs.regcode.innerHTML = ''
      },
      handlePwdFoucs () {
        this.$refs.regpwd.innerHTML = ''
      },
      handlePwdBlur () {
        this.handleValidatePwd(this.$refs.password.value)
      },
      handleValidatePwd (pwd) {
        let pwdReg = /^[A-Za-z0-9]{6,12}$/
        if (!pwdReg.test(pwd)) {
          this.$refs.regpwd.innerHTML = '密码必须是6-12位数字/字母组合'
        } else {
          this.pwdCheck = true
        }
      },
      getRandomCode () {
        var str = ''
        for (let i = 0; i < 6; i++) {
          str += parseInt(Math.random() * 10)
        }
        return str
      }
    }
  }
</script>

<style scoped>
  .register-wrap{
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
    height: .4rem;
    line-height: .4rem;
    margin:0 auto;
    margin-bottom: .2rem;
    outline:none;
    padding: .2rem;
    border:1px solid #888;
    border-radius: .4rem;
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
    border-radius: .4rem;
  }
  .log-reg{cursor:pointer;}
  .log-reg:hover{color:#41b883;}
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .code{
    width: 5.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin:0 auto;
    margin-bottom: .2rem;
  }
  .code-input{
    width: 5.4rem;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    margin-bottom: .2rem;
  }
  .code-txt{
    width: 2.5rem;
    height: .4rem;
    line-height: .4rem;
    outline:none;
    padding: .2rem;
    border:1px solid #888;
    border-radius: .4rem;
  }
  .code-btn{
    display: block;
    width: 2rem;
    height: .82rem;
    line-height: .8rem;
    border:none; 
    background-color:#41b883; 
    color:#fff; 
    font-size: .32rem;
    border-radius: .4rem; 
  }
  .a-log{
    text-decoration: underline;
  }
  .info-txt{
    display: flex;
    flex-direction: column;
  }
  .reg-title{
    color: red;
    margin-bottom: .05rem;
  }
  .reg-code{
    margin-right:2.6rem;
    color: red;
    margin-bottom: .1rem;
  }
</style>
