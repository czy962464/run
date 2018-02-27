<template>
  <div class="activity">
    <div class="activity-title">精彩活动</div>
    	<div class="activitty-item">
    		<img src="../../../static/img/pao.jpg" class="item-img">
    	</div>
  </div>
</template>

<script>
  export default {
    name: 'details-project'
  }
</script>

<style scoped>
  .activity  {
    height: 3.8rem;
    padding: .4rem .2rem 0;
    background: url('../../../static/img/detailsbg.png') no-repeat 1.87rem .64rem;
    background-size: 5.43rem;
  }
  .activity-title {
    width: 1.56rem;
    height: .5rem;
    background: #42c69a;
    border-radius: .24rem;
    color: #fff;
    line-height: .5rem;
    text-align: center;
    font-size: .3rem;
  }
  .activitty-item {
    height: 2.9rem;
    width: 100%;
    margin-top: .4rem;
  }
  .activitty-item .item-img {
    width: 100%;
    height: 100%;
  }
</style>