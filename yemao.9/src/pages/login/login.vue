<template>
  <div class="">
    <!--头部导航-->
    <div class="header">
      <div class="header-left"@click="goback"><img src="../../assets/images/login/Back.png"/></div>
      <div class="header-right zc"@click="toUrl('zhuche')">注册</div>
    </div>
    <!--log-->
    <div class="log clear">
      <div class="log-img">
        <img src="../../assets/images/login/log.png"/>
      </div>
    </div>
    <!--登陆-->
    <div class="login-shuru">
      <p class="tishi"></p>
      <!--<group class="ls-shouji">-->
        <!--<x-input class="haoma" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>-->
      <!--</group>-->
      <div class="ls-shouji">
        <input type="text"class="shouji"id="phone" placeholder="手机号">
        <span class="del">×</span>
      </div>
      <div class="ls-yanzheng">
        <!--<group class="weui-cells_form">-->
          <!--<x-input class="weui-vcode"placeholder="验证码">-->
            <!--<x-button slot="right" type="primary" mini>发送验证码</x-button>-->
          <!--</x-input>-->
        <!--</group>-->
        <input type="text"class="yanzheng"id="yanzhengma"maxlength="8"placeholder="验证码">
        <div class="dj-shuru"><span class="msgs">点击获取验证码</span></div>
      </div>
      <div class="log-btn">登录</div>
    </div>
    <div class="log-botton">
      <div class="lb-left"@click="toUrl('zhlogin')">账号密码登录</div>
      <div class="lb-right"@click="toUrl('wjmm')">忘记密码？</div>
    </div>
    <!--弹窗-->
    <div class="tanchuang">
      <div class="tisi">
        <div class="ts-top">
          标题行
        </div>
        <div class="nr">
          说明当前情况，提示解决方案，不要超过两行
        </div>
        <div class="ts-bottom">
          <div class="bt-left quxiao">
            取消
          </div>
          <div class="bt-right">
            确定
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
    created: function () {
    },
    mounted:function(){
      //输入框内有内容时显示清空按钮
      this.checkNumber(".shouji");
      //获取焦点时触发判断事件
      this.panduan("#phone");
      //获取短信验证码
      this.huoquyanzhengma(".msgs", ".shouji");
      //判断输入框不能为空
      this.login(".log-btn",".shouji");
    },
    methods: {
      goback() {
        this.$router.goBack();
      },
      toUrl(name){
        this.$router.push({name:name});
      },
      var obj = this,
      //输入框内有内容时显示清空按钮
      checkNumber(obj) {
        $(obj).bind('input propertychange', function () {
          var sj = $(this).val()
          if (sj == '') {
            $(obj).next('.del').css('display', 'none')
          } else {
            $(obj).next('.del').css('display', 'block')
          }
        });
        //点击消除按钮清空
        $(obj).next('.del').on('click', function () {
          $('.tishi').text('')
          $(obj).val('')
          $(obj).next('.del').css('display', 'none')
        })
      },
      //获取短信验证码
      huoquyanzhengma(obj, shouji) {
        var validCode = true;
        $(obj).click(function () {
          var username = $.trim($(shouji).val());
          var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
          var time = 30;
          var code = $(this);
          if (username == "" || username == null || username == undefined) {
            $('.tishi').text("手机号不能为空");
          } else if (!myreg.test($(shouji).val())) {
            $('.tishi').text('请输入有效的手机号码！');
            return false;
          } else {
            $('.tishi').text('')
            if (validCode) {
              validCode = false;
              code.addClass("msgs1"); //可以改变当前颜色的类名
              var t = setInterval(function () {
                time--;
                code.html(time + "秒后重新获取");
                if (time == 0) {
                  clearInterval(t);
                  code.html("重新获取");
                  validCode = true;
                  code.removeClass("msgs1");
                }
              }, 1000)
            }
          }
        })
      },
      //获取焦点时触发判断事件
      panduan(obj) {
        $(obj).blur(function () {
          var username = $.trim($(obj).val());
          var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
          if (!myreg.test($(obj).val())) {
            $('.tishi').text('请输入有效的手机号码！');
            return false;
          } else {
            $('.tishi').text('')
          }
        });
      },
      //判断输入框不能为空
      login(anniu, shouji, valp) {
        $(anniu).click(function () {
          var username = $.trim($(shouji).val()); //获取到手机号
          var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
          var mima = /^[0-9a-zA-Z_#]{6,16}$/;
          $("input").each(function () {
            let v = $(this).val();
            if (v == "") {
              $('.tishi').text("输入框不能为空");

            } else if (!myreg.test($(shouji).val())) {
              $('.tishi').text('请输入有效的手机号码！');
              return false;
            } else if (!mima.test($(valp).val())) {
              $('.tishi').text('密码为6-16位的数字或字母！');
              return false;
            } else {
              $('.tishi').text("");
              obj.toUrl('index');
            }
          })
        })
      }
    },
  }
</script>

<style>
  /*!*修改vux*!*/
  /*.login-shuru .weui-cells,.login-shuru .vux-no-group-title{*/
    /*margin-top:0px!important;*/
    /*font-size: 0.28rem;*/
    /*!*color:#9FB0C5;*!*/
  /*}*/
  /*.weui-input,.weui-cell {*/
    /*padding:0.1rem 0.15rem!important;*/
  /*}*/
  /*.weui-label {*/
    /*margin-left: 0.1rem;*/
  /*}*/
  /*.weui-cells_form input{*/
     /*height:0.1rem;*/
  /*}*/
  /*[class*=" weui-icon-"] {*/
    /*vertical-align:0 !important;*/
  /*}*/
  /*.weui-icon-clear {*/
    /*color: #B2B2B2;*/
    /*font-size: 14px;*/
  /*}*/
  /*.weui-icon-clear:before {*/
    /*margin-bottom: 0.01rem !important;*/
  /*}*/
  /*.weui-btn_primary {*/
    /*background-color:white !important;*/
    /*color: #f63e96 !important;*/
  /*}*/
  /*.weui-btn:after{*/
    /*border: none !important;*/
  /*}*/
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/login/login.css';
</style>
