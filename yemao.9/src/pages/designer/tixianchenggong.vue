<template>
  <div >
    <!--头部导航-->
    <div class="header">
      <span>提现成功</span>
    </div>
    <!--发布订单内容-->
    <div class="content">
      <div class="cgzt">
        <div class="tupiao">
          <img src="../../../static/images/designer/txcg.png" />
        </div>
        <div class="wzsm">
          等待设计师接单
        </div>
      </div>
      <div class="anniu">
        <div class="fhsy"@click="toUrl('index')">
          返回首页
        </div>
        <div class="ckdd"@click="toUrl('myorderchuli')">
          查看订单
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
  @import '../../assets/css/designer/tixianchenggong.css';
</style>
