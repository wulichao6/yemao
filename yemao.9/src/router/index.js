import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import employer from '@/pages/employer/employer'
import emporder from '@/pages/employer/order'
import emporderimgs from '@/pages/employer/order-preview-imgs'
import emporderparts from '@/pages/employer/order-participants'
import meow from '@/pages/meow/meow'
import designer from '@/pages/designer/designer'
import my from '@/pages/my/my'
import home from '@/pages/main/home'
import vuxtest from '@/pages/index/vuxtest'
import vuxswiper from '@/pages/index/vuxswiper'
import login from '@/pages/login/login'
import wjmm from '@/pages/login/wjmm'
import zhlogin from '@/pages/login/zhlogin'
import zhuche from '@/pages/login/zhuche'
import zhuche2 from '@/pages/login/zhuche2'
import fenlei from '@/pages/index/fenlei'
import informxitong from '@/pages/index/informxitong'
import leibie from '@/pages/index/leibie'
import message from '@/pages/index/message'
import search from '@/pages/index/search'
import searchjieguo from '@/pages/index/searchjieguo'
import daichulixq from '@/pages/employer/daichulixq'
import fabudingdan from '@/pages/employer/fabudingdan'
import myorderchuli from '@/pages/employer/myorderchuli'
import orderpingjia from '@/pages/employer/orderpingjia'
import orderqiangdan from '@/pages/employer/orderqiangdan'
import shoucangsjs from '@/pages/employer/shoucangsjs'
import zfcg from '@/pages/employer/zfcg'
import liaotian from '@/pages/employer/liaotian'
import daizhifu from '@/pages/employer/daizhifu'
import daijiaofu from '@/pages/employer/daijiaofu'
import yiwancheng from '@/pages/employer/yiwancheng'
import yijianhuisheng from '@/pages/employer/yijianhuisheng'
import set from '@/pages/my/set'
import setnicheng from '@/pages/my/set-nicheng'
import setnum from '@/pages/my/set-num'
import setpassword from '@/pages/my/set-password'
import mineguanyu from '@/pages/my/mine-guanyu'
import minehuodong from '@/pages/my/mine-huodong'
import minejianli from '@/pages/my/mine-jianli'
import minepinlun from '@/pages/my/mine-pinlun'
import mineshouchang from '@/pages/my/mine-shouchang'
import minewenda from '@/pages/my/mine-wenda'
Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

const routeArray = [
  // my模块
  { path: '/mineguanyu',
    name: 'mineguanyu',
    component: mineguanyu
  },
  { path: '/minehuodong',
    name: 'minehuodong',
    component: minehuodong
  },
  { path: '/minejianli',
    name: 'minejianli',
    component: minejianli
  },
  { path: '/minepinlun',
    name: 'minepinlun',
    component: minepinlun
  },
  { path: '/mineshouchang',
    name: 'mineshouchang',
    component: mineshouchang
  },
  { path: '/minewenda',
    name: 'minewenda',
    component: minewenda
  },
  { path: '/setpassword',
    name: 'setpassword',
    component: setpassword
  },
  { path: '/setnum',
    name: 'setnum',
    component: setnum
  },
  { path: '/setnicheng',
    name: 'setnicheng',
    component: setnicheng
  },
  { path: '/set',
    name: 'set',
    component: set
  },
  // 雇主模块
  { path: '/yijianhuisheng',
    name: 'yijianhuisheng',
    component: yijianhuisheng
  },
  { path: '/daizhifu',
    name: 'daizhifu',
    component: daizhifu
  },
  { path: '/daijiaofu',
    name: 'daijiaofu',
    component: daijiaofu
  },
  { path: '/yiwancheng',
    name: 'yiwancheng',
    component: yiwancheng
  },
  { path: '/daichulixq',
    name: 'daichulixq',
    component: daichulixq
  },
  { path: '/fabudingdan',
    name: 'fabudingdan',
    component: fabudingdan
  },
  { path: '/myorderchuli',
    name: 'myorderchuli',
    component: myorderchuli
  },
  { path: '/orderpingjia',
    name: 'orderpingjia',
    component: orderpingjia
  },
  { path: '/orderqiangdan',
    name: 'orderqiangdan',
    component: orderqiangdan
  },
  { path: '/shoucangsjs',
    name: 'shoucangsjs',
    component: shoucangsjs
  },
  { path: '/zfcg',
    name: 'zfcg',
    component: zfcg
  },
  { path: '/liaotian',
    name: 'liaotian',
    component: liaotian
  },
  // index模块
  { path: '/fenlei',
    name: 'fenlei',
    component: fenlei
  },
  { path: '/informxitong',
    name: 'informxitong',
    component: informxitong
  },
  { path: '/leibie',
    name: 'leibie',
    component: leibie
  },
  { path: '/message',
    name: 'message',
    component: message
  },
  { path: '/search',
    name: 'search',
    component: search
  },
  { path: '/searchjieguo',
    name: 'searchjieguo',
    component: searchjieguo
  },
  // 登录模块
  { path: '/login',
    name: 'login',
    component: login
  },
  { path: '/wjmm',
    name: 'wjmm',
    component: wjmm
  },
  { path: '/zhlogin',
    name: 'zhlogin',
    component: zhlogin
  },
  { path: '/zhuche',
    name: 'zhuche',
    component: zhuche
  },
  { path: '/zhuche2',
    name: 'zhuche2',
    component: zhuche2
  },
  // 1、打包后，浏览器运行首页空白
  {
    path: '/dist/index.html',
    redirect: '/home'
  },
  {
    path: '/dist',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  // 嵌套路由(router-view)：配置子路由
  {
    path: '/home',
    component: home,
    meta: { keepAlive: true },
    children: [
      {
        path: 'index',
        name: 'index',
        component: index,
        meta: { keepAlive: true }
      },
      {
        path: 'employer',
        name: 'employer',
        component: employer,
        meta: { keepAlive: true }
      },
      {
        path: 'meow',
        name: 'meow',
        component: meow,
        meta: { keepAlive: true }
      },
      {
        path: 'designer',
        name: 'designer',
        component: designer,
        meta: { keepAlive: true }
      },
      {
        path: 'my',
        name: 'my',
        component: my,
        meta: { keepAlive: true }
      }
    ]
  },
  // 雇主订单
  {
    path: '/emporder',
    name: 'emporder',
    component: emporder,
    meta: { keepAlive: true }
  },
  // 雇主订单预览图片页面
  {
    path: '/emporderimgs',
    name: 'emporderimgs',
    component: emporderimgs
  },
  // 雇主订单已参与人员列表
  {
    path: '/emporderparts',
    name: 'emporderparts',
    component: emporderparts
  },
  {
    path: '/vuxtest',
    name: 'vuxtest',
    component: vuxtest,
    meta: { keepAlive: true }
  },
  {
    path: '/vuxswiper',
    name: 'vuxswiper',
    component: vuxswiper,
    meta: { keepAlive: true }
  }
]

export default new Router({
  // mode: 'history',
  routes: routeArray,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
