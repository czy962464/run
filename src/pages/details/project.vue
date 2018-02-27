<template>
  <div class="project">
    <div class="pro-title">服务项目</div>
    <div class="pro-list">
    	<div class="pro-item">
    		<img src="../../../static/img/proitem1.png" class="item-img">
    	</div>
    	<div class="pro-item">
    		<img src="../../../static/img/proitem2.png" class="item-img">
    	</div>
    	<div class="pro-item">
    		<img src="../../../static/img/proitem3.png" class="item-img">
    	</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details-project'
  }
</script>

<style scoped>
  .project{
    position: relative;
    height: 6.56rem;
    padding: .4rem .2rem 0;
    background: url('../../../static/img/detailsbg.png') no-repeat 1.87rem .64rem;
    background-size: 5.43rem;
  }
  .pro-title{
    width: 1.56rem;
    height: .5rem;
    background: #42c69a;
    border-radius: .24rem;
    color: #fff;
    line-height: .5rem;
    text-align: center;
    font-size: .3rem;
  }
  .pro-list{
  	height: 5.72rem;
  	margin-top: .32rem;
  }
  .pro-item{
  	height: 1.78rem;
  	margin-bottom: .2rem;
  }
  .pro-item:last-child{
  	margin-bottom: 0;
  }
  .item-img{
  	height: 100%
  }
</style>