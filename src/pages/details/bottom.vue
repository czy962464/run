<template>
  <div class="bottom">
  	<img src="../../../static/img/emoji.png" class="bottom-img">
  	我也是有底线的人
  	<div class="bottom-bg">
  		<img src="../../../static/img/detabotbg.png" class="bg">
  		<img src="../../../static/img/detabotbg.png" class="bg">
  	</div>
  </div>
</template>

<script>
  export default {
    name: 'details-bottom'
  }
</script>

<style scoped>
  .bottom{
  	height: .58rem;
  	padding-top: .62rem;
  	text-align: center;
  	font-size: .22rem;
  	position: relative;
  }
  .bottom-img{
  	height: .3rem;
  }
  .bottom-bg{
	position: absolute;
	bottom: .41rem;
	left: .21rem;
	right: .21rem;
	display: flex;
	justify-content: space-between;
  }
  .bg{
  	width: 2.24rem;
  }
</style>