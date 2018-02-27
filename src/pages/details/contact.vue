<template>
  <div class="contact">
    <div class="contact-title">联系我们</div>
  	<div class="contact-item">
  		<img src="../../../static/img/map.png" class="item-img">
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'details-project'
  }
</script>

<style scoped>
  .contact  {
    height: 2.84rem;
    padding: .4rem .2rem 0;
    background: url('../../../static/img/detailsbg.png') no-repeat 1.87rem .64rem;
    background-size: 5.43rem;
  }
  .contact-title {
    width: 1.56rem;
    height: .5rem;
    background: #42c69a;
    border-radius: .24rem;
    color: #fff;
    line-height: .5rem;
    text-align: center;
    font-size: .3rem;
  }
  .contact-item {
    height: 2.1rem;
    width: 100%;
    margin-top: .26rem;
  }
  .item-img {
    width: 100%;
    height: 100%;
  }
</style>