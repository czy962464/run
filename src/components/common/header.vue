<template>
  <div class="header">
    <div class="header-top">
      <img src="../../../static/img/music.jpg" class="top-img" @click="handleAudioPlay">
      <audio src="http://res.zhangu365.com/syspic/mp3/47f53deb42ddef8c2d52349e07abb71a.mp3" controls class="audio" ref="audio"></audio>
    </div>
    <div class="hotbg">
      <img src="../../../static/img/hotbgleft.jpg" class="bg-left">
      <img src="../../../static/img/hotbgright.jpg" class="bg-right">
    </div>
    <div class="header-info">
      <h3 class="header-title">
        <i class="iconfont">&#xe7ed;</i>
        休息乐园
      </h3>
      <p class="top-text">MY CIRCLE</p>
      <p class="top-text">运动之后享受美好惬意的时光</p>
    </div>
    <div class="header-nav">
      <div class="nav-item" v-for="(item, index) in navItem" :class="{'nav-active': item.show}" @click='handleNavClick(index)' :key='item.id'>
        {{item.tab}}
      </div>
    </div>
  </div>
</template>

<script>
  let navItem = [
          {'tab': '推荐', 'show': true},
          {'tab': '视频', 'show': false},
          {'tab': '社会', 'show': false},
          {'tab': '养生', 'show': false},
          {'tab': '娱乐', 'show': false}
  ]
  export default {
    name: 'Restheader',
    data () {
      return {
        navItem: navItem,
        isAudio: true
      }
    },
    methods: {
      handleNavClick (index) {
        for (var i = 0; i < this.navItem.length; i++) {
          this.navItem[i].show = false
          if (i === index) {
            this.navItem[index].show = true
          }
        }
        this.$emit('change', index)
      },
      handleAudioPlay () {
        if (this.isAudio) {
          this.$refs.audio.play()
          this.isAudio = false
        } else {
          this.$refs.audio.pause()
          this.isAudio = true
        }
      }
    }
  }
</script>

<style scoped>
  .header{
    position: relative;
  }
  .header-top{
    width: 100%;
    height: 2.6rem;
  }
  .top-img{
    width: 100%;
    height: 100%;
  }
  .header-input{
    padding: 0 0.2rem;
  }
  .input{
    height: .6rem;
    width: 100%;
    border-radius: .28rem;
    text-align: center;
    font-size: .28rem;
    color: #9a9a9a;
  }
  .header-nav{
    display: flex;
    padding: 0 .44rem;
    justify-content: space-between;
  }
  .nav-item{
    line-height: .48rem;
    font-size: .28rem;
  }
  .nav-active{
    color: #42c69a;
    border-bottom: .02rem solid #42c69a;
  }

  .header-info{
    margin: .1rem .2rem 0;
    background: #fff;
    padding-top: .14rem;
    text-align: center;
    color: #666666;
    border-radius: .1rem;
    height: .9rem;
    margin-bottom: .1rem;
  }
  .header-title{
    font-size: .24rem;
    line-height: .24rem;
    color: #08a36f;
  }
  .top-text{
    font-size: .18rem;
    line-height: .16rem;
    color: #666666;
    margin-top: .08rem;
  }
  .hotbg{
    position: absolute;
    left: 0;
    right: 0;
    top: 3.2rem;
    display: flex;
    justify-content: space-between;
  }
  .bg-left{
    width: 2.86rem;
  }
  .bg-right{
    width: 2.86rem;
  }
  .audio {
    display: none;
  }
</style>