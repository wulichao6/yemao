<template>
  <div class="">
    <div class="header">
      <div class="header-left" @click="goback"><img src="../../assets/images/index/back.png"/></div>
      <span>订单评价</span>
      <div class="header-right">完成</div>
    </div>
    <!--评价内容-->
    <div class="pj-content">
      <div class="pc-top">
        <div class="pt-tu"><img src="../../assets/images/bj.jpg"></div>
        <div class="pt-nichen"><span>昵称</span></div>
      </div>
      <!--星星评分-->
      <div class="pc-xing">
        <!--<div id="QuacorGrading" class="demo">-->
          <!--<input name="1" type="button" />-->
          <!--<input name="2" type="button" />-->
          <!--<input name="3" type="button" />-->
          <!--<input name="4" type="button" />-->
          <!--<input name="5" type="button" />-->

        </div>
      </div>
      <!--留言-->
      <div class="pc-shuru">
        <textarea class="area" maxlength="200" placeholder="对作品还满意吗？"></textarea>
        <p class="xianzhi"><span class="zs">100</span>/<span>100</span></p>
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
  @import "../../assets/css/employer/order-pingjia.css";
</style>
