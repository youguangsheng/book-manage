<template>
  <div class="header">
    <slot>列表</slot>
    <span class="iconfont icon-ffanhui-" v-if="back" @click="backward"></span>
  </div>
</template>

<script>
export default {
  props:{
    back:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {};
  },
  methods: {
    backward(){
      this.$router.go(-1)
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 50px;
  font-size: 0.16rem;
  line-height: 50px;
  text-align: center;
  color: #202629;
  letter-spacing: 10px;
  background-color: #acd9ee;
  border-radius: 5px;
  span {
    display: inline-block;
    position: absolute;
    left: 0.1rem;
    top: 0;
  }
}
</style>
