<template>
  <div class="nav">
    <router-link to="/" class="nav-com">
      <div class="item-com" v-for="(item,i) of bigImgs" :key="i">
        <img class="big-img" :src="item.src" alt />
        <span class="nav-desc" v-html="item.text"></span>
      </div>
    </router-link>
    <router-link to="/" class="nav-com">
      <div class="item-com" v-for="(item,j) of mdImgs" :key="j">
        <img class="md-img" :src="item.src" alt />
        <span class="nav-desc" v-html="item.text"></span>
      </div>
    </router-link>
    <router-link to="/" class="nav-com">
      <div class="item-com" v-for="(item,k) of smallImg" :key="k">
        <img class="small-img" :src="item.src" alt />
        <span class="nav-desc" v-html="item.text"></span>
      </div>
    </router-link>
    <router-link to="/" class="nav-com">
      <div class="item-com" v-for="(item,idxs) of smallImgs" :key="idxs">
        <img class="small-img" :src="item.src" alt />
        <span class="nav-desc" v-html="item.text"></span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeNav",
  data() {
    return {
      bigImgs: [
        {src: require("../../../assets/images/index/hotel.png"),text: "酒店"},
        {src: require("../../../assets/images/index/flight.png"),text: "机票"},
        {src: require("../../../assets/images/index/package.png"),text: "度假"},
        {src: require("../../../assets/images/index/train.png"),text: "火车票"},
        {src: require("../../../assets/images/index/piao.png"),text: "景点门票"}
      ],
      mdImgs: [
        {src: require("../../../assets/images/index/group.png"),text: "特惠酒店"},
        {src: require("../../../assets/images/index/bargainflight.png"),text: "低价机票"},
        {src: require("../../../assets/images/index/inn.png"), text: "客栈" },
        {src: require("../../../assets/images/index/haiwai.png"),text: "海外酒店"},
        {src: require("../../../assets/images/index/kezhan.png"),text: "民宿"}
      ],
      smallImg: [
        {src: require("../../../assets/images/index/bus.png"),text: "汽车票船票"},
        {src: require("../../../assets/images/index/tuan.png"),text: "旅游团购"},
        {src: require("../../../assets/images/index/freeTravel.png"),text: "自由行"},
        {src: require("../../../assets/images/index/car.png"),text: "专车自驾"},
        {src: require("../../../assets/images/index/aroundtravel.png"),text: "周边短途"}
      ],
      smallImgs: [
        {src: require("../../../assets/images/index/jr.png"),text: "金融理财"},
        {src: require("../../../assets/images/index/card.png"),text: "保险车险"},
        {src: require("../../../assets/images/index/travel.png"),text: "攻略"},
        {src: require("../../../assets/images/index/youlun.png"),text: "游轮"},
        {src: require("../../../assets/images/index/oversea.png"),text: "换外币"}
      ]
    };
  }
};
</script>

<style lang="scss">
.nav {
  .nav-desc {
    line-height: 0.4rem;
    font-size: 12px;
  }

  .nav-com {
    display: flex;
    .item-com {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      margin: 0.1rem 0;
      color: #333;
      .big-img {
        width: 1.1rem;
      }
      .md-img {
        width: 0.72rem;
      }
      .small-img {
        width: 0.44rem;
      }
    }
  }
}
</style>