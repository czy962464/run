<template>
	<div class="box" ref="boxlist">
    <div>
      <div class="my-circle">
        <p class="circle-title">
          <span class="iconfont">&#xe7ed;</span>
          <span>我的圈子</span>
        </p>
        <p class="circle-words">
          <img class="hotleft" src="../../../static/img/hotbgleft.jpg" alt="">
          MY CIRCLE
          <img class="hotright" src="../../../static/img/hotbgright.jpg" alt="">
        </p>
        <p class="wind">一阵运动之风吹来了一堆好友动态</p>
      </div>
      <div class="container">
        <div class="con">
          <div class="con-list" v-for="item in circleInfo" :key="item.id">
            <div class="con-item">
              <div class="circle-top border-bottom">
                <img class="personal" :src="item.headImg" alt="">
                <div class="con-desc">
                  <span class="nameID">{{item.name}}</span>
                  <span class="yi">一</span>
                  <span class="describe">{{item.desc}}</span>
                  <p class="circle-run">{{item.sign}}</p>
                </div>
                <span class="hot iconfont">&#xe621;</span>
              </div> 
              <div class="circle-bottom">
                <img class="pub" :src="item.conImg" alt="">
                <p class="pub-con">{{item.content}}</p>
                <div class="address">
                   <span class="addr iconfont">&#xe625;</span><span class="adr">{{item.address}}</span>
                </div>
                <p class="time">{{item.time}}</p>
                <div class="detailBtn">详情</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'myzone',
  props: {
    circleInfo: Array
  },
  methods: {
    ref () {
      console.log(this.circleInfo)
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.boxlist)
      } else {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  }
}
</script>

<style scoped>
  .box{
    flex: 1;
    overflow: hidden;
    padding: 0 .4rem;
  }
  .my-circle{
    height: 1.11rem;
    border: .03rem solid #e3483a;
    margin-top: .25rem;
    border-radius: .1rem;
  }
  .circle-title{
    line-height: .28rem;
    text-align: center;
    margin-top: .12rem;
    color: #e76559;
  }
  .circle-words{
    position: relative;
    line-height: .2rem;
    text-align: center;
    font-size: .12rem;
    color: #959595;
    margin-top: .08rem;
  }
  .hotleft{
    position: absolute;
    width: 2.97rem;
    top: .1rem;
    left: -0.2rem;
  }
  .hotright{
    position: absolute;
    width: 2.97rem;
    top: .1rem;
    right: -0.2rem;
  }
  .wind{
    line-height: .2rem;
    text-align: center;
    font-size: .16rem;
    color: #959595;
    margin-top: .08rem;
  }
  .container{
    flex: 1;
    overflow: hidden;
  }
  .con{
    padding-bottom: .1rem;
  }
  .con-list{
    height: 3.29rem;
    border-radius: .1rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .2rem .1rem 0;
  }
  .con-item{
    height: 3.09rem;
    border: .03rem solid #e3483a;
    border-radius: .1rem;
  }
  .circle-top{
    width: 100%;
    height: 1rem;
  }
  .personal{
    float: left;
    width: .8rem;
    height: .8rem;
    margin: .1rem 0 0 .15rem;
  }
  .con-desc{
    float: left;
    width: 4.6rem;
    height: 1rem;
    margin-left: .2rem;
  }
  .nameID{
    float: left;
    max-width: 1.48rem;
    font-size: .27rem;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: .12rem 0 0 0; 
  }
  .yi{
    width: .2rem;
    color: #e3483a;
    float: left;
    margin-top: .13rem;
  }
  .describe{
    float: left;
    max-width: 3.6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .17rem;
    color: #e3483a;
    margin:.15rem 0 0 .2rem;
  }
  .circle-run{
    float: left;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    height: .48rem;
    font-size: .07rem;
    margin-top: .08rem;
    color: #959595;
  }
  .hot{
    float: right;
    font-size: .54rem;
    color: #e3483a;
    margin-top: .2rem;
    margin-right: .1rem;
  }
  .circle-bottom{
    position: relative;
    height: 2.1rem;
  }
  .pub{
    width:2.2rem;
    height:1.72rem;
    float: left;
    margin: .1rem 0 0 .2rem;
  }
  .pub-con{
    float: left;
    width: 3.6rem;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 1rem;
    font-size: .2rem;
    line-height: .26rem;
    margin: .13rem 0 .13rem .13rem;
  }
  .address{
    float: left;
    height: .2rem;
  }
  .addr{
    display: block;
    float: left;
    margin-left:.2rem;
    color: #e3483a;
    font-weight: bold;
    font-size: 9px;
  }
  .adr{
    display: block;
    float: left;
    margin-left: .2rem;
    color: #e3483a;
    font-size: .12rem;
  }
  .time{
    float: left;
    margin: .04rem 0 0 .13rem;
    font-size: .12rem;
    color: #e3483a;
  }
  .detailBtn{
    position: absolute;
    width: .8rem;
    height: .3rem;
    right: .2rem;
    font-size: .22rem;
    color: white;
    bottom: .14rem;
    text-align: center;
    line-height: .3rem;
    border-radius: .15rem;
    background: #e3483a;
  }
</style>