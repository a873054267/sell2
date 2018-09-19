<template lang="html">
  <div class="cartcontrol">
  <div class="cart-decrease" ><span ><icon name="decrease" :w="32" :h="28"></icon></span></div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add"><span><icon name="add" :w="32" :h="28"></icon></span></div>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type: Object
    }
  }
}
</script>
<style lang="css" scoped>
  .cartcontrol{
    display: flex;
  }
  .cartcontrol .cart-decrease{
    display: inline-block;

  }
  .cart-count{
    display: inline-block;
  }
  .cart-add{
    display: inline-block;

  }
  .cart-decrease span{
    display: -webkit-flex;
    -webkit-justify-content: flex-end;
    -webkit-align-items: center;
  }
  .cart-add span{
    display: -webkit-flex;
    -webkit-justify-content: center;
    -webkit-align-items: center;
  }


</style>
