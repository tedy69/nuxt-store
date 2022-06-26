<template>
  <div class="section collection" id="collection">
    <div class="title">
      <span>COLLECTION</span>
      <h2>Our Top Collection</h2>
    </div>
    <div class="filters d-flex">
      <div
        v-for="(item, index) in listFilter"
        :key="index + 'filter'"
        :class="{ active: selected === item }"
        @click="clickSelected(item)"
      >
        {{ item }}
      </div>
    </div>

    <div class="products container">
      <carousel v-bind="options">
        <slide
          class="carousel-item"
          v-for="(item, index) in filter_product"
          :key="index + 'collections'"
        >
          <NuxtLink :to="`${item.category.toLowerCase()}/${item.id}`">
            <div class="product">
              <div class="top d-flex">
                <img :src="item.url" alt="" />
                <div class="icon d-flex">
                  <em class="bx bxs-heart"></em>
                </div>
              </div>
              <div class="bottom">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
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
            </div>
          </NuxtLink>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      options: {
        loop: false,
        perPage: 1,
        paginationEnabled: true,
        paginationActiveColor: "#ff5e3a",
        perPageCustom: [
          [567, 2],
          [996, 3],
        ],
      },
      listFilter: ["Jewellery", "Accessories", "Dresses", "Footwear"],
      selected: "Jewellery",
      total_pagination: 0,
      active_slide: 0,
    };
  },
  computed: {
    ...mapState("products", ["filter_product"]),

    total_product() {
      return this.filter_product.length;
    },
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("products", ["getDataFilterProducts"]),
    async getProducts() {
      await this.getDataFilterProducts(this.selected);
      this.checkPagination();
    },

    rating(rate) {
      return Math.floor(rate);
    },

    clickSelected(item) {
      this.selected = item;

      this.getProducts();
    },

    checkPagination() {
      let slides = 0;
      console.log(screen.width);
      if (screen.width < 567) {
        slides = 1;
      } else if (screen.width < 996) {
        slides = 2;
      } else {
        slides = 3;
      }
      this.total_pagination = Math.ceil(this.total_product / slides);
    },
    checkActive(item) {
      if (item === this.active_slide) {
        return "swiper-pagination-bullet swiper-pagination-bullet-active";
      } else {
        return "swiper-pagination-bullet";
      }
    },
    changeProduct(item) {
      this.active_slide = item.realIndex;
    },
  },
};
</script>

<style>
</style>