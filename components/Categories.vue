<template>
  <section class="section categories">
    <div class="title">
      <span>CATEGORIES</span>
      <h2>2022 Latest Collection</h2>
    </div>

    <div class="products container">
      <div
        class="product"
        v-for="(item, index) in data"
        :key="index + 'categories'"
      >
        <NuxtLink :to="`${item.category.toLowerCase()}/${item.id}`">
          <div class="top d-flex">
            <img :src="item.url" alt="" />
            <div class="icon d-flex">
              <em class="bx bxs-heart"></em>
            </div>
          </div>
          <div class="bottom">
            <div class="d-flex">
              <h4>{{ item.title }}</h4>
              <a href="" class="btn cart-btn">Add to Cart</a>
            </div>
            <div class="d-flex">
              <div class="price">${{ item.price }}</div>
              <div class="rating">
                <em
                  class="bx bxs-star"
                  v-for="index in rating(item.rating)"
                  :key="index + 'star'"
                ></em>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div class="button d-flex" @click="loadMore">
      <a class="btn loadmore">{{ btn_text }}</a>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      page: 0,
      size: 3,
      btn_text: "Load More",
      data: [],
    };
  },
  computed: {
    ...mapState("products", ["data_product"]),
  },
  watch: {
    data_product(newVal) {
      if (this.page === 0) {
        this.data = newVal;
      } else {
        this.data.push(...newVal);
      }
    },
    page(newVal) {
      if (newVal === 2) {
        this.btn_text = "Show Less";
      } else {
        this.btn_text = "Load More";
      }
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    ...mapActions("products", ["getDataProducts"]),

    loadMore() {
      if (this.page === 2) {
        this.page = 0;
      } else {
        this.page++;
      }
      this.getData();
    },

    async getData() {
      await this.getDataProducts({ page: this.page, size: this.size });
    },

    rating(rate) {
      return Math.floor(rate);
    },
  },
};
</script>

<style>
</style>