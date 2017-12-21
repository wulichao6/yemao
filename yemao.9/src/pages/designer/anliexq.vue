<template>
  <div >
    <!--头部导航-->
    <div class="header">
      <div class="header-left"@click="goback"><img src="../../../static/images/back.png" /></div>
      <span>案列详情</span>
      <div class="header-right">删除</div>
    </div>
    <!--详情内容-->
    <div class="content">
      <div class="xc-top">
        <div class="touxiang">

        </div>
        <p>工作室</p>
        <div class="shijian">
          2017-01-01
        </div>
      </div>
      <div class="xc-banner">

      </div>
      <div class="gkrs">
        <div class="zhan">
          <span></span><span>800</span>
        </div>
        <div class="guankan">
          <span></span><span>200</span>
        </div>
      </div>
      <div class="xqjs">
        <div class="smjs">
          Westmoreland公园凉亭，美国达拉斯 / Murray Legge Architecture
        </div>
      </div>
      <!--评价内容-->
      <div class="pingjia-list">
        <div class="gzpj-list">
          <div class="pl-top">
            <div class="touxiang">

            </div>
            <p>雇主昵称</p>
          </div>
          <div class="pl-content">
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。
          </div>
          <div class="pl-bottom">
            <div class="shijian">
              2017-12-23 8:35
            </div>
            <div class="pingfen">

            </div>
          </div>
        </div>
        <div class="ygpj-list">
          <div class="ygpj-top">
            <div class="touxiang">

            </div>
            <p>游客昵称</p>
            <div class="shijian">
              2017-12-23 08:23
            </div>
          </div>
          <div class="ygpj-content">
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。
          </div>
        </div>
        <div class="ygpj-list">
          <div class="ygpj-top">
            <div class="touxiang">

            </div>
            <p>游客昵称</p>
            <div class="shijian">
              2017-12-23 08:23
            </div>
          </div>
          <div class="ygpj-content">
            如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。
          </div>
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
  @import '../../assets/css/designer/anliexq.css';
</style>
