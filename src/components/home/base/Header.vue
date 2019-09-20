<template>
  <div class="header">
    <i class="iconfont icon-fanhui header-back"></i>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-right">
      <span>深圳</span><i class="iconfont icon-jiantou"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name:'HomeHeader',
    data(){
      return{}
    }
  }
</script>
<style lang="scss">
  .header{
    display:flex;
    height:.88rem; 
    background-color: #00bcd4; 
    line-height:.88rem;
    color: #fff;
    .header-back{
      width:.88rem;
      text-align: center;
    }
    .header-input{
      flex: 1;
      height:.64rem;
      margin-top: 0.12rem;
      border-radius: .1rem;
      background-color: #fff;
      line-height: .64rem;
      .icon-sousuo{
      padding:0 0.1rem;
      vertical-align: middle;
      color: #bbb;
      }
      input{
      vertical-align: middle;
      font-size: .26rem;
      }
    }
    .header-right{
      padding:0 .2rem;
      .icon-jiantou{
        font-size:.24rem;
        margin-left:.1rem;
      }
    }
  }  
</style>