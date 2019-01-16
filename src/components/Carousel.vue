<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in Slides" :key="index">
        <img :src="slide">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    Slides: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2000, //自动切换的时间间隔，单位ms
          stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
          //stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
          disableOnInteraction: false, //用户操作swiper之后，是否禁止autoplay。
          reverseDirection: false, //开启反向自动轮播。
          waitForTransition: true //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        loop: true
      }
    };
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
