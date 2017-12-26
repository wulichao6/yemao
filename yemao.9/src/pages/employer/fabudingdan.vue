<template>
  <div class="">
    <div class="header">
      <div class="header-left"@click="goback"><img src="../../../static/images/back.png" /></div>
      <span>订单详情</span>
      <div class="header-right"@click="tishikuang"><span>发布</span></div>
    </div>
    <!--发布订单内容-->
    <div class="fb-content">
      <div class="xmlx">
        <div class="xmlx-left">
          <span>项目类型</span>
        </div>
        <div class="xmlx-right">
          <select class="xmlx-kuang">
            <option value="volvo">请选择类型</option>
            <option value="saab">策划设计</option>
            <option value="opel">规划设计</option>
            <option value="audi">建筑设计</option>
            <option value="audi">结构设计</option>

            <option value="saab">给排水设计</option>
            <option value="opel">电气设计</option>
            <option value="audi">暖通设计</option>
            <option value="audi">景观设计</option>

            <option value="saab">室内设计</option>
            <option value="opel">软装设计</option>
            <option value="audi">项目经理</option>
            <option value="audi">概预算</option>
            <option value="audi">审图</option>
          </select>
        </div>
      </div>
      <div class="xmlx">
        <div class="xmlx-left">
          <span>项目地区</span>
        </div>
        <div class="xmlx-right">
          <group class="xmlx-kuang">
            <x-address @on-hide="logHide" @on-show="logShow" raw-value title="" :list="addressData" hide-district value-text-align="right" v-model="value3"></x-address>
          </group>
        </div>
      </div>
      <div class="xmbt">
        <div class="xmbt-top">
          <div class="xt-left"><span>项目标题</span></div>
          <div class="xt-right"><input type="text"placeholder="请输入任务标题" /></div>
        </div>
        <div class="xmbt-bottom">
          <textarea class="xt-txt" placeholder="详细描述一下任务的内容"></textarea>
        </div>
      </div>
      <div class="ys-time">
        <div class="ys">
          <div class="ys-left">
            <span>预算</span>
          </div>
          <div class="ys-right">
            <input type="text"placeholder="请输入金额" />
          </div>
        </div>
        <div class="qdtime">
          <div class="qdtime-left">
            <span>抢单截止日期</span>
          </div>
          <div class="qdtime-right">
              <datetime v-model="value1"></datetime>
          </div>
        </div>
      </div>
      <div class="bt-mj-gs">
        <div class="xmbt">
          <div class="xmbt-left">
            <span>设计单位</span>
          </div>
          <div class="xmbt-right">
            <input type="text"placeholder="请输入设计个数" />
          </div>
        </div>
        <div class="xmmj">
          <div class="xmbt-left">
            <span>设计面积</span>
          </div>
          <div class="xmbt-right">
            <input type="text"placeholder="请输入设计面积" />
          </div>
        </div>
        <div class="gs">
          <div class="xmbt-left">
            <span>个数</span>
          </div>
          <div class="xmbt-right">
            <input type="text"placeholder="请输入个数" />
          </div>
        </div>
        <div class="sjsd">
          <div class="sjsd-top">设计深度</div>
          <div class="sjsd-bottom">
            <div class="fanan">
              <!--<ul>-->
                <!--<li>方案</li>-->
                <!--<li>扩出</li>-->
                <!--<li>施工</li>-->
              <!--</ul>-->
              <checker
                type="checkbox"
                selected-item-class="demo5-item-selected">
                <checker-item :key="0" :value="0" class="fa">
                   方案
                </checker-item>
                <checker-item :key="1" :value="1"class="fa">
                  扩出
                </checker-item>
                <checker-item :key="2" :value="2"class="fa">
                  施工
                </checker-item>
              </checker>
            </div>
          </div>
        </div>
        <div class="gongshi">
          <div class="gsh-top">工时</div>
          <div class="gsh-bottom">
            <div class="gb-left">
              <span>设计起止时间</span>
            </div>
            <div class="gb-right">
              <span><datetime v-model="value2" class="shijian"></datetime></span> / <span><datetime v-model="value4"class="shijian"></datetime></span>
            </div>
          </div>
        </div>
      </div>
      <div class="sctp">
        <div class="sc-top">上传图片</div>
        <div class="st-bottom" v-if="isShow" v-tap="{ methods:triggerFile }">
          <img src="../../../static/images/employer/j.png" />
        </div>
        <div class="img-body" v-for="img in imgList">
          <img :src="img.src" />
        </div>
        <imageUpload :img-arr.sync="imgList"></imageUpload>
      </div>
    </div>
    <!--弹窗-->
    <div class="tishikuang">
      <div class="tisi">
        发布成功
      </div>
    </div>
  </div>
</template>

<script>
  import imageUpload from '../../components/upload/image-upload.vue'
  import {XAddress,ChinaAddressV4Data,Datetime, Group,Checker, CheckerItem,} from 'vux'
  export default {
    components: {
      XAddress,
      Datetime,
      Group,
      Checker,
      CheckerItem,
      imageUpload
    },
    data () {
      return {
        imgList:[],
        isShow:true,

        addressData: ChinaAddressV4Data,
        value3: ['中山市'],
        value1: '2015-11-12',
        value2: '2015-10-12',
        value4: '2025-10-12',
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
      showPlugin () {
        this.$vux.datetime.show({
          cancelText: '取消',
          confirmText: '确定',
          format: 'YYYY-MM-DD HH',
          value: '2017-05-20 18',
          onConfirm (val) {
            console.log('plugin confirm', val)
          },
        })
      },
      // 地区
      logHide (str) {
        var obj = this;
        console.log('on-hide', str)
        if( str == true ){
          console.log('value', obj.value3)
          if( obj.value3[0] == '110000' || obj.value3[0] == '120000' ||
            obj.value3[0] == '310000' || obj.value3[0] == '500000' ){
            obj.value3[1] = '--';
          }else{
            obj.value3[0] = '--';
          }
        }
      },
      logShow (str) {
        console.log('on-show',str)
      },
      //提示框
      tishikuang(){
          $ ('.tisi').show ().delay (1000).fadeOut ();
      },
      //上传图片
      triggerFile(){
        console.log("trigger:")
         document.getElementById("img-upload").click();
      }

    }
  }
</script>
<style>
  /*地区*/
  .vux-no-group-title {
    margin-top:0 !important;
    font-size: 0.28rem !important;
  }
  .weui-cells{
    background: transparent !important;
  }
  .weui-cell_access {
    padding:0 !important;
    width: 2.9rem;
    height: 0.8rem;
    display:inline-block!important;
  }
  .weui-cell_access .weui-cell__ft{
    position: static !important;
    line-height: 0.8rem;
  }
  .vux-cell-value{
    color: #999999;
  }
  .vux-cell-primary vux-popup-picker-select-box{
    width: 100%;
  }
  .vux-popup-picker-value{
    width: 2.9rem;
    display:block;
    text-align: left;
    height: 0.8rem !important;
    line-height: 0.8rem !important;
    overflow:hidden;
    padding-left: 0.1rem;
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
    text-overflow:ellipsis;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/employer/fabudingdan.css';
  .shijian{
    width: 1.8rem;
  }
  .demo5-item-selected {
    background: #f65aa6;
  }
  /*提示框*/
  .tishikuang .tisi {
    position: fixed;
    width: 2rem;
    height: 1.2rem;
    border-radius: 0.1rem;
    background: #8d8d8d;
    text-align: center;
    line-height: 1.2rem;
    color: white;
    left:2.75rem;
    top: 30%;
    font-size: 0.32rem;
    display: none;
  }
</style>
