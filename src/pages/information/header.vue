<template>
  <div class="info-header">
    <div class="header-cont">
      <i class="iconfont back" @click='handleBackIndex'>&#xe610;</i>
      新闻
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-header',
    methods: {
      handleBackIndex () {
        this.$router.push('/rest')
      }
    }
  }
</script>

<style scoped>
  .info-header{
    height: .88rem;
    position: relative;
  }
  .header-cont {
    line-height: .88rem;
    text-align: center;
    color: #fff;
    font-size: .34rem;
    background: #42c69a;
    position: relative;
  }
  .back{
    position: absolute;
    left: .3rem;
    top: 0;
    bottom: 0;
    line-height: .88rem;
    font-size: .4rem;
  }
</style>