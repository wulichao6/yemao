<template>
  <div class="designer">
    <!--头部导航-->
    <div class="header">
      <span>设计师</span>
      <div class="header-right">
        <span><img src="../../assets/images/designer/ling.png" /></span>
      </div>
    </div>
    <!--模块-->
    <div class="mokuai">
       <ul>
         <li>
           <p>
             <img src="../../assets/images/designer/jianzhusheji.png" />
           </p>
           <p>个人中心</p>
          </li>
        <li>
          <p>
            <img src="../../assets/images/designer/jianzhusheji.png" />
          </p>
          <p>钱包</p>
        </li>
        <li>
          <p>
            <img src="../../assets/images/designer/jianzhusheji.png" />
          </p>
          <p>认证中心</p>
        </li>
        <li>
          <p>
            <img src="../../assets/images/designer/jianzhusheji.png" />
          </p>
          <p>订单</p>
        </li>
      </ul>
    </div>
    <!--智能排序-->
    <div class="sanxuan">
      <div class="sx-cont">
        <ul>
          <li>
            <p class="znpx">智能排序</p>
          </li>
          <li>
            <p class="nx">年限</p>
          </li>
          <li>
            <p class="rz">认证</p>
          </li>
        </ul>
      </div>
    </div>
    <!--设计师列表-->
    <div class="content">
      <div class="sjs-list">
        <div class="sjs-top">
          <div class="st-touxiang">
            <img src="../../assets/images/bj.jpg" />
          </div>
          <div class="st-neirong">
            <div class="sn-top">
              <div class="st-nicheng">设计师小a</div>
              <div class="st-pingxin"></div>
            </div>
            <div class="sn-bottom">
              <div class="sb-nianling">5年</div>
              <div class="sb-qian">签</div>
              <div class="sb-ysm">已实名</div>
              <div class="sb-yrz">已认证</div>
            </div>
          </div>
          <div class="st-jiageleixin">
            <div class="st-jiage"><span>￥</span><span>100</span>/时</div>
            <div class="st-leixin"><span>景观设计</span></div>
          </div>
        </div>
        <div class="sjs-content">
          <div class="sc-jiesao">
            已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成
          </div>
        </div>
        <div class="sjs-bottom">
          <div class="sjs-yysj">应邀设计</div>
          <div class="sjs-mmlt">喵喵聊天</div>
        </div>
      </div>
      <div class="sjs-list">
        <div class="sjs-top">
          <div class="st-touxiang">
            <img src="../../assets/images/bj.jpg" />
          </div>
          <div class="st-neirong">
            <div class="sn-top">
              <div class="st-nicheng">设计师小a</div>
              <div class="st-pingxin"></div>
            </div>
            <div class="sn-bottom">
              <div class="sb-nianling">5年</div>
              <div class="sb-qian">签</div>
              <div class="sb-ysm">已实名</div>
              <div class="sb-yrz">已认证</div>
            </div>
          </div>
          <div class="st-jiageleixin">
            <div class="st-jiage"><span>￥</span><span>100</span>/时</div>
            <div class="st-leixin"><span>景观设计</span></div>
          </div>
        </div>
        <div class="sjs-content">
          <div class="sc-jiesao">
            已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成
          </div>
        </div>
        <div class="sjs-bottom">
          <div class="sjs-yysj">应邀设计</div>
          <div class="sjs-mmlt">喵喵聊天</div>
        </div>
      </div>
      <div class="sjs-list">
        <div class="sjs-top">
          <div class="st-touxiang">
            <img src="../../assets/images/bj.jpg" />
          </div>
          <div class="st-neirong">
            <div class="sn-top">
              <div class="st-nicheng">设计师小a</div>
              <div class="st-pingxin"></div>
            </div>
            <div class="sn-bottom">
              <div class="sb-nianling">5年</div>
              <div class="sb-qian">签</div>
              <div class="sb-ysm">已实名</div>
              <div class="sb-yrz">已认证</div>
            </div>
          </div>
          <div class="st-jiageleixin">
            <div class="st-jiage"><span>￥</span><span>100</span>/时</div>
            <div class="st-leixin"><span>景观设计</span></div>
          </div>
        </div>
        <div class="sjs-content">
          <div class="sc-jiesao">
            已有多年建筑设计工作经验，从事建筑方案到效果图，再到建筑施工图都可以完成
          </div>
        </div>
        <div class="sjs-bottom">
          <div class="sjs-yysj">应邀设计</div>
          <div class="sjs-mmlt">喵喵聊天</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
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
  @import '../../assets/css/designer/designer.css';
</style>
