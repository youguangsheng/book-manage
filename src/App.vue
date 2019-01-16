<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><span class="iconfont icon-shouye"></span>首页</router-link>
      <router-link to="/list"><span class="iconfont icon-liebiao1"></span>列表</router-link>
      <router-link to="/add"><span class="iconfont icon-tianjia1"></span>添加</router-link>
      <router-link to="/collect"><span class="iconfont icon-icon3"></span>收藏</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#nav {
  width: 100%;
  z-index: 999;
  position: fixed;
  left: 0;
  bottom: 0;
  font-size: 0.16rem;
  font-weight: 500;
  background-color: #fff;
  border-radius: 5px;
  a {
    display: inline-block;
    width: 25%;
    box-sizing: border-box;
    font-weight: 300;
    font-size: 0.12rem;
    color: #2c3e50;
    &.router-link-exact-active {
      color: rgba(200, 10, 10, 0.8);
    }
    .iconfont {
      font-size: 0.2rem;
    }
    span {
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
