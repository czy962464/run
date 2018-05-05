<template>
  <div class="bottom border-top">
    <div class="item" v-for="(item, index) in list" :class="{'item-active': item.show}" @click='handleRouter(index)' :key='item.id'>
      <div class="item-img">
        <img class="img" :src="item.img">
      </div>
      {{item.tab}}
    </div>
  </div>
</template>
<script>
  let obj = [
          {'tab': '动起来', 'show': true, 'img': '../../../static/img/bottom1.jpg'},
          {'tab': '奔跑圈', 'show': false, 'img': '../../../static/img/bottom3.png'},
          {'tab': '发布', 'show': false, 'img': '../../../static/img/bottom3.png'},
          {'tab': '休息区', 'show': false, 'img': '../../../static/img/bottom4.png'},
          {'tab': '关于我', 'show': false, 'img': '../../../static/img/bottom5.png'}
  ]
  export default {
    name: 'bottom',
    data () {
      return {
        list: obj
      }
    },
    methods: {
      handleRouter (index) {
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].show = false
          this.list[i].img = '../../../static/img/bottom' + (i + 1) + '.png'
          if (i === index) {
            this.list[index].show = true
            this.list[index].img = '../../../static/img/bottom' + (i + 1) + '.jpg'
          }
        }
        index === 0 && this.$router.push({ path: '/' })
        index === 1 && this.$router.push({ path: '/running' })
        index === 2 && this.$router.push({ path: '/issue' })
        index === 3 && this.$router.push({ path: '/rest' })
        index === 4 && this.$router.push({ path: '/about' })
      },
      handleIsRouter () {
        let location = window.location
        location.href.split('#/')[1] === '' && this.handleRouter(0)
        location.href.split('#/')[1] === 'running' && this.handleRouter(1)
        location.href.split('#/')[1] === 'issue' && this.handleRouter(2)
        location.href.split('#/')[1] === 'rest' && this.handleRouter(3)
        location.href.split('#/')[1] === 'about' && this.handleRouter(4)
      }
    },
    created () {
      this.handleIsRouter()
    },
    activated () {
      this.handleIsRouter()
    }
  }
</script>

<style>
  .bottom{
    z-index: 1;
    display: flex;
    height: .98rem;
    background: #fff; 
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .item{
    flex: 1;
    text-align: center;
    font-size: .24rem;
    color: #666666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item-img{
    height: 0.48rem;
    margin-bottom: .08rem;
  }
  .img{
    height: 100%
  }
  .item-active{
    color: #3cd191;
  }
</style>