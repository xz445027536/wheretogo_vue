<template>
  <div class="nav">
    <div class="item">
      <img class="item-img" src="../../../assets/images/index/hotel.png" alt="">
      <span class="item-desc">酒店</span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'HomeNav',
    data(){
      return{}
    }
  }
</script>
<style lang="scss">
  .nav{
    display: flex;
    flex-wrap: wrap;
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin:.1rem 0;
      width: 20%;
      .item-img{
        width: 1.1rem;
      }
      .item-desc{
        margin-top: .1rem;
        font-size: 12px;
      }
    }
  }
</style>