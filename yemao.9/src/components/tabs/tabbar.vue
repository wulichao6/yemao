<template>
  <footer>
    <div class="tabs">
      <!--  :class=" activeFlag=='index' ? ' tabbar-active' : '' " vue.js三目运算添加class -->
      <a id="index" v-tap="{ methods:cgLink , pagename:'index' }" class="tabbar-item item-index tabbar-active">
        <span class="tabbar-txt">首页</span>
      </a>
      <a id="employer" v-tap="{ methods:cgLink , pagename:'employer' }" class="tabbar-item item-employer">
        <span class="tabbar-txt">雇主</span>
      </a>
      <a id="meow" v-tap="{ methods:cgLink , pagename:'meow' }" class="tabbar-item item-meow">
        <span class="tabbar-txt">喵喵圈</span>
      </a>
      <a id="designer" v-tap="{ methods:cgLink , pagename:'designer' }" class="tabbar-item item-designer">
        <span class="tabbar-txt">设计师</span>
      </a>
      <a id="my" v-tap="{ methods:cgLink , pagename:'my' }" class="tabbar-item item-my">
        <span class="tabbar-txt">我的</span>
      </a>
    </div>
  </footer>
</template>

<script type="text/babel">
  import $ from '../../../utils/jquery-3.2.1.min'
  export default {
    name: 'tabbar',
    data: function () {
      return {}
    },
    methods: {
      cgLink: function (params) {
        $('.tabbar-active').removeClass('tabbar-active')
        if (!$('#' + params.pagename).hasClass('tabbar-active')) {
          $('#' + params.pagename).addClass('tabbar-active')
        }
        this.$router.push({name: params.pagename})
      }
    },
    created: function () {
      // alert(window.location.href)
    }
  }
</script>

<style scoped>
  .tabs{
    height:1.2rem;
    width: 100%;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: .14rem 0 .07rem 0;
    color: #929292;
    background-color: rgb(255, 255, 255);
    text-align: center;
    border-top:1px solid #f2f2f2;

    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .tabs .tabbar-item{
    padding: .2rem 0 .2rem 0;
    background-size: .45rem .45rem !important;
    background-position:  center top .3rem !important;
    background-repeat: no-repeat !important;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .tabs .tabbar-txt{
    font-size: .28rem !important;
  }
  /**为选中**/
  .tabs .item-index{
    background: url('../../assets/main/index.png') ;
  }
  .tabs .item-employer{
    background: url('../../assets/main/employer.png') ;
  }
  .tabs .item-meow{
    background: url('../../assets/logo.png') ;
  }
  .tabs .item-designer{
    background: url('../../assets/main/designer.png') ;
  }
  .tabs .item-my{
    background: url('../../assets/main/my.png') ;
  }

  /**选中**/
  .tabs .tabbar-active{
    color: deeppink !important;
    -webkit-animation: heartAnim 0.3s linear 1;
    animation: heartAnim 0.3s linear 1;
  }
  .tabs .tabbar-active.item-index{
    background: url('../../assets/main/index-hover.png') ;
  }
  .tabs .tabbar-active.item-employer{
    background: url('../../assets/main/employer-hover.png') ;
  }
  .tabs .tabbar-active.item-meow{
    background: url('../../assets/logo.png') ;
  }
  .tabs .tabbar-active.item-designer{
    background: url('../../assets/main/designer-hover.png') ;
  }
  .tabs .tabbar-active.item-my{
    background: url('../../assets/main/my-hover.png') ;
  }

  @-webkit-keyframes heartAnim {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes heartAnim {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
    }
    to {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
