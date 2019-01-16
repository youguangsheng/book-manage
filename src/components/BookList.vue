<template>
  <section>
    <ul>
      <router-link  :to="{name:'detail',params:{bid:book.id}}" tag="li"
        v-for="(book,index) in allBooks" :key="index">
        <div class="left">
          <img :src="book.bookCover">
        </div>
        <div class="right">
          <h4>{{ book.bookName }}</h4>
          <p>{{ book.author }}</p>
          <p>
            <span>价格：</span>
            {{ book.price }}
          </p>
          <p>{{ book.Desc }}</p>
        </div>
        <!-- <div class="destory" @click.stop="deletdOneBook(book.id)">x</div> -->
        <div class="destory" @click.stop="deleted(id=book.id)">x</div>
      </router-link>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    allBooks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    /* deletedOneBook(id) {
      // this.$emit("deletedBook", id);
      console.log(id);
    }, */
    deleted(id) {
      this.$emit("deletedBook", id);
      // console.log(id);
    }
  }
};
</script>

<style scoped lang="scss">
section {
  width: 100%;
  margin-bottom: 0.2rem;
  ul {
    width: 100%;
    li {
      position: relative;
      width: 100%;
      padding: 5px;
      margin-top: 10px;
      background-color: #fff;
      display: flex;
      box-sizing: border-box;
      .left {
        box-sizing: border-box;
        flex: 2;
        padding: 10px 15px 0px 0px;
        img {
          width: 100%;
        }
      }
      .right {
        flex: 4;
        box-sizing: border-box;
        text-align: left;
        p {
          font-size: 0.14rem;
          font-weight: 500;
          padding: 3px;
        }
      }
      .destory {
        position: absolute;
        width: 0.18rem;
        height: 0.18rem;
        /* border:1px red solid; */
        right: 0.08rem;
        top: 0.08rem;
        font-size: 0.12rem;
      }
    }
  }
}
</style>
