<template>
  <div class="userinfo">
    <user-header></user-header>
    <user-container></user-container>
  </div>
</template>

<script>
  import UserHeader from './header.vue'
  import UserContainer from './container.vue'
  export default {
    name: 'user-info',
    components: {
      UserHeader,
      UserContainer
    }
  }
</script>

<style scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>