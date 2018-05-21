<template>
  <!-- <div class="install border-top">
    <div class="install-title">
      今日
      <span class="title-num">2175</span>
      步
    </div>
    <div class="install-btns">
      <div class="install-btn calculation">计步设置</div>
      <div class="install-btn synchro">同步设置</div>
    </div>
  </div> -->
</template>
<script>
  export default {}
</script>

<style scoped>
  .install{
    display: flex;
    height: .58rem;
    background: #fff;
    font-size: .24rem;
    padding: 0 .4rem;
    justify-content: space-between;
  }
  .install-title{
    color: #333;
    line-height: .58rem;
  }
  .title-num{
    color: #3cd191;
  }
  .install-btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 2.92rem;
    height: .58rem;
  }
  .install-btn{
    width: 1.36rem;
    height: .44rem;
    background: #3cd191;
    border-radius: .2rem;
    color: #fff;
    line-height: .44rem;
    text-align: center;
  }
</style>