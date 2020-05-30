<template>
  <div class="outer">
    <div class="conter">
      <header class="header">
        <a href="/" class="logo"></a>
        <div class="headerInput">
          <i class="icon"></i>
          <input
            type="text"
            placeholder="商品搜索,共27572款好物"
            class="Input"
          />
        </div>
        <van-button size="mini" plain color="red">登入</van-button>
      </header>
      <nav class="Nav">
        <div v-show="isShow" class="nav_List">
          <span class="active">推荐</span>
          <span>居家生活</span>
          <span>服饰鞋包</span>
          <span>美食酒水</span>
        </div>
        <div class="nav_List2" v-show="!isShow">
          <div class="nav_List2_top">
            <p>全部频道</p>
          </div>
          <div class="nav_List2_bottom">
            <van-button class="Special">推荐</van-button>

            <van-button class="Special">居家生活</van-button>

            <van-button class="Special">服饰鞋包</van-button>

            <van-button class="Special">美食酒水</van-button>

            <van-button class="Special">个护清洁</van-button>

            <van-button class="Special">母婴亲子</van-button>

            <van-button class="Special">运动旅行</van-button>

            <van-button class="Special">数码家电</van-button>

            <van-button class="Special">严选全球</van-button>
          </div>
        </div>
        <span>
          <van-icon
            :name="isShow ? 'arrow-down' : 'arrow-up'"
            class="crumbs"
            @click="isShow = !isShow"
          />
        </span>

        <!-- <p>
            <van-icon name="arrow-up" @click="isShow = !isShow" />
        </p>-->
      </nav>
    </div>

    <van-swipe class="swiper">
      <van-swipe-item>
        <!-- <img v-lazy="" /> -->
        <img
          src="https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
    </van-swipe>

    <section>
      <!-- 须知 -->
      <ul class="NoticeList">
        <li v-for="item in homeList.policyDescList" :key="item.id">
          <img :src="item.icon" alt />
          <a href="javascript:;">{{ item.desc }}</a>
        </li>
      </ul>
      <!-- 商品详情 -->
      <ul class="swiper-slide">
        <li v-for="(item, index) in homeList.kingKongModule" :key="index">
          <img :src="item.picUrl" alt />
          <div>{{ item.text }}</div>
        </li>
      </ul>
      <!-- 促销 -->
      <div class="promotion">
        <div class="promItem">
          <a href="javascript:;">
            <img
              src="https://yanxuan.nosdn.127.net/7fd95465634b18169466121fae470269.png?quality=75&type=webp&imageView&thumbnail=750x0"
              alt
            />
          </a>
        </div>
        <div class="promItem">
          <a href="javascript:;">
            <img
              src="https://yanxuan.nosdn.127.net/6dc4a8e77b84faef0264dc427c4b1b8b.png?quality=75&type=webp&imageView&thumbnail=750x0"
              alt
            />
          </a>
        </div>
        <ul class="floor">
          <li class="floorList">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/24d20597f75afc86098b0b99c11033bf.png?quality=75&type=webp&imageView&thumbnail=375x0"
                alt
              />
            </a>
          </li>
          <li class="floorList">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/16ef9b23050650f50604e825fa61e206.png?quality=75&type=webp&imageView&thumbnail=375x0"
                alt
              />
            </a>
          </li>
          <li class="floorList">
            <a href="javascript:;">
              <img
                src="https://yanxuan.nosdn.127.net/079bda44521cb076f4071dd555d2fabd.png?quality=75&type=webp&imageView&thumbnail=250x0"
                alt
              />
            </a>
          </li>
        </ul>
      </div>
      <!-- 新人专享 -->
      <div class="freshmanModule">
        <h2>- 新人专享礼 -</h2>
        <div class="content">
          <div class="content_left">
            <h3>新人专享礼包</h3>
            <a href="javascript:;">
              <img
                src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png"
                alt
              />
            </a>
          </div>
          <div class="content_ringht">
            <div class="ringht_top">
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt
                />
              </a>
              <h3>福利社</h3>
              <p>今日特价</p>
            </div>
            <div class="ringht_button">
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/08ed8b0e068a3ff2a0aae8c427db1858.png?quality=75&type=webp&imageView&thumbnail=200x200"
                  alt
                />
              </a>
              <h3>新人拼团</h3>
              <p>1元起包邮</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 类目热销榜 -->
      <div class="categoryHotSellModule">
        <h2>类目热销榜</h2>
        <div class="item-big">
          <div class="item-big1">
            <span>热销榜</span>
            <a href="javascript:;">
              <img
                src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </a>
          </div>
          <div class="item-big2">
            <span>好评榜</span>
            <a href="javascript:;">
              <img
                src="https://yanxuan-item.nosdn.127.net/22fb5ccf1b2ed16f01fd28f6281f86a8.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </a>
          </div>
        </div>

        <div class="line2">
          <div class="List1">
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/16b4d581afc5a9cd36e8adc8ed6ceb4f.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/3ac01b375f7328bacd1ce684f50a9af1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/3ac01b375f7328bacd1ce684f50a9af1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/3ac01b375f7328bacd1ce684f50a9af1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
          </div>

          <div class="List2">
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/3ac01b375f7328bacd1ce684f50a9af1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/3ac01b375f7328bacd1ce684f50a9af1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/3ac01b375f7328bacd1ce684f50a9af1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
            <div class="item">
              <p>居家生活榜</p>
              <img
                src="https://yanxuan-item.nosdn.127.net/3ac01b375f7328bacd1ce684f50a9af1.png?quality=75&type=webp&imageView&thumbnail=200x200"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      <div class="popularItemModule">
        <div class="moduleTitle">
          <p>人气推荐</p>
          <p>更多 ></p>
        </div>

        <div class="spItem">
          <img
            src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280"
            alt
          />

          <div>
            <p>1231546451</p>
            <p>13213245465</p>
            <p>￥123</p>
          </div>
        </div>

        <div class="list">
          <div>
            <a href="javascript:;">
              <img
                src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt
              />
            </a>
            <p class="details">132465789</p>
            <p class="price">￥13</p>
          </div>
          <div>
            <a href="javascript:;">
              <img
                src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt
              />
            </a>
            <p class="details">132465789</p>
            <p class="price">￥13</p>
          </div>
          <div>
            <a href="javascript:;">
              <img
                src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                alt
              />
            </a>
            <p class="details">132465789</p>
            <p class="price">￥13</p>
          </div>
        </div>
      </div>

      <div class="flashSaleModule">
        <div class="moduleTitle1">
          <p>现实够 00:00:00</p>
          <p>更多 ></p>
        </div>
        <div class="discountList">
          <div class="list1">
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
                <span class="retailPrice">￥1399</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
                <span class="retailPrice">￥1399</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
                <span class="retailPrice">￥1399</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
                <span class="retailPrice">￥1399</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
                <span class="retailPrice">￥1399</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
                <span class="retailPrice">￥1399</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="newItemModule">
        <div class="moduleTitle1">
          <p>新品首发</p>
          <p>更多 ></p>
        </div>
        <div class="discountList">
          <div class="list1">
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
              </p>
            </div>
            <div>
              <a href="javascript:;">
                <img
                  src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330"
                  alt
                />
              </a>
              <p class="price">
                <span>￥13</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Button, Icon, Swipe, SwipeItem, Lazyload } from "vant";
export default {
  data() {
    return {
      isShow: true,
      // homeList: [], //用来存储数据
    };
  },
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
  },
  computed: {
    ...mapState({
      homeList: (state) => state.home.homeDataList,
    }),
  },
  mounted() {
    this.$store.dispatch("gethomeDataList");
    // console.log(this.$store);
    // this.homeList = this.homeList;
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
.outer {
  width: 100%;
  height: 100%;
  // position: relative;
  // overflow: hidden;
  .conter {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    // height: 100%;
    z-index: 999;
    background-color: white;
    .header {
      width: 100%;
      display: flex;
      margin-top: 10px;
      // justify-content: center;
      align-items: center;
      .logo {
        width: 70px;
        height: 20px;
        display: inline-block;
        margin-left: 15px;
        margin-right: 10px;
        background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp);
        background-size: cover;
      }
      .headerInput {
        width: 220px;
        height: 35px;
        background-color: #ededed;
        border-radius: 5px;
        display: flex;
        align-items: center;
        margin-right: 10px;
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
    }
    .Nav {
      margin-top: 10px;
      width: 100%;
      position: relative;
      .nav_List {
        // display: inline;
        display: flex;
        .active {
          color: red;
        }
        span {
          display: inline-block;
          width: 78px;
          // flex: 1;

          text-align: center;
          // width: 20%;
        }
      }
      .nav_List2 {
        width: 100%;
        // display: flex;
        .nav_List2_top {
          width: 100%;
          display: flex;
          // justify-content: space-around;
          justify-content: space-between;
          p {
            &:nth-child(1) {
              margin-left: 20px;
            }
            &:nth-child(2) {
              margin-right: 30px;
            }
          }
        }
        .nav_List2_bottom {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          // li {
          //   margin-left: 10px;
          //   margin-bottom: 10px;
          //   height: 30px;
          //   width: 70px;
          //   text-align: center;
          //   line-height: 35px;
          // }
          .Special {
            height: 30px;
            width: 80px;
            margin-left: 10px;
            margin-bottom: 10px;
            font-size: 12px;
          }
        }
      }
      .crumbs {
        position: absolute;
        right: 30px;
        top: 4px;
      }
    }
  }
  .swiper {
    padding-top: 80px;
    img {
      width: 100%;
      height: 180px;
    }
  }
  section {
    width: 100%;
    .NoticeList {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin: 7px 0 7px 0;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      a {
        font-size: 12px;
        padding-left: 7px;
      }
    }
    .swiper-slide {
      width: 100%;
      // height: 200px;
      display: flex;
      flex-wrap: wrap;
      margin-left: 10px;
      // font-size: 0px;
      li {
        width: 20%;
        height: 80px;
        margin-bottom: 10px;
        // font-size: 16px;
        // margin-left: 10px;
        img {
          width: 55px;
          height: 55px;
          // vertical-align: bottom;
          font-size: 0;
          // vertical-align: middle;
          // display: block;
        }
      }
    }

    .promotion {
      width: 100%;
      background-color: yellowgreen;
      margin-bottom: 20px;
      .promItem {
        width: 100%;
        img {
          width: 100%;
          height: 120px;
        }
        &:nth-child(2) {
          margin-top: 3px;
          height: 100px;
          // margin-bottom: 24px;
          width: 350px;
          margin: 0 auto 24px;
        }
      }
      .floor {
        width: 100%;
        // display: flex;
        overflow: hidden;

        .floorList {
          width: 110px;
          height: 120px;
          float: left;
          margin-left: 11px;
          // flex: 1;
          // flex: 1;
          // width: 3.33333333333%;
          // height: 110px;
          img {
            height: 120px;
            // width: 120px;
            width: 100%;
          }
        }
      }
    }
    .freshmanModule {
      width: 100%;
      margin-bottom: 20px;
      background-color: blanchedalmond;
      h2 {
        text-align: center;
        font-size: 20px;
        margin: 10px 0;
      }
      .content {
        width: 100%;
        display: flex;
        .content_left {
          width: 172px;
          height: 230px;
          margin-left: 12px;
          margin-right: 5px;
          background-color: #f9e9cf;
          h3 {
            font-size: 16px;
            font-weight: normal;
            margin: 20px 0 20px 15px;
          }
          img {
            width: 120px;
            height: 130px;
            display: block;
            margin-left: 20px;
          }
        }
        .content_ringht {
          width: 172px;
          // background-color: red;
          margin-right: 7px;
          .ringht_top {
            height: 113px;
            margin-bottom: 3px;
            // display: flex;
            background-color: #fbe2d3;
            img {
              width: 100px;
              height: 90px;
              float: right;
              margin-top: 20px;
            }
            h3 {
              font-size: 16px;
              font-weight: normal;
              padding-top: 15px;
              padding-left: 15px;
              padding-bottom: 5px;
              display: inline-block;
              // margin: 20px 0 5px 15px;
            }
            p {
              color: #c0c0c0;
              font-size: 12px;
              padding-left: 15px;
              // display: inline-block;
            }
          }
          .ringht_button {
            position: relative;
            height: 113px;
            // display: flex;
            background-color: #ffecc2;
            img {
              width: 100px;
              height: 90px;
              float: right;
              // left: 20px;
              // right: 0px;
              // position: absolute;
              margin-top: 20px;
            }
            h3 {
              font-size: 14px;
              font-weight: normal;
              padding-top: 15px;
              padding-left: 15px;
              padding-bottom: 5px;
              // display: inline-block;
              // margin: 20px 0 5px 15px;
            }
            p {
              color: #c0c0c0;
              font-size: 12px;
              margin-left: 15px;
              display: inline-block;
            }
          }
        }
      }
    }
    .categoryHotSellModule {
      margin: 0 12px 0 12px;
      background-color: aqua;
      height: 400px;
      // height: 400px;
      // overflow: hidden;
      h2 {
        font-weight: normal;
        margin: 15px 0;
      }
      .item-big {
        width: 100%;
        display: flex;
        .item-big1 {
          width: 172px;
          // height: 230px;
          margin-right: 5px;
          background-color: red;
          height: 130px;
          span {
            display: inline-block;
            margin-top: 50px;
            font-size: 14px;
            font-weight: bold;
            margin-left: 10px;
            color: #000;
            padding-bottom: 5px;
            border-bottom: 1px solid #000;
          }
          img {
            float: right;
            width: 110px;
            height: 130px;
          }
        }
        .item-big2 {
          width: 172px;
          // height: 230px;
          background-color: red;
          // float:right;
          height: 130px;
          span {
            display: inline-block;
            margin-top: 50px;
            font-size: 14px;
            font-weight: bold;
            margin-left: 10px;
            color: #000;
            padding-bottom: 5px;
            border-bottom: 1px solid #000;
          }
          img {
            float: right;
            width: 110px;
            height: 130px;
          }
        }
      }
      .line2 {
        width: 100%;
        margin-top: 15px;
        .List1 {
          height: 90px;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 15px;
          .item {
            width: 83px;
            height: 100px;
            margin-right: 4px;
            // padding-left: 5px;
            background-color: yellowgreen;

            p {
              font-size: 12px;
              // margin: 0 auto;
              // margin-top: 5px;
              display: inline-block;
              // text-align: center;
              margin-top: 15px;
              margin-left: 13px;
            }
            img {
              width: 80px;
              height: 60px;
            }
          }
        }
        .List2 {
          height: 90px;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 30px;
          .item {
            width: 83px;
            height: 100px;
            margin-right: 4px;
            // padding-left: 5px;
            background-color: yellowgreen;

            p {
              font-size: 12px;
              // margin: 0 auto;
              // margin-top: 5px;
              display: inline-block;
              // text-align: center;
              margin-top: 15px;
              margin-left: 13px;
            }
            img {
              width: 80px;
              height: 60px;
            }
          }
        }
      }
    }
    .popularItemModule {
      margin: 0px 6px;
      // height: 500px;
      background-color: aquamarine;
      .moduleTitle {
        width: 100%;
        // overflow: hidden;

        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        h2 {
          color: #333;
          // float: left;
        }
        p {
          // display: inline-block;
          // float: right;
        }
      }
      .spItem {
        width: 100%;
        display: flex;
        background-color: burlywood;
        img {
          width: 50%;
          height: 130px;
        }
        div {
          width: 50%;
          margin-top: 30px;
          p {
          }
        }
      }
      .list {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        div {
          img {
            height: 110px;
            width: 107px;
            background-color: #f5f5f5;
          }
          .details {
            color: #333;
            font-size: 12;
          }
          .price {
            color: red;
            font-size: 14px;
          }
        }
      }
    }
    .flashSaleModule {
      margin: 0px 6px;
      background-color: salmon;
      .moduleTitle1 {
        width: 100%;
        // overflow: hidden;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        h2 {
          color: #333;
          // float: left;
        }
        p {
          // display: inline-block;
          // float: right;
        }
      }
      .list1 {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div {
          img {
            height: 110px;
            width: 107px;
            background-color: #f5f5f5;
          }
          .price {
            color: red;
            font-size: 16px;
            .retailPrice {
              margin-left: 5px;
              font-size: 12px;
              text-decoration: line-through;
            }
          }
        }
      }
    }
    .newItemModule {
      margin: 0px 6px;
      background-color: salmon;
      .moduleTitle1 {
        width: 100%;
        // overflow: hidden;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        h2 {
          color: #333;
          // float: left;
        }
        p {
          // display: inline-block;
          // float: right;
        }
      }
      .list1 {
        width: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div {
          img {
            height: 110px;
            width: 107px;
            background-color: #f5f5f5;
          }
          .price {
            color: red;
            font-size: 16px;
            .retailPrice {
              margin-left: 5px;
              font-size: 12px;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>
