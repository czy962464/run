<template>
    <div class="amap-page-container">
      <div class="amap-header">
        <i class="iconfont back" @click='handleBackIndex'>&#xe610;</i>
        地图
      </div>
      <el-amap vid="amap"  :zoom="zoom" :plugin="plugin" class="amap-demo" :center="center">
        <el-amap-polygon v-for="(polygon, index) in polygons" :vid="index" :ref="`polygon_${index}`" :path="polygon.path" :events="polygon.events"></el-amap-polygon>
      </el-amap>
      <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div>
    </div>
  </template>

  <script>
    module.exports = {
      data () {
        let self = this
        let arr = []
        let brr = []
        return {
          zoom: 14,
          center: [117.13736, 36.197646],
          lng: 0,
          lat: 0,
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init (o) {
                // o 是高德地图定位插件实例
                  o.getCurrentPosition((status, result) => {
                    if (result && result.position) {
                      timer = setInterval(function(){
                        self.lng = result.position.lng
                        self.lat = result.position.lat
                        self.center = [self.lng, self.lat]
                        self.loaded = true
                        arr = [self.lng, self.lat]
                        brr.push(arr)
                        self.$nextTick()
                        console.log(self.lng)
                      },1000)
                    }
                  })
              }
            }
          }, {
            pName: 'Scale',
            events: {
              init (instance) {}
            }
          }, {
            pName: 'ToolBar',
            ruler: true,
            direction: true,
            liteStyle: false,
            events: {
              init (instance) {
                console.log(instance)
              }
            }
          }],
          polygons: [
            {
              path: brr
            }
          ]
        }
      },
      methods: {
        handleBackIndex () {
          clearInterval(timer)
          this.$router.push('/')
        }
      }
    }
</script>

<style scoped>
  .amap-header{
    height: .88rem;
    background: #42c69a;
    line-height: .88rem;
    text-align: center;
    color: #fff;
    font-size: .34rem;
  }
  .amap-demo {
    height: 300px;
  }
  .back{
    position: absolute;
    left: .3rem;
    top: 0;
    bottom: 0;
    line-height: .88rem;
    font-size: .4rem;
  }
</style>
<style>
  .amap-geolocation-con, .amap-locate-loading{
    top: 0.5rem!important;
  }
</style>