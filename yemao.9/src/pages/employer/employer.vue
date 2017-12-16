<template>
  <div class="employer" style="background: #f2f2f2">
    <!--头部导航-->
    <div class="header">
      <span>雇主</span>
      <div class="header-right"@click="toUrl('message')">
        <img src="../../../static/images/employer/ling.png" />
      </div>
    </div>
    <!--状态模块-->
    <div class="gu-mokuai">
      <div class="dingdan"@click="toUrl('fabudingdan')">
        发 布 项 目
      </div>
      <div class="shouchang"@click="toUrl('myorderchuli')">
        我 的 订 单
      </div>
    </div>
    <!--智能排序-->
    <div class="id-znpx">
      <div class="xian">
        <p>智能排序</p>
      </div>
      <div class="area">
        <ul>
          <li>不限</li>
          <li>时间排序</li>
          <li>价格排序</li>
          <li>类型排序</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="gz-list"@click="toUrl('emporder')">
        <div class="gz-top">
          <div class="gz-touxiang">
            <img src="../../../static/images/bj.jpg" />
          </div>
          <div class="gz-nicheng">雇主小a</div>
          <div class="gz-jiage"><span>￥</span><span>5000</span></div>
        </div>
        <div class="gz-timeleixin">
          <div class="gz-time"><span><img src="../../../static/images/index/time.png"/></span><span>七天后过期</span></div>
          <div class="gz-leixin"><span>家装设计</span></div>
        </div>
        <div class="gz-content">
          <div class="tupian">
            <div class="tu"><img src="../../../static/images/bj.jpg" /></div>
            <div class="tu"><img src="../../../static/images/bj.jpg" /></div>
            <div class="tu"><img src="../../../static/images/bj.jpg" /></div>
          </div>
          <div class="wenzhi">
            actocad制图问题解答，帮忙制图，报价根据工程量或人工制定。
          </div>
        </div>
        <div class="gz-bottom">
          <div class="gb-left">
            <div class="gb-tu">
              <img src="../../../static/images/bj.jpg" />
            </div>
            <div class="gb-tu">
              <img src="../../../static/images/bj.jpg" />
            </div>
            <div class="gb-tu">
              <img src="../../../static/images/bj.jpg" />
            </div>
            <div class="gb-wz">3人抢单</div>
          </div>
          <div class="gb-right">
            <div class="gb-ljqd">立即抢单</div>
          </div>
        </div>
      </div>
      <div class="gz-list"@click="toUrl('emporder')">
        <div class="gz-top">
          <div class="gz-touxiang">
            <img src="../../../static/images/bj.jpg" />
          </div>
          <div class="gz-nicheng">雇主小a</div>
          <div class="gz-jiage"><span>￥</span><span>5000</span></div>
        </div>
        <div class="gz-timeleixin">
          <div class="gz-time"><span><img src="../../../static/images/index/time.png"/></span><span>七天后过期</span></div>
          <div class="gz-leixin"><span>家装设计</span></div>
        </div>
        <div class="gz-content">
          <div class="tupian">
            <div class="tu"><img src="../../../static/images/bj.jpg" /></div>
            <div class="tu"><img src="../../../static/images/bj.jpg" /></div>
            <div class="tu"><img src="../../../static/images/bj.jpg" /></div>
          </div>
          <div class="wenzhi">
            actocad制图问题解答，帮忙制图，报价根据工程量或人工制定。
          </div>
        </div>
        <div class="gz-bottom">
          <div class="gb-left">
            <div class="gb-tu">
              <img src="../../../static/images/bj.jpg" />
            </div>
            <div class="gb-tu">
              <img src="../../../static/images/bj.jpg" />
            </div>
            <div class="gb-tu">
              <img src="../../../static/images/bj.jpg" />
            </div>
            <div class="gb-wz">3人抢单</div>
          </div>
          <div class="gb-right">
            <div class="gb-ljqd">立即抢单</div>
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
      this.znpx();
    },
    methods: {
      cgLink: function (param) {
        this.$router.push({name: param.pagename})
      },
      toUrl: function (pagename) {
        this.$router.push({name: pagename})
      },
      //智能排序
      znpx(){
        $('.xian').click(function() {
          var $t = $(".xian p");
          if($t.hasClass('up')) {
            $(".xian p").removeClass('up');
            $('.area').css('display', 'none');
          } else {
            $(".xian p").removeClass('up');
            $('.area').css('display', 'block');
            $(".xian p").addClass('up');
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/public/public.css";
  @import '../../assets/css/employer/guzhu.css';
  .gu-mokuai .dingdan {
    background: url('../../../static/images/fabubj.png');
    background-size: 100% 100%;
  }
  .gu-mokuai .shouchang {
    background: url('../../../static/images/dingdanbj.png');
    background-size: 100% 100%;
  }
</style>
