<template>
  <div class="outer">
    <div class="headerInput">
      <i class="icon"></i>
      <input type="text" placeholder="商品搜索,共27572款好物" class="Input" />
    </div>
    <van-tree-select
      height="100%"
      width="200px"
      class="content"
      :items="navDataList"
      :main-active-index.sync="active"
    >
      <template #content>
        <div class="product">
          <img
            class="logo"
            src="https://yanxuan.nosdn.127.net/2c669cac8b0844bbd2620a5172a53dbd.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
            alt
          />
          <div class="item_list">
            <ul class="list">
              <!-- 让左边导航栏  对应右边的下标 数据 -->
              <li v-show="active==index" v-for="(item,index) in cateLists" :key="item.id">
                <!-- 遍历根据下标 找到前四个数据 -->
                <div
                  v-show="index<=3"
                  v-for="list in item.categoryList"
                  :key="list.id"
                  class="right_list"
                >
                  <img :src="list.bannerUrl" alt />
                  <span>{{list.name}}</span>
                </div>

                <!-- 遍历根据下标 找到后面所有的数据数据 -->
                <div
                  v-show="index>3"
                  v-for="list in item.subCateList"
                  :key="list.id"
                  class="left_list"
                >
                  <!-- <h2>{{list.frontName}}</h2> -->
                  <img :src="list.wapBannerUrl" alt />
                  <span>{{list.name}}</span>
                </div>
              </li>
              <!-- <li v-show="active>2">
                <h2 class="title">口碑好物</h2>
                <div class="itemList">
                  <img
                    src="https://yanxuan.nosdn.127.net/78c6f5437b032f2cfd9be02b5e8f5d65.jpg?quality=75&type=webp&imageView&thumbnail=144x144"
                    alt
                  />
                  <p>口碑好物</p>
                </div>
              </li>-->
            </ul>
          </div>
        </div>
        <!-- <van-image v-if="active === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" /> -->
        <!-- <van-image v-if="active === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" /> -->
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TreeSelect, image } from "vant";

export default {
  data() {
    return {
      active: 0
      // items: [{ text: "分组 3" }, { text: "分组 2" }]
    };
  },
  mounted() {
    this.$store.dispatch("getnavDataList");
    this.$store.dispatch("getCateLists");
    // setTimeout(() => {
    //   console.log("aaa", this.cateLists[0]);

    //   console.log("aaa", this.cateLists[0].categoryList);
    // }, 3000);
  },
  components: {
    [TreeSelect.name]: TreeSelect,
    [image.name]: image
  },
  computed: {
    ...mapState({
      navDataList: state => state.nav.navDataList,
      cateLists: state => state.nav.cateLists
    })
  }
  //  <div
  //                 v-show="index>3"
  //                 v-for="list in item.subCateList"
  //                 :key="list.id"
  //                 class="left_list"
  //               >
  //                 <!-- <h2>{{list.frontName}}</h2> -->
  //                 <img :src="list.wapBannerUrl" alt />
  //                 <span>{{list.name}}</span>
  //               </div>
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.outer {
  width: 100%;
  height: 100%;
  .headerInput {
    width: 340px;
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
  .content {
    width: 100%;
    margin-top: 15px;
    div {
      &:nth-child(1) {
        flex: none;
        // border-right: 3px solid red;
        // padding-right: 5px;
      }
    }
    .product {
      width: 300px;
      // height: 100%;
      .logo {
        width: 250px;
        height: 120px;
        margin-left: 22px;
        margin-top: 20px;
      }
      .item_list {
        width: 250px;
        height: 100%;
        .list {
          width: 250px;
          height: 100%;
          display: flex;
          margin-left: 22px;
          margin-top: 10px;
          flex-wrap: wrap;
          li {
            // flex: 1;
            flex-wrap: wrap;
            display: flex;
            width: 250px;
            height: 100%;
            .right_list {
              // flex: 1;
              margin-left: 3px;
              // margin: 0 auto;
              width: 80px;
              height: 90px;
              text-align: center;
              margin-bottom: 40px;
              img {
                width: 80px;
                height: 70px;
              }
              span {
                font-size: 12px;
                // display: block;
                // margin: 0 auto;
              }
            }
            .left_list {
              // flex: 1;
              margin-left: 3px;
              // margin: 0 auto;
              width: 80px;
              height: 90px;
              text-align: center;
              margin-bottom: 40px;
              h2 {
                font-size: 14px;
              }
              img {
                width: 80px;
                height: 70px;
              }
              span {
                font-size: 12px;
                // display: block;
                // margin: 0 auto;
              }
            }

            // &:nth-child(2) {
            //   flex: 1;
            //   width: 80px;
            //   height: 90px;
            //   h2 {
            //     font-size: 14px;
            //   }
            //   img {
            //     width: 80px;
            //     height: 70px;
            //   }
            //   p {
            //     font-size: 12px;
            //     margin-left: 17px;
            //   }
            // }
          }
        }
      }
    }
  }
  // .content {
  //   // padding: 15px 0;
  //   // width: 240px;
  //   // .van-sidebar {
  //   //   // a {
  //   //   //   width: 90px;
  //   //   //   padding: 15px 0 15px 10px;
  //   //   // }
  //   // }
  // }
  // .nav {
  //   border-right: 1px solid #778899;
  //   width: 80px;
  //   margin-top: 20px;
  //   padding-right: 15px;
  //   li {
  //     margin: 0 0 20px 0;
  //   }
  // }
  /*
  
  */
}
</style>
