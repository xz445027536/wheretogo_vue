<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>
<script>
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  export default {
    name:'Home',
    components:{HomeHeader,HomeSwiper}
  }
</script>
<style>

</style>
