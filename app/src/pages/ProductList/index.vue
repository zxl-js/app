<template>
  <div class="outer">
    <div class="headerInput">
      <i class="icon"></i>
      <input type="text" placeholder="商品搜索,共27572款好物" class="Input" />
    </div>
    <!-- <
       -->
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item.name"
          v-for="item in navDataList.categoryL1List"
          :key="item.id"
        />
      </van-sidebar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Sidebar, SidebarItem } from "vant";

export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  mounted() {
    this.$store.dispatch("getnavDataList");
  },
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  },
  computed: {
    ...mapState({
      navDataList: (state) => state.nav.navDataList,
    }),
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.outer {
  width: 100%;
  height: 100%;
  .headerInput {
    width: 320px;
    height: 35px;
    background-color: #ededed;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp);
      background-size: 100% 100%;
      margin-left: 15px;
      margin-right: 4px;
    }
    .Input {
      border: 0;
      background-color: #ededed;
    }
  }
  // .nav {
  //   border-right: 1px solid #778899;
  //   width: 80px;
  //   margin-top: 20px;
  //   padding-right: 15px;
  //   li {
  //     margin: 0 0 20px 0;
  //   }
  // }
}
</style>
