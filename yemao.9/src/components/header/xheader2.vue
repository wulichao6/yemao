<template>
  <div class="header-box">
    <x-header :left-options="{backText: ''}" :title="title"><a slot="right" :class="myRrightClass" v-tap="{ methods:setHover }"></a></x-header>
  </div>
</template>

<script>
  import { XHeader } from 'vux'

  export default {
    directives: {
      XHeader
    },
    components: {
      XHeader
    },
    props: {
      title: String,
      rightClass: String
    },
    data () {
      return {
        myRrightClass: this.rightClass
      }
    },
    methods: {
      setHover: function () {
        if (this.myRrightClass === this.rightClass) {
          this.myRrightClass = this.rightClass + ' hover'
          this.$emit('upup', '0')// 主动触发upup方法，'hehe'为向父组件传递的数据
        } else {
          this.myRrightClass = this.rightClass
          this.$emit('upup', '1')// 主动触发upup方法，'hehe'为向父组件传递的数据
        }
      }
    }
  }
</script>

<style>
  .header-box{
    height: .92rem;
  }
  .vux-header{
    width: 100%;
    background-color: #fff !important;
    -webkit-box-shadow: 0 1px 6px #f2f2f2;
    box-shadow: 0 1px 6px #f2f2f2;
    position: fixed !important;
    top: 0;
    left:  0;
    z-index: 666;
  }
  .vux-header .vux-header-left .left-arrow:before{
    border-left: 1px solid #f65aa6 !important;
    border-top: 1px solid #f65aa6 !important;
  }
  .vux-header-title{
    color: #f65aa6 !important;
  }
  .vux-header-right{
    height: .92rem;
    top:0 !important;
  }
  .vux-header-right a{
    height: .42rem;
    line-height: .42rem;
    padding: .25rem;
  }

  /**右侧样式**/
  .rightclass{border: 1px solid red;
  }
  .collect{
    background: url('/src/assets/images/collect.png') center no-repeat;
    background-size: .5rem .5rem;
  }
  .collect.hover{
    background: url('/src/assets/images/collect-hover.png') center no-repeat;
    background-size: .5rem .5rem;
  }
</style>
