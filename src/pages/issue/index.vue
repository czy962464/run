<template>
  <div class="issue">
    <div class="header">发布动态</div>
    <div class="content">
      <div class="input" >
        <p contenteditable="true" class="input-info" ref="summary" @click="handleFocus" @change="handleDivChange">这一刻你想说的话。。。</p>
        <div class="input-cont">
          <div class="img-box">
            <img src="" alt="" ref="imgshow">
          </div>
          <div class="change">
            <input type="file" class="change-file border" ref="img" @change="handleImgChange" accept="image/*" multiple="multiple" @click="handleFocus"/>
          </div>
        </div>
      </div>
      <div class="link">
        <img src="../../../static/img/link2.png" alt="">
        <input placeholder="请输入标题...." ref="title" @click="handleFocus">
      </div>
      <div class="link">
        <img src="../../../static/img/ding.png" alt="">
        <input type="text" placeholder="请输入您的地址" ref="localtion" @click="handleFocus"> 
      </div>
      <div class="link">
        <img src="../../../static/img/dd.png" alt="">
        <select name="" id="" ref="select" @click="handleFocus">
          <option value="公开">公开</option>
          <option value="仅自己">仅自己</option>
          <option value="仅好友">仅好友</option>
        </select>
      </div>
      <p v-show="isp" class="check">请将信息填完整！</p>
      <div class="btn" @click="handleInputClick">
        即刻发布
      </div>
    </div>
    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
  import Bottom from 'components/common/bottom'
  import axios from 'axios'
  export default {
    name: 'issue',
    data () {
      return {
        sign: '',
        content: '',
        address: '',
        isBtn: false,
        isp: false
      }
    },
    components: {
      Bottom
    },
    methods: {
      getCookie () {
        var strcookie = document.cookie
        var arr = strcookie.split('=')
        if (arr[0] === 'userid') {
          return arr[1]
        }
      },
      handleInputClick () {
        if (this.isBtn) {
          this.sign = this.$refs.title.value
          this.content = this.$refs.summary.innerHTML
          this.address = this.$refs.localtion.value
          if (this.sign && this.content && this.address) {
            let file = this.$refs.img.files[0]
            let data = new FormData()
            data.append('file', file, file.name)
            data.append('img', this.$refs.imgshow.src)
            data.append('userid', 1)
            data.append('sign', this.sign)
            data.append('content', this.content)
            data.append('address', this.address)
            // axios.post('/api/circle/add', {
            //   sign: this.sign,
            //   content: this.content,
            //   address: this.address,
            //   userid: 1
            // })
            const instance=axios.create({
              withCredentials: true
            })
            instance.post('/api/circle/add', data)
            .then((res) => {
              if (res) {
                res = (res.data) ? res.data : null
                if (res.data.add) {
                  this.$router.push('/running')
                }
              }
            })
          } else {
            this.isp = true
          }
        } else {
          this.$router.push('/login')
        }
      },
      handleImgChange (e) {
        var that = e.target
        var that_ = this
        var file = that.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        if (file.name.indexOf('jpg') !== -1 || file.name.indexOf('JPG') !== -1 || file.name.indexOf('PNG') !== -1 || file.name.indexOf('png') !== -1) {
          reader.onload = function (e) {
            that_.$refs.imgshow.src = e.target.result
          }
        } else {
          alert('请选择正确的图片格式！')
        }
      },
      handleFocus () {
        this.isp = false
      },
      handleDivChange (e) {
        console.log(e.target.value)
      }
    },
    mounted () {
      if (!document.cookie.userid) {
        this.isBtn = true
      } else {
        console.log(document.cookie)
        this.isBtn = false
      }
    }
  }
</script>


<style scoped>
  .issue {
    background: #e0e0e0;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .header {
    text-align: center;
    background: #42c69a;
    line-height: .88rem;
    font-size: .32rem;
    color: #fff;
  }
  .content {
    padding: .88rem .4rem 0;
  }
  .input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 4.3rem;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    box-sizing: border-box;
    padding: .4rem;
    font-size: .28rem;
    color: #333;
  }
  .input-cont {
    height: 1.4rem;
  }
  .input-cont .img-box {
    float: left;
    width: 1.4rem;
    height: 1.4rem;
    padding-bottom: 1.4rem;
    margin-right: .2rem;
  }
  .img-box img {
    width: 100%;
    height: 100%;
  }
  .change-file {
    opacity: 0;
    height: 100%;
    width: 100%;
  }
  .change {
    height: 1.4rem;
    width: 1.4rem;
    background: url(../../../static/img/jia.png) no-repeat center;
    background-size: 100%, 100%;
    float: left;
  }
  .link {
    width: 100%;
    height: .8rem;
    background: #fff;
    display: flex;
    margin-top: .2rem;
    align-items: center;
    border-radius: 5px;
    padding: 0 .3rem;
    box-sizing: border-box;
  }
  .link img {
    width: .46rem;
    height: .46rem;
    margin-right: .2rem;
  }
  .link span {
    line-height: .46rem;
    font-size: .24rem;
    color: #333;
  }
  .btn {
    height: .8rem;
    width: 3rem;
    border-radius: 5px;
    background: #42c69a;
    text-align: center;
    line-height: .8rem;
    color: #fff;
    margin: .5rem auto;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .input-info {
    height: 2rem;
    overflow: hidden;
  }
  .check {
    color: red;
    text-align: center;
    margin-top: .4rem;
  }
</style>

