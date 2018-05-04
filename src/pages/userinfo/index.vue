<template>
  <div class="userinfo">
    <user-header></user-header>
  </div>
</template>

<script>
  import UserHeader from './header.vue'
  export default {
    name: 'user-info',
    components: {
      UserHeader
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