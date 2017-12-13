<template>
  <div class="">
    <div class="header">
      <div class="header-left"@click="goback"><img src="../../assets/images/index/back.png" /></div>
      <span>订单详情</span>
      <div class="header-right"><span>发布</span></div>
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
            <option value="saab">1</option>
            <option value="opel">2</option>
            <option value="audi">3</option>
          </select>
        </div>
      </div>
      <div class="xmlx">
        <div class="xmlx-left">
          <span>项目地区</span>
        </div>
        <div class="xmlx-right">
          <select class="xmlx-kuang">
            <option value="volvo">请选择地区</option>
            <option value="saab">1</option>
            <option value="opel">2</option>
            <option value="audi">3</option>
          </select>
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
            <span>枪单截止日期</span>
          </div>
          <div class="qdtime-right">
            <span>2017-12-21</span>
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
              <ul>
                <li>方案</li>
                <li>扩出</li>
                <li>施工</li>
              </ul>
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
              <span>2017-01-02</span> / <span>2017-01-02</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sctp">
        <div class="sc-top">上传图片</div>
        <div class="st-bottom">

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
  @import '../../assets/css/employer/fabudingdan.css';
</style>
