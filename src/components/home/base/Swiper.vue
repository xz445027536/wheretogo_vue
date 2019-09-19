<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in dataimg" :key="item">
        <img class="swiper-img" :src="item.src" alt="" >
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
            el: '.swiper-pagination'

          },
          loop:true,
          autoplay:2000
        },
        dataimg:[
          {src:require('../../../assets/images/index/swiper/01.jpg')},
          {src:require('../../../assets/images/index/swiper/02.jpg')},
          {src:require('../../../assets/images/index/swiper/03.jpg')},
          {src:require('../../../assets/images/index/swiper/04.jpg')},
          {src:require('../../../assets/images/index/swiper/05.jpg')}
        ]
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