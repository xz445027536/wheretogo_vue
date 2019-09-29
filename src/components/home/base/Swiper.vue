<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of imgs" :key="index">
        <img class="swiper-img" :src="item.img_url" alt="" >
      </swiper-slide>
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
          autoplay:{
            delay:3000
          },
          loop:true
        },
        imgs:[
          {img_url:require('../../../assets/images/index/swiper_01.jpg')},
          {img_url:require('../../../assets/images/index/swiper_02.jpg')},
          {img_url:require('../../../assets/images/index/swiper_03.jpg')},
          {img_url:require('../../../assets/images/index/swiper_04.jpg')},
          {img_url:require('../../../assets/images/index/swiper_05.jpg')}
        ]
      }
    }
  }
</script>
<style lang="scss">
  .swiper{
    height: 2.2rem;
    .swiper-container{
      height: 100%;
    }
    .swiper-img{
      height: 100%;
    }
  }
</style>