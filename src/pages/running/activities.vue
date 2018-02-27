<template>
  <div class="activity">
    <div class="act-img">
      <img class="act-bg" src="../../../static/img/runactive.jpg">
    </div>
    <div class="act-list">
      <div class="act-item" 
          v-for='(item, index) in list'
          :class="{'act-active': item.show}" 
          @click='handleActiveClick(index)'
          :key='item.id'>
      </div>
    </div>
  </div>
</template>

<script>
  let obj = [
          {'show': true},
          {'show': false},
          {'show': false}
  ]
  export default {
    name: 'run-activity',
    data () {
      return {
        list: obj
      }
    },
    methods: {
      handleActiveClick: function (index) {
        for (var i = 0; i < this.list.length; i++) {
          this.list[i].show = false
          if (i === index) {
            this.list[index].show = true
          }
        }
        this.$emit('change', index)
      }
    }
  }
</script>

<style scoped>
  .activity{
    height: 0;
    padding-bottom: 3rem;
    background: #1d1e2d;
    position: relative;
  }
  .act-bg{
    width: 100%;
    height: 3rem;
  }
  .act-list{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    padding: 0 .93rem;
    justify-content: space-between;
  }
  .act-item{
    width: 1.4rem;
    height: 100%;
  }
  .act-active{
    border-bottom: .04rem solid #42c69a;
  }
</style>