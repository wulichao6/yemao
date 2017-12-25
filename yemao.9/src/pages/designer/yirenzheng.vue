<template>
  <div >
    <!--头部导航-->
    <div class="header">
      <div class="header-left"@click="goback"><img src="../../../static/images/back.png" /></div>
      <span>平台认证</span>
    </div>
    <div class="content">
      <div class="cgzt">
        您已通过平台认证
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
