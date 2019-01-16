<template>
  <div class="mainContant">
    <my-head :back="true">
      <h3>列表</h3>
    </my-head>
    <book-list :allBooks="AllBooks" @deletedBook="removeOneBook"></book-list>
  </div>
</template>

<script>
import MyHead from "../components/MyHead.vue";
import BookList from "../components/BookList.vue";
import { getALLBook, deletedOneBook } from "../api/index";
export default {
  data() {
    return {
      AllBooks: []
    };
  },
  created() {
    this.getAllBooks();
  },
  methods: {
    async getAllBooks() {
      this.AllBooks = await getALLBook();
    },
    async removeOneBook(id) {
      this.AllBooks = await deletedOneBook(id);
      /* this.AllBooks = this.AllBooks.filter(item => {
        item.id != id;
        console.log(item.id != id)
      }); */
      // console.log(this.AllBooks);
      // this.$router.push('/list');
      // console.log(id);
    }
  },
  components: {
    MyHead,
    BookList
  }
};
</script>

<style scoped lang="scss">
.mainContant {
  font-size: 0.16rem;
}
</style>
