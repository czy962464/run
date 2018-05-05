<template>
  <div class="edt">
  <div class="about-header"> 
    <div class="header-cont">
      <i class="iconfont head-icon">&#xe672;</i>
      <div class="portrait">
        <div class="head-center">
          <img class="por-img" src="../../../static/img/portrait.png">
        </div>  
      </div>
      <i class="iconfont head-icon">&#xe659;</i>
    </div>
    <h2 class="about-title">昵称：<input ref='nickname' :value='userinfo.nickname' type="text" class="input-nickname" maxlength=6 /></h2>
    <h4 class="desc">签名：<input ref='signature' :value='userinfo.signature' type="text" class="input-nickname" maxlength=10 /></h4>
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
  <div class="editor">
    <div class="con-list">
      <div class="con-item">
        <div class="item-img">
          <img src="../../../static/img/person.jpg">
        </div>
        <div class="item-info">
          <h3>个人信息</h3>
          <span class="item-desc">家乡：<input ref='home' type="text" class="input-editor" maxlength=10 :value='userinfo.home'/></span>
          <span class="item-desc">情感：<input ref='emotional' type="text" class="input-editor" maxlength=10 :value='userinfo.emotional'/></span>
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
      <div class="save" ref='save' @click='handleSaveInfo'>保存</div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'container',
    data () {
      return {
        home: '',
        emotional: '',
        nickname: '',
        signature: ''
      }
    },
    props: {
      userinfo: Object
    },
    methods: {
      handleSaveInfo () {
        this.nickname = this.$refs.nickname.value
        this.signature = this.$refs.signature.value
        this.home = this.$refs.home.value
        this.emotional = this.$refs.emotional.value
        this.$emit('change', this.nickname, this.signature, this.home, this.emotional)
      }
    }
  }
</script>

<style scoped>
  .editor {
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
    width: 6rem;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    font-size: .22rem;
    margin-top: .11rem;
  }
  .input-nickname{
    font-size: .22rem;
    width: 2rem;
    text-align: center;
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
  .input-editor{
    border: .01rem solid #ccc;
  }
  .save{
    height: .8rem;
    width: 3rem;
    border-radius: 5px;
    background: #42c69a;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    margin: .3rem auto;
  }
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
    font-size: .22rem;
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