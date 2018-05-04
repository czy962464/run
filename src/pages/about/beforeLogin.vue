<template>
  <div class="before-login">
    <button class="login" @click='handleToLogin()'>请先登陆</button>
  </div>
</template>

<script>
  export default {
    name: 'before-login',
    methods: {
      handleToLogin () {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .before-login{
    width: 100%;
    height: 100%;
    background: #eeeeee;
    position: relative;
  }
  .login{
    width: 4rem;
    height: 1rem;
    background: cyan;
    border-radius: .3rem;
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>