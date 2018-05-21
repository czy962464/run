<template>
  <div class="index">
    <rest-header v-on:change="handleChangeVideo"></rest-header>
    <rest-video :videoList="videoList" v-show='flagVideo'></rest-video>
    <rest-recreation :reaVideo="reaVideo" :reaList="reaList" v-show='flagRea'></rest-recreation>
    <recommend :reaList='reaList' v-show='flagCom'></recommend>
    <regimen :reaList='reaList' v-show='flagMen'></regimen>
    <amusement :reaVideo="reaVideo" :reaList="reaList" v-show='flagAmu'></amusement>
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
  import Regimen from './regimen.vue'
  import Amusement from './amusement.vue'
  export default {
    name: 'rest',
    data () {
      return {
        videoList: [],
        reaList: [],
        reaVideo: {},
        flagVideo: false,
        flagRea: false,
        flagCom: true,
        flagMen: false,
        flagAmu: false
      }
    },
    components: {
      RestHeader,
      RestVideo,
      RestRecreation,
      Recommend,
      RestBottom,
      Regimen,
      Amusement
    },
    mounted () {
      console.log('res')
      axios.get('/api/res/lis')
           .then(this.handleSuccessRest.bind(this))
           .catch(this.handleErrorRest.bind(this))
      // axios.get('/api/rest.json')
      //      .then(this.handleSuccessRest.bind(this))
      //      .catch(this.handleErrorRest.bind(this))
    },
    methods: {
      handleSuccessRest (res) {
        console.log(res)
        let ret = (res.data) ? (res = res.data) : res
        ret && (this.videoList = ret.data.video)
        ret && (this.reaList = ret.data.reaList)
        this.reaVideo = ret.data.reaList[0]
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
            this.flagMen = false
            this.flagAmu = false
            break
          case 1:
            this.flagVideo = true
            this.flagRea = false
            this.flagCom = false
            this.flagMen = false
            this.flagAmu = false
            break
          case 2:
            this.flagVideo = false
            this.flagRea = true
            this.flagCom = false
            this.flagMen = false
            this.flagAmu = false
            break
          case 3:
            this.flagVideo = false
            this.flagRea = false
            this.flagCom = false
            this.flagMen = true
            this.flagAmu = false
            break
          case 4:
            this.flagVideo = false
            this.flagRea = false
            this.flagCom = false
            this.flagMen = false
            this.flagAmu = true
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