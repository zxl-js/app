<template>
  <div class="container">
    <router-view />
    <van-tabbar v-model="active" active-color="#D2691E" route>
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/productlist" icon="orders-o">分类</van-tabbar-item>
      <van-tabbar-item to="/maniac" icon="photo-o">值得买</van-tabbar-item>
      <van-tabbar-item to="/shoppinglist" icon="logistics"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item to="/personal" icon="manager-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped></style>
