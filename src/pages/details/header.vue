<template>
  <div class="header">
    <img src="../../../static/img/detailsheader.png" class="header-img">
    <div class="back">
      <img src="../../../static/img/detailsback.png" class="back-img" @click='handleToRunning'>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'details-header',
    methods: {
      handleToRunning () {
        this.$router.push('/running')
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 4.52rem;
    position: relative;
  }
  .header-img{
    width: 100%;
    height: 100%;
  }
  .back{
    width: .42rem;
    height: .42rem;
    position: absolute;
    top: .23rem;
    left: .21rem;
  }
  .back-img{
    height: 100%;
  }
</style>