<template>
  <div class="index">
    <run-header></run-header>
    <activity @change='handleChangeTab'></activity>
    <my-zone :circleInfo='circleInfo' v-show='flagCir' ref="myZone"></my-zone>
    <hot v-show='flagHot'></hot>
    <topic v-show="flagTopic"></topic>
    <bottom></bottom> 
  </div>
</template>

<script>
  import axios from 'axios'
  import Bottom from 'components/common/bottom.vue'
  import RunHeader from './header.vue'
  import MyZone from './myzone.vue'
  import Activity from './activities.vue'
  import Hot from './hot.vue'
  import Topic from './topic.vue'
  export default {
    name: 'running',
    data () {
      return {
        circleInfo: [],
        flagHot: true,
        flagCir: false,
        flagTopic: false
      }
    },
    components: {
      Bottom,
      RunHeader,
      MyZone,
      Activity,
      Hot,
      Topic
    },
    mounted () {
      axios.get('/api/circle/list')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      // axios.get('/static/running.json')
      //     .then(this.handleGetDataSucc.bind(this))
      //     .catch(this.handleGetDataErr.bind(this))
    },
    methods: {
      handleGetDataSucc (res) {
        console.log(res)
        res = (res.data) ? res.data : null
        if (res) {
          this.circleInfo = res.other
        }
      },
      handleGetDataErr () {
        console.log('error')
      },
      handleChangeTab (index) {
        switch (index) {
          case 0 :
            this.flagHot = true
            this.flagCir = false
            this.flagTopic = false
            break
          case 1 :
            this.flagCir = true
            this.flagHot = false
            this.flagTopic = false
            break
          case 2 :
            this.flagTopic = true
            this.flagHot = false
            this.flagCir = false
            break
        }
        this.$refs.myZone.ref()
      },
      activited () {
        axios.get('/api/circle/list')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      }
    }
  }
</script>

<style scoped>
  .index {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
</style>