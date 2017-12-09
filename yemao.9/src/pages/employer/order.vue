<template>
  <div>
    <!--头部导航-->
    <xheader2 @upup="childBubble" :title="title" :rightClass="rightClass"></xheader2>
    <!--<div class="od-heade">-->
      <!--<div class="header-left"><img src="images/back.png" /></div>-->
      <!--<span>订单详情</span>-->
      <!--<div class="header-right"></div>-->
    <!--</div>-->
    <!--主体内容-->
    <div class="od-condent">
      <!--订单确认后详情页-->
      <div class="ddxq">
        <div class="ddxq-top">
          <div class="ddxq-img" :style="cover" @click="toUrl('emporderimgs')">
            <div class="num">5</div>
          </div>
          <div class="ddxq-jianjie">
            <div class="jianjie-top">
              已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成
            </div>
            <div class="jianjie-bottom">
              <div class="db-mianji"><span>建筑设计</span>/<span class="mianji">500</span><span class="mianji">m²</span></div>
              <div class="db-yushuan"><span>预算</span><span class="jiage">￥</span><span class="jiage">50000</span></div>
            </div>
          </div>
        </div>
        <div class="ddxq-list">
          <div class="ddxq-box">
            <div class="box-left">
              <span><img src="images/leixin.png"/></span><span>预计完成：</span>
            </div>
            <div class="box-right">
              <span>2017-05-24</span>
            </div>
          </div>
          <div class="ddxq-box">
            <div class="box-left">
              <span><img src="images/leixin.png"/></span><span>交易状态：</span>
            </div>
            <div class="box-right">
              <span>建筑设计</span>
            </div>
          </div>
          <div class="ddxq-box">
            <div class="box-left">
              <span><img src="images/leixin.png"/></span><span>设计深度：</span>
            </div>
            <div class="box-right">
              <span>方案</span>
            </div>
          </div>
          <div class="ddxq-box" style="border: none;">
            <div class="box-left">
                <span><img src="images/leixin.png"/></span><span>工时：</span>
            </div>
            <div class="box-right">
              <span>20小时</span>
            </div>
          </div>
        </div>
        <div class="ddxq-bottom">
          <div class="biaoqi">订单详情</div>
          <div class="neirong">
            <span>已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成，已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成 ，再到建筑施工图都可以完成，已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成 已有多年建筑设计工作经验，从事建筑方案到效果图</span>
          </div>
          <div class="chakangengduo">点击查看更多</div>
        </div>
      </div>
      <!--抢单列表设计师-->
      <div class="od-renshu">
        <div class="tu"></div>
        <p>已有<span>3</span>位设计师抢单</p>
        <div class="gengduo" @click="toUrl('emporderparts')"></div>
      </div>
      <div class="od-list">
        <div class="qdsjs-list">
          <div class="qdsjs-time">
            <p>2017-10-10</p>
          </div>
          <div class="qdsjs-box">
            <div class="qb-top">
              <div class="qt-touxiang">
                <img src='../../assets/images/bj.jpg'>
              </div>
              <div class="qt-nichen">
                <span>设计师小A</span>
              </div>
              <div class="chat"></div>
              <div class="qt-jiage">
                <div class="qt-time"><span>20小时</span></div>
                <div class="qt-jingqian"><span>￥</span><span>5000</span></div>
              </div>
            </div>
            <div class="qb-content">
              已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成 再到建筑施工图都可以完成，再到建筑施工图都可以完成，再到建筑施工图都可以完成，

            </div>
            <div class="qb-botton">
              选择设计师
            </div>
          </div>
        </div>
        <div class="qdsjs-list">
          <div class="qdsjs-time">
            <p>2017-10-10</p>
          </div>
          <div class="qdsjs-box">
            <div class="qb-top">
              <div class="qt-touxiang">
                <img src='../../assets/images/bj.jpg'>
              </div>
              <div class="qt-nichen">
                <span>设计师小B</span>
              </div>
              <div class="chat"></div>
              <div class="qt-jiage">
                <div class="qt-time"><span>20小时</span></div>
                <div class="qt-jingqian"><span>￥</span><span>5000</span></div>
              </div>
            </div>
            <div class="qb-content">
              已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成 再到建筑施工图都可以完成，再到建筑施工图都可以完成，再到建筑施工图都可以完成，

            </div>
            <div class="qb-botton">
              选择设计师
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="od-botton">
      <div class="mmliaotian">
        <span>喵喵聊天</span>
      </div>
      <div class="lijiqiangdan">立即抢单</div>
    </div>
  </div>
</template>

<script>
  import xheader2 from '../../components/header/xheader2.vue'
  export default {
    components: {
      xheader2
    },
    data () {
      return {
        title: '订单详情',
        rightClass: 'collect',
        cover: {
          backgroundImage: 'url(' + require('../../assets/images/bj.jpg') + ')'
        }
      }
    },
    methods: {
      toUrl: function (pagename) {
        this.$router.push({name: pagename})
      },
      childBubble: function (flag) {
        // 子组件与父组件通信
        // console.log('flag:' + flag)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/employer/order.css';
</style>
