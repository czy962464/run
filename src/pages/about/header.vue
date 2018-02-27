<template>
  <div class="about-header">
    <div class="header-cont">
      <i class="iconfont head-icon" @click='handleEditorInfo'>&#xe672;</i>
      <div class="portrait">
        <div class="head-center">
          <img class="por-img" src="../../../static/img/portrait.png">
        </div>  
      </div>
      <i class="iconfont head-icon" @click='handleToLogin'>&#xe659;</i>
  	</div>
    <h2 class="about-title">新导航人</h2>
    <h4 class="desc">这个家伙很懒，什么都没有留下</h4>
    <div class="head-list">
      <div class="heade-item">
        <span class="num">0</span>
        粉丝
      </div>
      <div class="heade-item">
        <span class="num">0</span>
        关注
      </div>
      <div class="heade-item">
        <span class="num">0</span>
        消息
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about-index',
    methods: {
      handleToLogin () {
        this.$router.push('/login')
      },
      handleEditorInfo () {
        this.$emit('change')
      }
    }
  }
</script>

<style scoped>
  .about-header {
    height: 3.8rem;
    background: url(../../../static/img/bg.png) no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
  }
  .header-cont{
    width: 100%;
    height: 1.74rem;
    display: flex;
    justify-content: space-between;
  }
  .portrait{
    margin-top: .07rem;
    width: 1.64rem;
    height: 1.64rem;
    border-radius: .82rem;
    border: .01rem solid #fff;
    position: relative;
  }
  .head-center{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: .7rem;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .por-img{
    width: 100%;
    height: 100%;
  }
  .head-icon{
    font-size: .44rem;
    color: #fff;
    margin: .2rem .6rem 0;
  }
  .about-title{
    font-size: .32rem;
    margin: .1rem 0 .2rem;
  }
  .desc{
    font-size: .24rem;
    margin-bottom: .27rem;
  }
  .head-list{
    width: 100%;
    display: flex;
    height: .94rem;
    justify-content: space-around;
    align-items: center;
  }
  .heade-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .22rem;
  }
  .num{
    margin-bottom: .1rem;
    font-size: .2rem;
  }
</style>