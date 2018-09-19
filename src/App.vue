<template>
  <div id="app">
     <vheader :seller="seller"></vheader>
     <div class="tab">
       <div class="tab-item">
         <router-link to="/goods">商品</router-link>
       </div>
       <div class="tab-item">
         <router-link to="/ratings">评价</router-link>
       </div>
       <div class="tab-item">
         <router-link to="/seller">商家</router-link>
       </div>
     </div>
    <div class="routerView">
      <router-view></router-view>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
import vheader from 'components/header/header'

import goods from 'components/goods/goods'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Bar = { template: '<div>我是商家页</div>' }
const rate = { template: '<div>评论页</div>' }

const routes = [{ path: '/goods', component: goods }, { path: '/seller', component: Bar }, { path: '/ratings', component: rate }]
const router = new VueRouter({routes,
  linkActiveClass: 'active'
})
router.push('/goods')
export default{
  router,
  data () {
    return {
      seller: {}
    }
  },
  components: { vheader
  },
  created () {
    this.$http.get('api/seller').then((res) => {
      this.seller = res.body.data
    })
  }
}
</script>

<style rel="stylesheet/stylus">
 #app{
     width: 100%;
}
 #app .tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
   border-bottom:1px solid rgba(7,17,27,0.1);
}
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab-item a{
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
 .tab-item a:hover{
    color: red;
  }
  .routerView{
    display: flex;
  }
  .routerView div{
    width: 100%;
    text-align: left;
  }
</style>
