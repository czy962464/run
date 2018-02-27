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
    }
  }
</script>

<style scoped>
</style>