<template lang="html">
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="menu-item" >
          <span class="text" >
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]" ></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item,index) in goods" :key="index" class="food-list">
          <h1 class="title">{{item.name}}</h1>
          <ul >
            <li v-for="(food,index) in item.foods" :key="index" class="food-item">
              <div class="icon">
                <img  width="57" height="57" :src="food.icon"   >
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart ></shopcart>
  </div>

</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import shopcart from 'components/shopcart/shopcart'
import cartcontrol from 'components/cartcontrol/cartcontrol'
export default {
  proprs: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    }
  },
  methods: {
    initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {})
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {})
    }
  },
  components: {
    shopcart,
    cartcontrol
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http.get('api/goods').then((res) => {
      this.goods = res.body.data
      this.$nextTick(() => {
        this.initScroll()
      })
    })
  }
}
</script>
<style lang="css" scoped>
  li{
    margin-left: 0px;
    list-style: none;
  }
  .goods{
    display: flex;
    position: absolute;
    width: 100%;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
  }
  .menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .menu-item{
    display: table;
    height: 54px;
    width: 56px;
    line-height: 14px;
    padding: 0 12px;
  }
  .icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    vertical-align: top;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .text{
    font-size: 12px;
    display: table-cell;
    width: 56px;
    border: 1px rgba(7,17,27,0.1);
    vertical-align: middle;
  }
  .foods-wrapper{
    flex:1;
  }
  .foods-wrapper .title{
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147,153,159);
    background: #f3f5f7;
  }
  .food-item{
    display: flex;
    border: 1px solid rgba(7,17,27,0.1) ;
  }
  .food-item:last-child{
    display: none;
    margin-bottom: 0px;
  }
  .food-item .icon{
    flex: 0 0 57px;
    margin-right: 10px;
  }
  .food-item .content{
    flex: 1;
    text-align: left;
  }
  .food-item .content .name{
    font-size: 14px;
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    color: rgb(7,17,27);
  }
  .food-item .content .desc,.extra{
    line-height: 10px;
    font-size: 10px;
    color: rgb(147,153,159);
  }
  .food-item .content .desc{
    margin-bottom: 8px;
  }
  .count{
    margin-right: 13px;
  }
  .price{
    font-weight: 700;
    line-height: 24px;
  }
  .price .now{
    margin-right:8px ;
    font-size: 14px;
    color: rgb(240,20,20);
  }
  .price .old{
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147,153,159);
  }
  .cartcontrol-wrapper{
    position: relative;
    right: 0;
    bottom: 12px;
  }

</style>
