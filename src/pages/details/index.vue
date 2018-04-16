<template>
  <div class="index">
    <details-header></details-header>
    <introduce></introduce>
    <project></project>
    <activity></activity>
    <contact></contact>
    <detail-bottom></detail-bottom>
  </div>
</template>

<script>
  import axios from 'axios'
  import DetailsHeader from './header'
  import Introduce from './introduce'
  import Project from './project'
  import Activity from './activity'
  import Contact from './contact'
  import DetailBottom from './bottom'
  export default {
    name: 'details-index',
    components: {
      DetailsHeader,
      Introduce,
      Project,
      Activity,
      Contact,
      DetailBottom
    },
    create () {
      this.getAxios()
    },
    activated () {
      this.getAxios()
    },
    methods: {
      getAxios () {
        axios.get('/api/circle/detail?id=' + this.$route.query.id)
            .then(this.handleGetDetailSucc.bind(this))
            .catch(this.handleGetDetailErr.bind(this))
      },
      handleGetDetailSucc (res) {
        console.log(res)
      },
      handleGetDetailErr () {
        console.log('error')
      }
    }
  }
</script>

<style scoped>
</style>