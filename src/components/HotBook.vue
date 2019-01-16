<template>
  <section>
    <h3>热门图书</h3>
    <ul>
      <li v-for="(Book,index) in Books" :key="index">
        <div class="top">
          <img :src="Book.bookCover">
        </div>
        <div class="bto">
          <h6>{{ Book.bookName }}</h6>
          <p>{{ Book.author }}</p>
          <p>
            <sub>￥</sub>
            {{ Book.price }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    Books: {
      type: Array,
      require: true
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
section {
  width: 100%;
  margin-bottom: 0.2rem;
  h3 {
    font-size: inherit;
    background-color: #fff;
    height: 0.32rem;
    line-height: 0.32rem;
  }
  ul {
    width: 100%;
    li {
      width: 33.3333333%;
      height: 2rem;
      padding: 5px;
      margin-top: 10px;
      background-color: #fff;
      box-sizing: border-box;
      float: left;
      .top {
        box-sizing: border-box;
        margin: 0.05rem 0;
        img {
          width: 90%;
        }
      }
      .bto {
        box-sizing: border-box;
        text-align: left;
        h6 {
          width: 100%;
          height: 0.23rem;
          line-height: 0.11rem;
        }
        p {
          font-size: 0.1rem;
          font-weight: 500;
          text-align: left;
        }
      }
    }
  }
}
</style>
