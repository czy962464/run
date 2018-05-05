<template>
  <div class="info-container">
    <div class="con-item">
      <span class="item-title">原密码</span>
      <input type="text" maxlength=12 placeholder="请输入原来的密码" ref='oldpwd' @focus='handleOldFoucs'>
      <span class="pwdtitle" ref='old'></span>
    </div>
    <div class="con-item">
      <span class="item-title">新密码</span>
      <input type="text" maxlength=12 placeholder="密码必须是6-12位数字/字母组合" ref='newpwd' @focus='handleNewFoucs' >
      <span class="pwdtitle" ref='new'></span>
    </div>
    <div class="btn" @click="handleUpdatePwd">确认修改</div>
    <div class="model" ref='model'></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'info-container',
    data () {
      return {
        oldpwd: '',
        newpwd: '',
        timer: ''
      }
    },
    methods: {
      handleUpdatePwd () {
        if (this.$refs.oldpwd.value === '') {
          this.$refs.old.innerHTML = '原密码不能为空'
        } else if (this.$refs.newpwd.value === '') {
          this.$refs.new.innerHTML = '新密码不能为空'
        } else {
          this.oldpwd = this.$refs.oldpwd.value
          this.newpwd = this.$refs.newpwd.value
          axios({
            method: 'post',
            url: '/api/user/updatepwd',
            data: {
              userid: this.getCookie(),
              oldpwd: this.oldpwd,
              newpwd: this.newpwd
            }
          }).then(this.handleUpdateSucc.bind(this))
          .catch(this.handleUpdateErr.bind(this))
        }
      },
      handleUpdateSucc (res) {
        res = (res.data) ? res.data : null
        if (res && res.data && res.data.isSucc) {
          this.$refs.model.style.display = 'block'
          this.$refs.model.innerHTML = '密码修改成功'
          this.timer = setTimeout(this.handleIsShow.bind(this), 2000)
        } else {
          this.handleUpdateErr()
        }
      },
      handleIsShow () {
        this.$refs.model.style.display = 'none'
        clearTimeout(this.timer)
      },
      handleUpdateErr () {
        console.log('error')
      },
      handleOldFoucs () {
        this.$refs.old.innerHTML = ''
      },
      handleNewFoucs () {
        this.$refs.new.innerHTML = ''
      },
      getCookie () {
        var strcookie = document.cookie
        var arrcookie = strcookie.split(';')
        var arr = []
        for (var i = 0; i < arrcookie.length; i++) {
          arr = arrcookie[i].split('=')
          console.log(arr)
          if (arr[0] === 'userid') {
            return arr[1]
          } else {
            return false
          }
        }
      }
    }
  }
</script>

<style scoped>
  .info-container{
    flex: 1;
    width: 100%;
    background: #f5f5f5;
    position: relative;
  }
  .con-item{
    width: 86%;
    margin: 0.5rem auto 0;
    height: 1.4rem;
  }
  .item-title{
    display: block;
    font-size: 0.3rem;
    line-height: 0.3rem;
    margin-bottom: .1rem;
  }
  .pwdtitle{
    display: block;
    text-align: center;
    color: red;
    margin-top: .1rem;
  }
  .con-item input{
    height: .7rem;
    display: block;
    width: 100%;
    border-radius: .1rem;
    padding-left: .3rem;
  }
  .btn{
    width: 30%;
    margin: 2rem auto 0;
    height: .8rem;
    border-radius: 2rem;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    background: #42c69a;
  }
  .model{
    width: 40%;
    height: 1rem;
    position: absolute;
    top: 90%;
    left: 50%;
    margin-top: -50%;
    margin-left: -20%;
    background: #333333;
    border-radius: 2rem;
    display: none;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
  }
</style>