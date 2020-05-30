<template>
  <div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer";
// 大兄弟， 劝你使用 eslint 和 preitter 来格式化代码， 有些规则不想要可以到 eslint 的官网去给他禁止掉，
// 自己手写代码一时爽，重构 就是火葬场
// eslit + preitter
// 有时间学习下： vue3.x 的 组合api 还有 typescript
export default {
  data() {
    return {
      // active: 0,
    };
  },
  components: {
    Footer,
  },
};
</script>

<style scoped></style>
