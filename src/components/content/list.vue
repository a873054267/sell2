<template lang="html">
<li class="goods-list">
  <router-link to="/detail" class="good-list-link">
    <div class="goods-list-pic">
      <img :src="img" alt="">
    </div>
    <div class="goods-list-desc">
      <p class="goods-list-name"><span></span>{{title}}</p>
      <p class="goods-list-price"><span></span>{{ price}}</p>
    </div>
  </router-link>
</li>
</template>
<script>
export default {
  props: ['price', 'title', 'img']
}
</script>
<style lang="css" scoped>
.goods-list{
text-align:center;
width:40%;
float:left
}
.goods-list-pic img{
height:4rem
}

.goods-list-desc p{
float:left
}
.goods-list-desc span{
float:left;
width:4rem
}
</style>
