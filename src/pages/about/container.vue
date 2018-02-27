<template>
  <div class="container">
    <div class="con-list">
      <div class="con-item">
        <div class="item-img">
          <img src="../../../static/img/person.jpg">
        </div>
        <div class="item-info">
          <h3>个人信息</h3>
          <span class="item-desc">家乡：<em ref="home">{{userinfo.city}}</em></span>
          <span class="item-desc">昵称：<em ref="emotional">{{userinfo.nickname}}</em></span>
        </div>
      </div>
      <div class="con-item item-account">
        <div class="item-img">
          <img src="../../../static/img/person.jpg">
        </div>
        <div class="item-info">
          <h3>账号</h3>
          <span class="item-desc">奔跑号：{{userinfo.usernum}}</span>
          <span class="item-desc">奔跑等级：{{userinfo.level}}</span>
        </div>
      </div>
      <div class="con-item item-data">
        <div class="item-img">
          <img src="../../../static/img/person.jpg">
        </div>
        <div class="item-info">
          <h3>运动数据</h3>
        </div>
      </div>
      <div class="data-item">
        <div class="cumulative">
          累计步行： <span class="cum-num">{{userinfo.walking}}</span>
        </div>
        <div class="cumulative">
          累计步行： <span class="cum-num">{{userinfo.running}}</span>
        </div>
        <div class="cumulative">
          单日最佳成绩： <span class="cum-num">{{userinfo.grade}}</span>
        </div>
        <div class="cumulative">
          最近一周跑步： <span class="cum-num">{{userinfo.recently}}</span>
        </div>
      </div>
      <div class="data-item">
        <div class="cumulative">
          累计骑行： <span class="cum-num">{{userinfo.cycling}}</span>
        </div>
        <div class="cumulative">
          累计健身： <span class="cum-num">{{userinfo.fitness}}</span>
        </div>
        <div class="cumulative">
          最近一周骑行： <span class="cum-num">{{userinfo.latestCycling}}</span>
        </div>
        <div class="cumulative">
          最近一周健身： <span class="cum-num">{{userinfo.latestFitness}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'container',
    props: {
      userinfo: Object
    },
    methods: {
      handleChangeData (newHome, newEmotional) {
        this.$refs.home.innerHTML = newHome
        this.$refs.emotional.innerHTML = newEmotional
      }
    }
  }
</script>

<style scoped>
  .container {
    flex: 1;
    /*height: 6.88rem;*/
    background: #fff;
    padding-top: .18rem;
  }
  .con-list{
  	display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .con-item{
    padding: .25rem .4rem;
    display: flex;
    flex-direction: row;
    border-top: .01rem solid #ccc;
    align-items: center;
  }
  .item-img{
    float: left;
    width: .52rem;
    height: .52rem;
    margin-right: .23rem;
  }
  .item-img img{
    height: 100%;
  }
  .item-info{
    float: left;
    color: #333;
    width: 100%;
  }
  .item-info h3{
    font-size: .32rem;
    line-height: .32rem;
    margin-bottom: .21rem;
  }
  .item-desc{
    display: block;
    width: 6rem;
    overflow: hidden;
    white-space: nowrap;
    height: .22rem;
    font-size: .22rem;
    margin-top: .11rem;
  }
  .item-account{
    border-bottom: .01rem solid #ccc;
  }
  .item-data{
    margin-top: .16rem;
    padding: .18rem 0.4rem;
    border-bottom: .01rem solid #ccc;
    line-height: .52rem;
  }
  .item-data .item-info h3{
    margin-bottom: 0;
  }
  .data-item{
    padding: .22rem .54rem;
    border-bottom: .01rem solid #ccc;
  }
  .cumulative{
    width: 2.54rem;
    float: left;
    font-size: .24rem;
    margin-right: 1.1rem;
    margin-bottom: .22rem;
    display: flex;
    justify-content: space-between;
  }
  .cumulative:nth-child(2n){
    margin-right: 0;
  }
  .cumulative:nth-child(3), .cumulative:nth-child(4){
    margin-bottom: 0;
  }
  .cum-num{
    width: .66rem;
    display: block;
  }
</style>