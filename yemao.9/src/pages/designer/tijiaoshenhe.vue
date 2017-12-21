<template>
  <div >
    <!--头部导航-->
    <div class="header">
      <div class="header-left"@click="goback"><img src="../../../static/images/back.png" /></div>
      <span>平台认证</span>
      <div class="header-right">完成</div>
    </div>
    <div class="content">
      <!--流程-->
      <div class="banner">

      </div>
      <div class="ys-time">
        <div class="qdtime">
          <div class="qdtime-left">
            <span>职称证书</span>
          </div>
          <div class="qdtime-right">
            <input type="text" placeholder="请输入证件名称" />
          </div>
        </div>
      </div>
      <div class="cgzt">
        <div class="tupiao">
        </div>
        <div class="wzsm">
          <p>上传成功</p>
          <p class="sz">等待审核，期待你成为最好的设计师</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    mounted: function () {
    },
    methods: {
      goback(){
        this.$router.goBack();
      },
      toUrl: function (pagename) {
        this.$router.push({name: pagename})
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/designer/pingtairenzheng.css';
</style>
