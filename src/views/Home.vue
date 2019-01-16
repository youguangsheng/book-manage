<template>
  <div class="mainContant">
    <my-head>
      <h3>首页</h3>
    </my-head>

    <transition name="fade">
      <!-- <keep-alive> -->
      <carousel :Slides="swiperSlides"></carousel>
      <!-- </keep-alive> -->
    </transition>
    <transition name="fade">
      <!-- <keep-alive> -->
      <hot-book :Books="hotBooks"></hot-book>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
import MyHead from "../components/MyHead.vue";
import Carousel from "../components/Carousel.vue";
import HotBook from "../components/HotBook.vue";
import { getSwiperImage, getHotBook } from "../api/index.js";
export default {
  props: {},
  data() {
    return {
      swiperSlides: [],
      hotBooks: []
    };
  },
  created() {
    this.SwiperSlides();
    this.HotBooks();
  },
  methods: {
    async SwiperSlides() {
      this.swiperSlides = await getSwiperImage();
    },
    async HotBooks() {
      this.hotBooks = await getHotBook();
      // console.log(this.hotBooks);
    }
  },
  components: {
    MyHead,
    Carousel,
    HotBook
  }
};
</script>

<style scoped lang="scss">
.mainContant {
  font-size: 0.16rem;
  .fade-enter-active,
  .fade-leave-active {
    transition: all 5s ease;
    opacity: 1;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
