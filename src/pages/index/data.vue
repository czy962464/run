<template>
  <div class="data border-top">
    <div class="data-info">
      <div class="data-top">
        <div class="data-title">一周运动数据</div>
        <div class="data-details">详情>></div>
      </div>
      <div class="data-con">
        <div class="con-item" v-for='item in movement'>
          <div class="data-num">{{item.num}}K</div>
          <div class="data-process">
            <transition>
              <div class="data-bar" ref="bar"></div>
            </transition> 
          </div>
          {{item.week}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index-data',
    props: {
      movement: Array
    },
    data () {
      return {
        number: 1,
        domArr: []
      }
    },
    watch: {
      movement () {
        this.$nextTick(() => {
          this.handleDom()
        })
      },
      domArr () {
        this.handletTransition()
      },
      number () {
        this.handleClearInterval()
      }
    },
    methods: {
      handleDom () {
        this.domArr = this.$refs.bar
      },
      handletTransition () {
        for (let i = 0; i < this.domArr.length; i++) {
          this.domArr[i].timer = setInterval(() => {
            this.domArr[i].style.height = ++this.number + 'px'
          }, 30)
        }
      },
      handleClearInterval () {
        for (let i = 0; i < this.movement.length; i++) {
          if (this.number === parseInt(this.movement[i].percentage)) {
            clearInterval(this.domArr[i].timer)
          }
          if (this.movement[i].percentage === '0') {
            clearInterval(this.domArr[i].timer)
          }
        }
      }
    }
  }
</script>

<style scoped>
  .data{
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .data-info{
    width: 100%;
    height: 100%;
    background: #e8e7e7;
    border-radius: .1rem;
  }
  .data-top{
    line-height: .6rem;
    height: .6rem;
    padding: 0 .2rem 0 .2rem;
    font-size: .22rem;
  }
  .data-title{
    float: left;
  }
  .data-details{
    float: right;
    color: #3cd191;
  }
  .data-con{
    display: flex;
    text-align: center;
    justify-content: space-around;
  }
  .con-item{
    display: flex;
    height: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .data-process{
    width: .2rem;
    height: 2rem;
    border: 1px solid #666666;
    border-radius: .1rem;
    position: relative;
    color: #333333;
  }
  .data-num{
    color: #00aeed;
  }
  .data-bar{
    width: .2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #00aeed;
    border-radius: .1rem;
  }
</style>