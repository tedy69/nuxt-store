<template>
  <section class="section collection best-selling-product-section">
    <h1 class="section-title font-cinzle">similar products</h1>
    <div class="products container">
      <carousel v-bind="options">
        <slide
          class="carousel-item"
          v-for="(item, index) in data"
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
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
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
    };
  },
  methods: {
    rating(rate) {
      return Math.floor(rate);
    },
  },
};
</script>

<style>
</style>