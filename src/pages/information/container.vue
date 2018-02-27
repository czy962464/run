<template>
  <div class="container">
    <div>
      <div class="con-info border-bottom"> 
          <h1 class="title">{{reaList.title}}</h1>
          <p>{{reaList.time}}&nbsp;&nbsp;{{reaList.author}}</p>
      </div>
      <div class="con-desc">
        <div class="con-main" v-html='reaList.container'>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info-contanier',
    props: {
      reaList: Object
    }
  }
</script>

<style scoped>
  .con-info{
    font-size: 12px;
    overflow: hidden;
    padding: 0 .427rem .4rem;
    border-bottom: 1px solid #eee;
    background: #fff;
  }
  .title{
    color: #000;
    font-size: 20px;
    font-weight: 700;
    padding: .4rem 0;
  }
  .con-desc{
    position: relative;
    color: #333;
    font-size: 18px;
    line-height: 30px;
    padding: .4rem .427rem;
  }
  .con-desc .con-desc img{
    width: 100%!important;
  }
</style>