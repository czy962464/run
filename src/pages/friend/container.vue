<template>
  <div class="friend-con">
    <ul>
      <li class="con-item" v-for='item in friend' :key='item.id'>
        <div class="tou">
          <img src="../../../static/img/tou1.jpg" alt="">
        </div>
        <div class="title">
          <h3>{{item.nickname}}</h3>
          <p>{{item.signature}}</p>
        </div>
        <button class="delete" @click='handleDeleteBtn(item.username)'>删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'friend-con',
    props: {
      friend: Array
    },
    methods: {
      handleDeleteBtn (username) {
        this.$emit('delete', username)
      }
    }
  }
</script>

<style scoped>
  .con-item{
    margin-top: .2rem;
    height: 1rem;
    width: 100%;
    background: #eee;
    display: flex;
    align-items: center;
    border-radius: .3rem;
    position: relative;
  }
  .tou{
    margin-left: .2rem;
    width: .8rem;
    height: .8rem;
  }
  .tou img{
    width: 100%;
  }
  .title{
    margin-left: .2rem;
  }
  .title h3{
    font-size: .4rem;
    margin-bottom: .1rem;
  }
  .title p{
    font-size: .2rem;
  }
  .delete{
    position: absolute;
    right: .6rem;
    width: 1rem;
    height: .6rem;
    border-radius: .2rem;
    background: red;
    color: #ffffff;
  }
</style>