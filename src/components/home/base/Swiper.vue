<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="../../../../public/images/index/swiper/01.jpg" alt="" >
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../public/images/index/swiper/02.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../public/images/index/swiper/03.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../public/images/index/swiper/04.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="../../../../public/images/index/swiper/05.jpg" alt="">
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
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  .swiper{
    height: 2.2rem;
    margin: .13rem;
    .swiper-container{
      height: 100%;
    }
    .swiper-img{
      height: 100%;
    }
  }
</style>