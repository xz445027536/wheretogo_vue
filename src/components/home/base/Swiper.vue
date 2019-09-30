<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl" alt="" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name:'HomeSwiper',
    props:["swiperList"],
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
        }
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
      width: 100%;
      height: 100%;
    }
  }
</style>