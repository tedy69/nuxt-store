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
        autoplay: true,
        loop: true,
        autoplayTimeout: 2000,
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
    };
  },
  computed: {
    ...mapState("products", ["filter_product"]),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("products", ["getDataFilterProducts"]),
    async getProducts() {
      await this.getDataFilterProducts(this.selected);
    },

    rating(rate) {
      return Math.floor(rate);
    },

    clickSelected(item) {
      this.selected = item;

      this.getProducts();
    },
  },
};
</script>

<style>
</style>