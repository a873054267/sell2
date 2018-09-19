<template lang="html">
  <div class="shopcart">
<div class="content">
  <div class="content-left">
    <div class="logo-wrapper">
      <div class="logo">
        <img src="./shopcar.jpg" style="width: 56px; height: 56px">
      </div>
    </div>
    <div class="price">0元&emsp; &ensp;另需配送费¥4元</div>
    <div class="desc"></div>
  </div>
  <div class="content-right">
    <div class="pay">
      ¥20元起送
    </div>
  </div>
</div>
  </div>

</template>
<script>
export default {}
</script>
<style lang="css" scoped>
.shopcart{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  background: #141d27;
}
  .content{
    display: flex;
    font-size: 0;
  }
  .content-left{
    flex:1
  }
  .logo-wrapper{
    display: inline-block;
    position: absolute;
    top:-10px;
    margin: 0 12px ;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    vertical-align: top;
    border-radius: 50%;
  }
  img{
    border-radius: 50%;
  }
  .price{
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    line-height: 24px;
    box-sizing: border-box;
    border-right: 1px solid rgba(255,255,255,0.1);
    font-size: 16px;
    font-weight: 700;
    color:rgba(255,255,255,0.4);
  }
  .content-right{
    flex: 0 0 105px;
    width: 105px;
    vertical-align: top;
    margin-top: 12px;
    line-height: 24px;
    box-sizing: border-box;
    border-right: 1px solid rgba(255,255,255,0.1);
    font-size: 16px;
    font-weight: 700;
    color:rgba(255,255,255,0.4);
  }
  .price{
    text-align: center;
  }

</style>
