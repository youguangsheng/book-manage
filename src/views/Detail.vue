<template>
  <div class="mainContant">
    <my-head :back="true">
      <h3>详情</h3>
    </my-head>
    <ul>
      <li>
        <label for="bookName">书名:</label>
        <input type="text" v-model="book.bookName" id="bookName" focus>
      </li>
      <li>
        <label for="bookCover">封面:</label>
        <input type="text" v-model="book.bookCover" id="bookCover">
      </li>
      <li>
        <label for="author">作者:</label>
        <input type="text" v-model="book.author" id="author">
      </li>
      <li>
        <label for="price">价格:</label>
        <input type="text" v-model="book.price" id="price">
      </li>
      <li>
        <label for="Desc">描述:</label>
        <input type="text" v-model="book.Desc" id="Desc">
      </li>
      <li>
        <!-- <button @click="updateOneBook">提交</button> -->
        <button @click="updateBook">提交</button>
      </li>
    </ul>
  </div>
</template>

<script>
import MyHead from "../components/MyHead.vue";
import { getOneBook, updateOneBook } from "../api/index.js";
export default {
  props: {},
  data() {
    return {
      book: {}
    };
  },
  computed: {
    bid() {
      return this.$route.params.bid;
    }
  },
  created() {
    this.getBook();
  },
  watch: {},
  methods: {
    async getBook() {
      this.book = await getOneBook(this.bid);
    },
    async updateBook() {
      await updateOneBook(this.bid, JSON.stringify(this.book));
      this.$router.push("/list");
    }
  },
  components: {
    MyHead
  }
};
</script>

<style scoped lang="scss">
.mainContant {
  font-size: 0.16rem;
  height: 100%;
  ul {
    margin: 0.2rem 0;
    width: 100%;
    font-size: 0.2rem;
    box-sizing: border-box;
    li {
      width: 100%;
      margin: 0.2rem 0;
      box-sizing: border-box;

      label {
        font-size: 20px;
        /* display: block; */
      }
      input {
        height: 30px;
        width: 80%;
        font-size: 16px;
        color: rgba(20, 20, 20, 0.5);
        font-weight: 500;
        outline: none;
      }
      button {
        margin-top: 10px;
        outline: none;
        border: none;
        width: 80px;
        height: 50px;
        border-radius: 8px;
        background: #afd9ee;
        font-size: 18px;
      }
    }
  }
}
</style>
