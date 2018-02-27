<template>
  <div class="index-canvas">
    <canvas class="canvas" ref="canvas" width="250" height="250"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'index-step',
    mounted () {
      let ctx = this.$refs.canvas.getContext('2d')
      ctx.save()
      ctx.translate(125, 125)
      ctx.rotate((45 / 180) * Math.PI)
      var angle = (6 / 180) * Math.PI
      for (var i = 0; i < 44; i++) {
        ctx.beginPath()
        ctx.rotate(angle)
        ctx.moveTo(0, 100)
        ctx.lineTo(0, 115)
        ctx.lineCap = 'round'
        ctx.lineWidth = '6'
        ctx.strokeStyle = '#3cd191'
        ctx.stroke()
      }
      ctx.restore()
    }
  }
</script>

  <style scoped>
  .canvas {
    position: absolute;
    top: 3.8rem;
    left: 50%;
    margin-top: -125px;
    margin-left: -125px;
    height: 250px;
  }
</style>