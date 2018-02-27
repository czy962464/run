<template>
  <div class="index-rest" ref="scroller">
    <div>
      <div class="content" v-for="item in videoList" :key="item.id">
        <video :src="item.videoUrl" class="video" controls :poster="item.imgUrl"></video>
        <div class="desc">
          <p>{{item.style}}</p>
          <p>{{item.author}}</p>
          <p>评论{{item.comment}}</p>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'index-video',
    props: {
      videoList: Array
    },
    watch: {
      videoList () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller, {
        probeType: 3
      })
    }
  }
</script>

<style scoped>
  .index-rest {
    flex: 1;
    background: #fff;
    overflow: hidden;
    margin: .2rem;
  }
  .content {
    padding: .2rem .3rem;
    border-bottom: 1px solid #000;
  }
  .video {
    width: 100%;
  }
  .desc {
    display: flex;
    font-size: .12rem;
    color: #000;
  }
  .desc p {
    line-height: .4rem;
    margin-left: .3rem;
  }
</style>