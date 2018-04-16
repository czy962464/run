<template>
  <div class="index-header">
    <div class="header-cont">
      <div class="weather">
        <iframe scrolling="no" frameborder="0" allowtransparency="true" src="http://i.tianqi.com/index.php?c=code&id=12&icon=1&num=1&site=12" class="iframe">
        </iframe>
      </div>
      <div class="more-cont" @click='handleUpdatePwd' ref='cont'>
        <span class="more">+</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      handleUpdatePwd () {
        this.$emit('change')
      }
    }
  }
</script>

<style scoped>
  .header-cont {
    display: flex;
    position: relative;
    background: #3cd191;
    box-sizing: border-box;
    height: .88rem;
    padding: .1rem .3rem;
  }
  .weather-cont {
    font-size: .24rem;
    color: #fff;
    text-align: center;
    line-height: .4rem;
  }
  .iframe {
    width: 4rem;
    height: .88rem;
    position: absolute;
    left: -1.5rem;
    top: -.1rem;
  }
  .wen {
    font-size: .24rem;
    color: #fff;
    text-align: center;
    line-height: .4rem;
  }
  .more-cont {
    position: absolute;
    top: .2rem;
    right: .2rem;
  }
  .more {
    display: block;
    border-radius: 50%;
    height: .48rem;
    width: .48rem;
    background: #fff;
    color: #3cd191;
    text-align: center;
    line-height: .48rem;
    font-size: .48rem;
    font-weight: 600;
  }
</style>