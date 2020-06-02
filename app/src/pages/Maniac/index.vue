<template>
  <div class="outer">
    <header>
      <van-icon name="wap-home-o" class="left_icon" size="30px" />
      <h2 class="tx">值得买</h2>
      <div class="header_right">
        <van-icon name="search" size="30px" />
        <van-icon name="cart-o" size="30px" />
      </div>
    </header>
    <div class="content">
      <!-- <img
        src="http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png"
        alt=""
      />-->
      <div class="content_top">
        <div class="title">
          <img src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt />
          <span>严选好物 用心生活</span>
        </div>
      </div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <ul class="drop-down">
        <!-- -->
        <li v-for="(item, index) in list" :key="index">
          <img class="Photo" :src="item.picUrl" alt />
          <p>{{ item.title }}</p>
          <div>
            <img class="head_portrait" :src="item.avatar" alt />
            <span>{{ item.nickname }}</span>
            <!-- <p>{{list}}</p> -->
          </div>
        </li>
      </ul>
      <!-- <p>{{ WaterfallList }}</p> -->
    </van-list>
  </div>
</template>

<script>
import { Icon, List, PullRefresh, cell } from "vant";
import { mapState } from "vuex";
export default {
  data() {
    return {
      list1: [],
      loading: false, //加载状态结束
      finished: false, //加载数据全部完成
      page: 1
    };
  },
  components: {
    [Icon.name]: Icon,
    [List.name]: List,
    [cell.name]: cell,
    [PullRefresh.name]: PullRefresh
  },
  computed: {
    ...mapState({
      BuynavList: state => state.worthbuying.BuynavList,
      // WaterfallList: (state) => state.worthbuying.WaterfallList,
      // WaterfallList
      WaterfallList: state => state.worthbuying.WaterfallList
      // list() {
      //   this.list1.push(...WaterfallList);
      //   console.log('555',this.list1);
      //   return this.list1;
      // }

      // WaterfallList: (state) => state.worthbuying.WaterfallList,
    }),
    list() {
      // console.log("rfdfgd");
      this.list1.push(...this.WaterfallList);
      // console.log("555", this.list1);
      return this.list1;
    }
  },
  mounted() {
    this.Waterfall(this.page);
  },
  methods: {
    Waterfall(page) {
      this.$store.dispatch("getWaterfallhome2", page);
    },
    onLoad() {
      // 异步更新数据
      // this.$store.dispatch(getWaterfallhome2(this.size));
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.page++;
        this.Waterfall(this.page);

        // 加载状态结束
        this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.outer {
  width: 100%;
  height: 100%;
  position: relative;
  header {
    position: fixed;
    width: 100%;
    height: 50px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    .left_icon {
      margin-top: 10px;
      margin-left: 10px;
      width: 30px;
      height: 30px;

      line-height: 30px;
    }
    .tx {
      font-size: 20px;
      margin-top: 10px;
      font-weight: normal;
      line-height: 30px;
      margin-left: 50px;
      // margin: 0 auto;
    }
    .header_right {
      height: 30px;
      line-height: 30px;
      margin-top: 10px;
      width: 80px;
      display: flex;
      margin-right: 10px;
      justify-content: space-around;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    // img {
    //   width: 100%;
    //   height: 280px;
    // }

    .content_top {
      width: 100%;
      height: 240px;
      // background-color: aqua;
      background-image: url(http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png);
      .title {
        display: flex;
        width: 100%;
        padding-top: 30px;
        margin-left: 15px;
        img {
          width: 70px;
          height: 50px;
        }
        span {
          width: 150px;
          // vertical-align: baseline;
          height: 50px;
          // ;
          font-size: 18px;
          color: white;
          margin: 20px 0 0 10px;
        }
      }
    }
  }
  // .my-swipe .van-swipe-item {
  //   color: #fff;
  //   font-size: 20px;
  //   line-height: 150px;
  //   text-align: center;
  //   background-color: #39a9ed;
  //   // margin-top: -100px;
  // z-index: 888;
  // }
  .drop-down {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 180px;
    li {
      // flex: 1;
      height: 290px;
      width: 170px;
      background-color: turquoise;
      margin-bottom: 10px;
      margin-left: 12px;
      img {
        height: 200px;
        width: 100%;
      }
      p {
        font-size: 14px;
        margin: 5px 0;
      }
      div {
        height: 30px;
        width: 100%;
        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
