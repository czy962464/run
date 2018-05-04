<template>
  <div class="index-content">
    <ul>
      <li class="con-list" ref='address' @click='handleClick()'>当前位置</li>
      <li class="con-list" ref='pwd' @click='handleUpdatePwd()'>修改密码</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'index-content',
    methods: {
      handleClick () {
        this.$router.push('./map')
      },
      handleUpdatePwd () {
        this.$router.push('./userinfo')
      }
    }
  }
</script>

<style scoped>
  .index-content{
    width: 1.6rem;
    height: 2rem;
    background: #3cd191;
    position: absolute;
    top: .88rem;
    right: 0;
    z-index: 1;
  }
  .con-list{
    font-size: .3rem;
    line-height: .4rem;
    color: #fff;
    text-align: center;
    border-top: 1px solid #ffffff;
  }
</style>