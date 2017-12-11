<template>

  <div id="page">
    <!--banner-->
    <div class="index-banner">
      <!--轮播-->
      <swiper loop auto height="4rem" :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
      <!--搜索栏-->
      <div class="id-header">
        <!--地区选择-->
        <div class="crity">
          <group>
            <x-address raw-value :list="addressData" hide-district value-text-align="right"v-model="value3"></x-address>
          </group>
        </div>
        <div class="id-xiaoxi"@click="toUrl('message')">
          <img src="../../assets/images/index/ling.png" />
        </div>
        <div class="id-sousuo"@click="toUrl('search')">
          <img src="../../assets/images/index/search.png" />
        </div>
      </div>
    </div>
    <!--功能列表-->
    <div class="id-list">
      <div class="list-box"@click="toUrl('leibie')">
        <div class="lb-img">
          <img src="../../assets/images/index/chehua.png" />
        </div>
        <p>策划</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/guihua.png" />
        </div>
        <p>规划</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/jianzhusheji.png" />
        </div>
        <p>建筑设计</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/jiegou.png" />
        </div>
        <p>结构</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/jipaishui.png" />
        </div>
        <p>给排水</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/dianqi.png" />
        </div>
        <p>电气</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/nuantong.png" />
        </div>
        <p>暖通</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/jingguan.png" />
        </div>
        <p>景观</p>
      </div>
      <div class="list-box">
        <div class="lb-img">
          <img src="../../assets/images/index/shinei.png" />
        </div>
        <p>室内设计</p>
      </div>
      <div class="list-box"@click="toUrl('fenlei')">
        <div class="lb-img">
          <img src="../../assets/images/index/qunab.png" />
        </div>
        <p>全部</p>
      </div>
    </div>
    <div class="gap-line"></div>
    <!--文字滚动广告-->
    <div class="wzgd-box">
      <swiper loop auto height="45px" direction="vertical" :interval=1000 class="text-scroll" :show-dots="false">
        <swiper-item>
          <div class="notice-img"><img class="notice-img" src="../../assets/images/bj.jpg" /></div>
          <div class="notice-text">我滚了0</div>
        </swiper-item>
        <swiper-item>
          <div class="notice-img"><img class="notice-img" src="../../assets/images/bj.jpg" /></div>
          <div class="notice-text">我滚了1</div>
        </swiper-item>
        <swiper-item>
          <div class="notice-img"><img class="notice-img" src="../../assets/images/bj.jpg" /></div>
          <div class="notice-text">我滚了2</div>
        </swiper-item>
        <swiper-item>
          <div class="notice-img"><img class="notice-img" src="../../assets/images/bj.jpg" /></div>
          <div class="notice-text">我滚了3</div>
        </swiper-item>
        <swiper-item>
          <div class="notice-img"><img class="notice-img" src="../../assets/images/bj.jpg" /></div>
          <div class="notice-text">我滚了4</div>
        </swiper-item>
      </swiper>
    </div>
    <div class="gap-line"></div>
    <!--智能排序-->
    <div class="id-znpx">
      <divider><span>智能排序 </span><x-icon type="ios-arrow-down" size="12"></x-icon></divider>
      <div class="area">
        <ul>
          <li>不限</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </div>
    <!--雇主列表-->
    <div class="content">
      <div class="gz-list" @click="toUrl('emporder')">
        <div class="gz-top">
          <div class="gz-touxiang">
            <img src="../../assets/images/bj.jpg" />
          </div>
          <div class="gz-nicheng">雇主小a</div>
          <div class="gz-jiage"><span>￥</span><span>5000</span></div>
        </div>
        <div class="gz-timeleixin">
          <div class="gz-time"><span><img src="../../assets/images/index/time.png"/></span><span>七天后过期</span></div>
          <div class="gz-leixin"><span>家装设计</span></div>
        </div>
        <div class="gz-content">
          <div class="tupian">
            <div class="tu"><img src="../../assets/images/bj.jpg" /></div>
            <div class="tu"><img src="../../assets/images/bj.jpg" /></div>
            <div class="tu2"><img src="../../assets/images/bj.jpg" /></div>
          </div>
          <div class="wenzhi">
            actocad制图问题解答，帮忙制图，报价根据工程量或人工制定。
          </div>
        </div>
        <div class="gz-bottom">
          <div class="gb-left">
            <div class="gb-tu"><img src="../../assets/images/bj.jpg" /></div>
            <div class="gb-tu"><img src="../../assets/images/bj.jpg" /></div>
            <div class="gb-tu"><img src="../../assets/images/bj.jpg" /></div>
            <div class="gb-wz">3人抢单</div>
          </div>
          <div class="gb-right">
            <div class="gb-ljqd">立即抢单</div>
          </div>
        </div>
      </div>
      <div class="gz-list" @click="toUrl('emporder')">
        <div class="gz-top">
          <div class="gz-touxiang">
            <img src="../../assets/images/bj.jpg" />
          </div>
          <div class="gz-nicheng">雇主小a</div>
          <div class="gz-jiage"><span>￥</span><span>5000</span></div>
        </div>
        <div class="gz-timeleixin">
          <div class="gz-time"><span><img src="../../assets/images/index/time.png"/></span><span>七天后过期</span></div>
          <div class="gz-leixin"><span>家装设计</span></div>
        </div>
        <div class="gz-content">
          <div class="wenzhi">
            actocad制图问题解答，帮忙制图，报价根据工程量或人工制定。
          </div>
        </div>
        <div class="gz-bottom">
          <div class="gb-left">
            <div class="gb-tu"><img src="../../assets/images/bj.jpg" /></div>
            <div class="gb-tu"><img src="../../assets/images/bj.jpg" /></div>
            <div class="gb-tu"><img src="../../assets/images/bj.jpg" /></div>
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
  import { Swiper, SwiperItem, Divider,XAddress,ChinaAddressV4Data,} from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg'
  }]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`
  }))
  export default {
    components: {
      Swiper,
      SwiperItem,
      Divider,
      XAddress,
    },
    data () {
      return {
        msg: 'Welcome to index',
        demo06_list: urlList,
        demo06_index: 0,
        addressData: ChinaAddressV4Data,
        value3: ['广东省', '中山市', '--'],
      }
    },
    mounted: function () {
      this.scrolle();
    },
    methods: {
      cgLink: function (param) {
        this.$router.push({name: param.pagename})
      },
      toUrl: function (pagename) {
        this.$router.push({name: pagename})
      },
      demo06_onIndexChange (index) {
        this.demo06_index = index
      },
      getThisHeight (ele) {
        var id1 = document.getElementById('id1')
        var id2 = document.getElementById('id2')
        alert(id1.offsetHeight + '<>' + id2.offsetHeight)
      },
      //下拉搜索框变长
        scrolle(){
          $(window).on('scroll', function() {
            var $scroll = $(this).scrollTop();
            if($scroll >= 100) {
              $('.id-header').css(
                "background-color", "rgba(255,255,255,1)"
              );
              $('.id-sousuo').css({
                "width": "5.5rem",
                "background-color": "rgba(0,0,0,.1)"
              });
            } else {
              $('.id-header').css({
                "background-color": ""
              });
              $('.id-sousuo').css({
                "width": "1.2rem",
                "background-color": "white"
              });
            }
          });
        }
    }
  }
</script>

<style>
  .vux-no-group-title {
    margin-top:0 !important;
    font-size: 0.28rem !important;
  }
  .weui-cells{
    background: transparent !important;
  }
  .weui-cell_access {
     padding:0 !important;
     height: 0.5rem;
     width: 1rem;
     display:inline-block!important;
  }
  .weui-cells:before{
    border: none !important;
  }
  .vux-cell-box:before{
    border: none !important;
  }
  .weui-cells:after{
    border: none !important;
  }
  .weui-cell_access .weui-cell__ft:after{
    border: none !important;
  }
  .vux-cell-value{
    color: #000000 !important;
  }
  .vux-popup-picker-value{
    display:block;
    width:1rem;
    height: 0.5rem;
    overflow:hidden;
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
    text-overflow:ellipsis;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/index/index.css';
</style>
