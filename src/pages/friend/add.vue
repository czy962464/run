<template>
  <div class="friend-con">
    <ul>
      <li class="con-item" v-for='item in nofriend' :key='item.id'>
        <div class="tou">
          <img src="../../../static/img/tou1.jpg" alt="">
        </div>
        <div class="title">
          <h3>{{item.nickname}}</h3>
          <p>{{item.signature}}</p>
        </div>
        <button class="add" @click='handleAddBtn(item.username)'>添加</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'friend-con',
    props: {
      nofriend: Array
    },
    methods: {
      handleAddBtn (username) {
        this.$emit('add', username)
      }
    },
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
  .add{
    position: absolute;
    right: .6rem;
    width: 1rem;
    height: .6rem;
    border-radius: .2rem;
    background: #42c69a;
    color: #ffffff;
  }
</style>