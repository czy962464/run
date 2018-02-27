<template>
  <div class="topic">
    <div>
      <div class="header">
        <header>
          <span class="bg"></span>
          <span>热门话题</span>
        </header>
        <div class="title">HOT TOPIC</div>
        <h2 class="mess">健康多多，话题多多</h2>
        <div class="search">
          <input type="text" placeholder="请输入搜索内容" class="inp" />
          <button class="btn"></button>
        </div>
        <div class="label">
          <div v-for="item in labelInfo" :key="item.id" class="label-cont">{{item.title}}</div>
        </div>
      </div>  
      <div class="scroll-right">
        <div class="img-cont">
          <div class="img-box" v-for="items in scrollRightInfo" :key="items.id">
            <img :src="items.imgUrl" alt="">
          </div>
        </div>
      </div>

      <div class="user-content">
        <div>
          <div class="userinfo" v-for="item in userInfo" :key="item.id">
            <header>
              <div class="user-img">
                <img :src="item.userImg" alt="">
              </div>
              <div class="user-desc">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
              </div>
              <div class="user-fcous">
                <span class="bg-img"></span>
                <span class="fcous">关注</span>
              </div>
            </header>
            <nav class="nav">
              <span class="title">{{item.titlemusic}}</span>
              <span class="desc">{{item.descmusic}}</span>
            </nav>
            <section>
              <div class="top">
                <span class="music-img"></span>
                <span class="music">{{item.music}}</span>
              </div>
              <div class="center">
                <div class="img-box" v-for="items in item.musicimg">
                  <img :src="items.imgUrl" alt="">
                </div>
              </div>
              <footer>
                <div class="user-box">
                  <i class="iconfont give-like" ref='like' 
                  :class='{"color-active":isColor}' 
                  @click='handleGiveLike'>&#xe604;</i>
                </div>
                <div class="user-box"  v-for="itemimg in item.userimgbox">
                  <img :src="itemimg.img" alt="">
                </div>
                <span class="message"></span>
                <span class="link"></span>
              </footer>
            </section>
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
    name: 'topic',
    data () {
      return {
        labelInfo: [],
        scrollRightInfo: [],
        userInfo: [],
        isColor: false
      }
    },
    watch: {
      scrollRightInfo () {
        this.$nextTick(() => {
          this.scroll.refresh()
          this.scrollT.refresh()
        })
      }
    },
    created () {
      this.getTopic()
    },
    methods: {
      getTopic () {
        axios.get('/static/label.json')
             .then(this.handleLabelSucc.bind(this))
             .catch(this.handleLabelErr.bind(this))
      },
      handleLabelSucc (res) {
        res = (res.data) ? res.data : null
        if (res.data) {
          this.labelInfo = res.data.label
          this.scrollRightInfo = res.data.scrollRightInfo
          this.userInfo = res.data.userInfo
        }
      },
      handleLabelErr (err) {
        console.loe(err)
      },
      handleGiveLike () {
        this.isColor = !this.isColor
      }
    },
    mounted () {
      this.scroll = new BScroll('.scroll-right', {
        scrollX: true
      })
      this.scrollT = new BScroll('.topic', {
        probeType: 3
      })
    }
  }
</script>

<style scoped>
  .topic {
    background: #f5f5f5;
    flex: 1;
    overflow: hidden;
  }
  .header {
    background: #fff;
    margin: .2rem;
    border-radius: .1rem
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d2d567;
    font-size: .34rem;
  }
  .bg {
    display: block;
    width: .3rem;
    height: .4rem;
    background: url(../../../static/img/1.jpg) no-repeat center;
    background-size: 100%, 100%;
    margin-right: .1rem;
  }
  .header .title {
    text-align: center;
    line-height: .3rem;
    font-size: .2rem;
    background: url(../../../static/img/2.jpg) no-repeat;
    background-size: 100%, 100%;
  }
  .header h2 {
    line-height: .3rem;
    text-align: center;
    color: #737373;
    font-size: .2rem;
  }
  .search {
    position: relative;
    margin: .1rem auto;
    width: 6.7rem;
    height: .6rem;
    background: url(../../../static/img/3.png);
    background-size: 100%, 100%;
    text-align: center;
  }
  .search .inp {
    line-height: .6rem;
    background: #e3483a;
    text-align: center;
  }
  .search .inp::placeholder {
    color: #fff;
    font-size: .3rem;
  }
  .search .btn {
    height: .36rem;
    width: .36rem;
    position: absolute;
    right: .2rem;
    top: .1rem;
    background: url(../../../static/img/ss.jpg) no-repeat center;
    background-size: 100%, 100%;
  }
  .label {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: .2rem;
  }
  .label .label-cont {
    width: 1.42rem;
    height: .42rem;
    background: url(../../../static/img/kk.png);
    background-size: 100%, 100%;
    line-height: .42rem;
    text-align: center;
    margin-left: .4rem;
    margin-bottom: .2rem;
    font-size: .24rem;
  }
  .scroll-right {
    margin: .1rem auto;
    height: 1.8rem;
    width: 7.1rem;
    border: .01rem solid #666;
    border-radius: .2rem;
    overflow: hidden;
    position: relative;
    background: #fff;
  }
  .scroll-right .img-box {
    width: 2.4rem;
    white-space: nowrap;
    margin: 0 .1rem;
  }
  .scroll-right .img-box img {
    width: 100%;
  }
  .scroll-right .img-cont {
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .userinfo {
    box-sizing: border-box;
    border: .01rem solid #e3483a;
    border-radius: .2rem;
    width: 7.1rem;
    margin: .2rem auto;
    padding: .14rem;
  }
  .userinfo header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: .01rem solid #999;
    padding-bottom: .1rem;
  }
  .userinfo header .user-img {
    width: .8rem;
  }
  .userinfo header .user-img img {
    width: 100%;
  }
  .user-desc .title {
    font-size: .25rem;
    color: #333;
    line-height: .3rem;
  }
  .user-desc .desc {
    font-size: .12rem;
    color: #666;
    line-height: .3rem;
  }
  .user-fcous {
    display: flex;
  }
   .bg-img {
    display: block;
    background: url(../../../static/img/gg.png) no-repeat center;
    background-size: 100%, 100%;
    height: .5rem;
    width: .5rem;
  }
  .user-fcous .fcous {
    white-space: nowrap;
    color: #e3483a;
    font-size: .12rem;
    align-self: flex-end;
  }
  .nav {
    padding: .1rem 0;
  }
  .nav .title {
    line-height: .3rem;
    color: #f20909;
  }
  .nav .desc {
    line-height: .4rem;
    color: #333;
  }
  .top {
    display: flex;
    align-items: center;
  }
  .top .music-img {
    display: block;
    height: .24rem;
    width: .24rem;
    background: url(../../../static/img/xx.png) no-repeat center;
    background-size: 100%, 100%;
  }
  .top .music {
    font-size: .12rem;
    color: #42c69a;
    line-height: .46rem;
    margin-left: .1rem;
  }
  .center {
    display: flex;
    justify-content: space-around;
  }
  .center .img-box {
    height: 2.06rem;
  }
  .center .img-box img {
    height: 100%;
  }
  footer {
    padding: .1rem;
    display: flex;
    justify-content: flex-start;
    position: relative;
  }
  .user-box {
    height: .4rem;
    margin-right: .1rem;
  }
  .user-box img {
    height: 100%;
  }
  footer .message {
    display: block;
    position: absolute;
    background: url(../../../static/img/mess.png) no-repeat center;
    background-size: 100%, 100%;
    height: .4rem;
    width: .4rem;
    right: 1rem;
  }
  footer .link {
    display: block;
    position: absolute;
    background: url(../../../static/img/link.png) no-repeat center;
    background-size: 100%, 100%;
    height: .4rem;
    width: .4rem;
    right: 0;
  }
  .give-like{
    font-size: .48rem;
    display: block;
    line-height: .4rem;
    color: #ccc;
  }
  .color-active{
    color:#ff0000;
  }
</style>