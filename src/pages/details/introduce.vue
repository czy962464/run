<template>
  <div class="introduce">
    <img src="../../../static/img/introducebg.png" class="intro-img">
    <img src="../../../static/img/detailsbg.png" class="intro-bg">
    <div class="intro-main">
      <div class="intro-title">公司介绍</div>
      <div class="intro-desc">
        {{detaList.content}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details-intro',
    props: {
      detaList: Object
    }
  }
</script>

<style scoped>
  .introduce{
    height: 4.5rem;
    position: relative;
  }
  .intro-bg{
    position: absolute;
    left: 1.87rem;
    top: .64rem;
    right: .2rem;
  }
  .intro-img{
    width: 100%;
    overflow: hidden;
  }
  .intro-main{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .intro-title{
    width: 1.56rem;
    height: .5rem;
    background: #42c69a;
    margin: .35rem 0 0 .2rem;
    border-radius: .24rem;
    color: #fff;
    line-height: .5rem;
    text-align: center;
    font-size: .3rem;
  }
  .intro-desc{
    font-size: .3rem;
    color: #fff;
    padding: .54rem .22rem;
    line-height: .38rem;
    height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>