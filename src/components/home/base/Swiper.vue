<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,idx) of dataimg" :key="idx">
        <img class="swiper-img" :src="item.src" alt="" >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name:'HomeSwiper',
    data(){
      return{
        swiperOption:{
          pagination: {
            el:'.swiper-pagination',
            clickable:true
          },
          //轮播间隔时间
          autoplay:{
            delay:3000
          },
          //是否回滚
          loop:true
        },
        dataimg:[
          {src:require('../../../assets/images/index/swiper_01.jpg')},
          {src:require('../../../assets/images/index/swiper_02.jpg')},
          {src:require('../../../assets/images/index/swiper_03.jpg')},
          {src:require('../../../assets/images/index/swiper_04.jpg')},
          {src:require('../../../assets/images/index/swiper_05.jpg')}
        ]
      }
    }
  }
</script>
<style lang="scss">
  .swiper{
    height: 2.2rem;
    margin: .14rem;
    .swiper-container{
      height: 100%;
    }
    .swiper-img{
      height: 100%;
    }
  }
</style>