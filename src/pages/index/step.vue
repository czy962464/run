<template>
  <div class="index-step">
    <div class="bg-img">
      <img src="../../assets/base/img/bg.jpg" alt="">
    </div>
    <div class="step-number" 
        v-for='(specItem, index) in species' 
        :key='specItem.id'
        :class="{'isActive': specItem.isShow}" 
        ref='step'>
      <span class="td-number">{{specItem.title}}</span>
      <span class="tdy-number">{{specItem.number}}</span>
      <span class="goal-number">{{specItem.target}}</span>
      <span class="goal">{{specItem.desc}}</span>
    </div>
    <div class="sport-list">
      <div class="sport" v-for="(item, index) in indexList" @click='handleTabStep(index)'>
        <div class="img-box">
          <img :src="item.imgUrl" alt="" ref='imgBox'>
        </div>
        <p class="sport-desc" :key="item.id">{{item.desc}}</p>
      </div>
    </div>
    <div class="bottom-btn">
      <span>习惯养成</span>
      <span>体重管理</span>
    </div>
  </div>
</template>

<script>
  // v-show="specItem.id === '01'"
  export default {
    name: 'index-step',
    props: {
      indexList: Array,
      species: Array
    },
    methods: {
      handleTabStep (index) {
        for (var i = 0; i < this.species.length; i++) {
          this.species[i].isShow = false
          this.$refs.imgBox[i].src = this.indexList[i].imgUrl
          this.$refs.imgBox[0].src = this.indexList[0].imgUrl.substr(0, 20) + 1 + this.indexList[0].imgUrl.substring(20)
          if (i === index) {
            this.$refs.imgBox[index].src = this.indexList[index].imgUrl.substr(0, 20) + 1 + this.indexList[index].imgUrl.substring(20)
            this.species[index].isShow = true
          }
          if (index === 0) {
            this.$refs.imgBox[0].src = this.indexList[0].imgUrl
          }
        }
      }
    }
  }
</script>

<style scoped>
  .index-step {
    position: relative;
    height: 7.6rem;
  }
  .bg-img {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    left: 0;
  }
  .bg-img img {
    width: 100%;
    height: 100%;
  }
  .step-number {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 3.6rem;
    width: 3.6rem;
    top: 1rem;
    left: 50%;
    display: none;
    margin-left: -1.8rem;
    border-radius: 50%;
    background: rgba(216, 246, 233, .5);
  }
  .td-number {
    margin-top: .56rem;
    font-size: .24rem;
    color: #333;
  }
  .tdy-number {
    font-size: .72rem;
    font-weight: 900;
    color: #333;
    margin: .36rem 0;
  }
  .goal-number {
    font-size: .24rem;
    color: #666;
  }
  .goal {
    font-size: .24rem;
    color: #f53d3d;
    margin-top: .32rem;
  }
  .sport-list {
    position: absolute;
    z-index: 1;
    bottom: 1.37rem;
    display: flex;
    right: 0;
    left: 0;
    padding: 0 1.4rem;
    justify-content: space-around;
  }
  .img-box {
    height: .94rem;
  }
  .img-box img {
    height: 100%;
  }
  .sport-desc {
    text-align: center;
    color: #666;
    font-size: .24rem;
    line-height: .6rem;
  }
  .bottom-btn {
    position: absolute;
    bottom: .5rem;
    right: 0;
    left: 0;
    display: flex;
    justify-content:center;
  }
  .bottom-btn span {
    background: #3cd191;
    border-radius: .25rem;
    line-height: .72rem;
    width: 2.3rem;
    font-size: .36rem;
    text-align: center;
    color: #fff;
    display: inline-block;
    margin: 0 .2rem;
  }
  .isActive{
    display: flex;
  }
</style>