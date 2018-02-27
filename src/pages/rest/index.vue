<template>
  <div class="index">
    <rest-header v-on:change="handleChangeVideo"></rest-header>
    <rest-video :videoList="videoList" v-show='flagVideo'></rest-video>
    <rest-recreation :reaVideo="reaVideo" :reaList="reaList" v-show='flagRea'></rest-recreation>
    <recommend :reaList='reaList' v-show='flagCom'></recommend>
    <rest-bottom></rest-bottom>
  </div>
</template>

<script>
  import axios from 'axios'
  import RestHeader from 'components/common/header.vue'
  import RestBottom from 'components/common/bottom.vue'
  import RestRecreation from './recreation.vue'
  import RestVideo from './video.vue'
  import Recommend from './recommend.vue'
  export default {
    name: 'rest',
    data () {
      return {
        videoList: [],
        reaVideo: {},
        reaList: [],
        flagVideo: false,
        flagRea: false,
        flagCom: true
      }
    },
    components: {
      RestHeader,
      RestVideo,
      RestRecreation,
      Recommend,
      RestBottom
    },
    mounted () {
      axios.get('/api/rest/list')
           .then(this.handleSuccessRest.bind(this))
           .catch(this.handleErrorRest.bind(this))
      // axios.get('/static/rest.json')
      //      .then(this.handleSuccessRest.bind(this))
      //      .catch(this.handleErrorRest.bind(this))
    },
    methods: {
      handleSuccessRest (res) {
        let ret = (res.data) ? (res = res.data) : res
        ret && (this.videoList = ret.data.video)
        ret && (this.reaVideo = ret.data.reaVideo)
        ret && (this.reaList = ret.data.reaList)
      },
      handleErrorRest (err) {
        console.log(err)
      },
      handleChangeVideo (index) {
        switch (index) {
          case 0:
            this.flagVideo = false
            this.flagRea = false
            this.flagCom = true
            break
          case 1:
            this.flagVideo = true
            this.flagRea = false
            this.flagCom = false
            break
          case 2:
            this.flagVideo = false
            this.flagRea = true
            this.flagCom = false
            break
        }
      }
    }
  }
</script>

<style scoped>
  .index {
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background: #eeeeee;
    display: flex;
    flex-direction: column;
  }
</style>