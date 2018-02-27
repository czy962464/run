<template>
  <div class="header">
    <h3 class="title">奔跑圈</h3>
    <p class="desc">C/I/R/C/L/E/O/F/S/P/O/R/T</p>
    <i class="iconfont icon">&#xe650;</i>
  </div>
</template>

<script>
  export default {
    name: 'run-header'
  }
</script>

<style scoped>
  .header{
    height: .88rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #42c69a;
    color: #fff;
    position: relative;
  }
  .title{
    margin: .18rem 0 .1rem;
    font-size: .3rem;
  }
  .desc{
    font-size: .14rem;
  }
  .icon{
    position: absolute;
    right: .4rem;
    top: .23rem;
    font-size: .44rem;
  }
</style>