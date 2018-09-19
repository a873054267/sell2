<template >
<div class="header">
  <div class="content-wrapper">
    <div class="avatar">
      <img :src="seller.avatar" width="64" height="64">
    </div>
    <div class="content">
      <div class="title">
        <span class="brand"></span>
        <span class="name">{{seller.name}}</span>
      </div>
      <div class="description">
       {{seller.description}}/{{seller.deliveryTime}}分钟送达
      </div>
      <div v-if="seller.supports" class="support">
        <span class="icon" :class="classMap[seller.supports[0].type]"></span>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
    <div v-if="seller.supports" class="support-count" @click="showDetail">
      <span class="count">{{seller.supports.length}}个</span>
    </div>
  </div>
  <div class="bulletin-wrapper" @click="showDetail">
    <span class="bulletin-title"></span>
    <span class="bulletin-text">{{seller.bulletin}}</span>
  </div>
  <div class="background">
    <img :src="seller.avatar"  width="100%" height="100%">
  </div>
  <transition name="fade">
  <div v-show="detailShow" class="detail" >
    <div class="detail-wrapper clearfix" >
      <div class="detail-main">
        <h1 class="name">{{seller.name}}</h1>
        <div class="star-wrapper">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul v-if="seller.supports" class="supports">
        <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
          <span class="icon" :class="classMap[seller.supports[index].type]"></span>
          <span class="text">{{seller.supports[index].description}}</span>
        </li>
      </ul>
        <div class="title">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">{{seller.bulletin}}</p>
        </div>
      </div>
    </div>
    <div class="detail-close" @click="hideDetail">
      <img src="./close.png" width="100%" height="100%">
    </div>
  </div>
    </transition>>
</div>
</template>

<script>
import star from 'components/star/star'
export default {
  name: 'vheader',
  props: {
    seller: {
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    star
  }
}
</script>
<style >
.header{
  text-align:center;
  background-color: rgba(7,17,27,0.5);
  font-size:0;
  letter-spacing:0.2rem;
  color: #fff;
  position: relative;
  overflow: hidden;

}
  .content-wrapper{
    padding:24px 12px 18px 24px;
  }
  .avatar{
    display: inline-block;
    vertical-align: top;
  }
  .avatar img{
    border-radius: 2px;
  }
  .content{
    display: inline-block;
  }
  .title{
    margin:  2px 0 8px 0;
  }
  .brand{
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height:18px ;
    background-size: 30px 18px;
    background-repeat: no-repeat;
    background-image: url('brand@2x.png');
  }
  .name{
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }
  .description{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }
  .support .icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 4px;
    background-size: 12px;
    background-repeat: no-repeat;
    vertical-align: top;
  }
  .text{
    font-size: 12px;
  }
  .decrease{
    vertical-align: top;
    background-image: url('decrease_3@3x.png');
  }
  .discount{
    background-image: url('discount_3@3x.png');
  }
  .guarantee{
  background-image: url('guarantee_3@3x.png');
  }
  .invoice{
    background-image: url('invoice_3@3x.png');
  }
  .special{
    background-image :url('special_3@3x.png');
  }
  .count{
    font-size: 12px;
  }
  .support-count{
    position: absolute;
    right: 12px;
    top: 70px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0,0,0,0.2);
    text-align: center;
    cursor: pointer;
  }
  .bulletin-wrapper{
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .bulletin-wrapper span{
    display: inline-block;
  }
  .bulletin-title{
    width: 22px;
    height: 12px;
    background-size: 22px 12px;
    background-repeat: no-repeat;
    vertical-align: top;
    margin-top: 8px;
    background-image: url('bulletin@3x.png');
  }
  .bulletin-text{
    font-size: 12px;
  }
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .detail{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7,17,27,0.8);
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
 .detail .fade-enter{
  opacity: 0;
  background: rgba(7,17,27,0);
}
  .clearfix{
    display: inline-block;
  }
  .clearfix :after{
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
  }
  .detail-wrapper{
    min-height: 100%;
    width: 100%;
  }
  .detail-main{
    margin-top: 64px;
    padding-bottom: 64px;
    font-size: 12px;
  }
  .detail-main .name{
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  .detail-main .title {
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;
  }
  .detail-main .line{
    flex: 1;
    position: relative;
    top:-6px;
    border-bottom: solid 1px rgba(255,255,255,0.2);
  }
  .detail-main text{
    padding: 0 12px;
    font-weight: 700;
    font-size: 14px;
  }
.detail-main .supports{
  width: 80%;
  margin: 0 auto;
}
.supports .support-item{
  padding: 0 12px;
  margin-bottom: 12px;
  font-size: 0;
}
.support-item:last-child{
  margin-bottom: 0;
}
.support-item .icon{
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: top;
  margin-right: 6px;
  background-size: 16px;
  background-repeat: no-repeat;
}
.support-item .icon .decrease{
  background-image: url("decrease_3@3x.png");
}
  .detail-close{
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
  }
  .star-wrapper{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }
  .bulletin{
    width: 80%;
    margin: 0 auto;
  }
  .bulletin .content{
    padding: 0 12px;
    line-height: 24px;
    font-size: 12px;
  }
</style>
