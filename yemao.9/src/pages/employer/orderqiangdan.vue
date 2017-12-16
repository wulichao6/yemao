<template>
  <div class="">
    <div class="header">
      <div class="header-left" @click="goback"><img src="../../../static/images/index/back.png"/></div>
      <span>填写抢单信息</span>
    </div>
    <!--  信息表-->
    <div class="oq-content">
      <div class="oq-list">
        <div class="oq-left"><span>我的报价</span></div>
        <div class="oq-right"><input type="text" placeholder="请输入价格" /></div>
      </div>
      <div class="oq-list">
        <div class="oq-left"><span>任务时长</span></div>
        <div class="oq-right"><input type="text" placeholder="请输入时间" /></div>
      </div>
      <div class="fangan">
        <div class="tle"><span>方案说明</span></div>
        <textarea class="xt-txt" placeholder="详细描述一下方案的内容"></textarea>
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
  @import "../../assets/css/public/public.css";
  @import "../../assets/css/employer/order-qiangdan.css";
</style>
