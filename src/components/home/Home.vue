<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-nav></home-nav>
  </div>
</template>
<script>
  import {gethome} from '../../assets/api/index'
  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'

  export default {
    name:'Home',
    components:{HomeHeader,HomeSwiper,HomeNav},
    data() {
      return {
        iconList:[],
        recommendList:[],
        swiperList:[],
        weekendList:[]
      }
    },  
    created(){
      //this.axios.get('/mock/index.json').then(res=>{console.log(res)})
     this.getData();
    },
    methods:{
      async getData(){
       let {iconList,recommendList,swiperList,weekendList}=await gethome();
       this.iconList=iconList;
       this.recommendList=recommendList;
       this.swiperList=swiperList;
       this.weekendList=weekendList;
      } 
    },
  }
</script>
<style>

</style>
