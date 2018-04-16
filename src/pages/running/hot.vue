<template>
  <div class="hot" ref='scroller'>
    <div class="hotList">
      <div class="hotbg">
        <img src="../../../static/img/hotbgleft.jpg" class="bg-left">
        <img src="../../../static/img/hotbgright.jpg" class="bg-right">
      </div>
      <div class="hot-name">
        <h3 class="hot-title">
          <i class="iconfont">&#xe600;</i>
          热门活动
        </h3>
        <p class="hot-text">HOT ACTIVITY</p>
        <p class="hot-text">哎呀，天上掉下一个活动来砸中了您！</p>
        <div class="hot-info">
          <div class="info-item" v-for='item in hotList' :key='item.id' @click='handleToDetails(item.id)'>
            <img :src="item.imgUrl" class="info-bg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    name: 'run-hot',
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
    },
    data () {
      return {
        hotList: []
      }
    },
    created () {
      // axios.get('/static/hot.json')
      //     .then(this.handleGetDataSucc.bind(this))
      //     .catch(this.handleGetDataErr.bind(this))
      axios.get('/api/circle/hot')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
    },
    methods: {
      handleGetDataSucc (res) {
        res = (res.data) ? res.data : null
        if (res && res.data) {
          this.hotList = res.data.hot
        }
      },
      handleGetDataErr () {
        console.log('error')
      },
      handleToDetails (id) {
        this.$router.push('/details?id=' + id)
      }
    }
  }
</script>

<style scoped>
  .hot{
    flex: 1;
    overflow: hidden;
  }
  .hotList{
    overflow: hidden;
  }
  .hotbg{
    position: absolute;
    left: 0;
    right: 0;
    top: .55rem;
    display: flex;
    justify-content: space-between;
  }
  .bg-left{
    width: 2.86rem;
  }
  .bg-right{
    width: 2.86rem;
  }
  .hot-name{
    margin: .25rem .2rem 0;
    background: #fff;
    text-align: center;
    padding-top: .16rem;
    border-radius: .1rem;
  }
  .hot-title{
    font-size: .24rem;
    line-height: .24rem;
    color: #08a36f;
  }
  .hot-text{
    font-size: .18rem;
    line-height: .16rem;
    color: #666666;
    margin-top: .08rem;
  }
  .info-item{
    margin-top: .38rem;
    width: 100%;
    height: 2rem;
    display: flex;
  }
  .info-bg{
    height: 100%;
    width: 100%;
  }
</style>