<template lang="html">
    <div class="star" :class="starType">
      <span v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass" class="star-item"></span>
    </div>
</template>
<script>
const length = 5
const clsOn = 'on'
const clsHalf = 'half'
const clsOff = 'off'
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType: function () {
      return 'star-' + this.size
    },
    itemClasses: function () {
      let result = []
      let score = Math.floor(this.score * 2 / 2)
      let hasDecimal = (score % 1 === 0)
      let integer = Math.floor(score)
      for (let i = 0; i < integer; i++) {
        result.push(clsOn)
      }
      if (hasDecimal) {
        result.push(clsHalf)
      }
      while (result.length < length) {
        result.push(clsOff)
      }
      return result
    }
  }

}
</script>
<style >
.star{
  font-size: 0;

}
.star .star-item{
  display: inline-block;
  background-repeat: no-repeat;
}
 .star-48 .star-item{
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 22px;
}
 .star-48  .on{
  background-image: url('star48_on@3x.png');
}
 .star-48  .half{
  background-image: url('star48_half@3x.png');
}
 .star-48  .off{
  background-image: url('star48_off@3x.png');
}
.star-item:last-child{
  margin-right: 0;
}
.star .star-36 .star-item{
  width: 15px;
  height: 15px;
  margin-right: 16px;
  background-size: 15px 15px;
}
.star .star-36 .star-item .on{
  background-image: url('star36_on@3x.png');
}
.star .star-36 .star-item .half{
  background-image: url('star36_half@3x.png');
}
.star .star-36 .star-item .off{
  background-image: url('star36_off@3x.png');
}
.star .star-24 .star-item{
  width: 15px;
  height: 15px;
  margin-right: 16px;
  background-size: 15px 15px;
}
.star .star-24 .star-item .on{
  background-image: url('star24_on@3x.png');
}
.star .star-24 .star-item .half{
  background-image: url('star24_half@3x.png');
}
.star .star-24 .star-item .off{
  background-image: url('star24_off@3x.png');
}
</style>
