<template>
  <div class="index">
    <index-header @change='handleChange'></index-header>
    <index-content v-show='isShow'></index-content>
    <index-step :indexList="indexList" :species='species'></index-step>
    <index-canvas></index-canvas>
  	<install></install>
    <motion-data :movement='movement'></motion-data>
    <bottom></bottom>
  </div>
</template>

<script>
  import axios from 'axios'
  import IndexCanvas from './canvas.vue'
  import IndexHeader from './header.vue'
  import IndexContent from './content.vue'
  import IndexStep from './step.vue'
  import Install from './install'
  import MotionData from './data'
  import Bottom from 'components/common/bottom'
  export default {
    name: 'index',
    data () {
      return {
        indexList: [],
        movement: [],
        species: [],
        isShow: false
      }
    },
    components: {
      IndexHeader,
      IndexStep,
      IndexCanvas,
      Bottom,
      Install,
      MotionData,
      IndexContent
    },
    mounted () {
      axios.get('/static/index.json')
           .then(this.handleIndexAjaxSucc.bind(this))
           .catch(this.handleIndexAjaxErr.bind(this))
    },
    methods: {
      handleIndexAjaxSucc (res) {
        res = (res.data) ? res.data : null
        if (res) {
          this.indexList = res.data.travel
          this.movement = res.data.movement
          this.species = res.data.species
        }
      },
      handleIndexAjaxErr (err) {
        console.log(err)
      },
      handleChange () {
        this.isShow = !this.isShow
      }
    },
    created () {
      document.cookie = 'userid = ' + ''
    }
  }
</script>

<style scoped>
  .index {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>