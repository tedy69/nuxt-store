<template>
  <section class="search-listing">
    <h1 class="section-title">Products</h1>
    <div class="product-container">
      <div
        class="product-card"
        v-for="(item, index) in data_product"
        :key="index + 'products'"
      >
        <img :src="item.image" class="product-img" alt="" />
        <p class="product-price">${{ item.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "sofa 1",
          price: 499,
          image: "sofa-1.png",
        },
        {
          id: 2,
          name: "sofa 2",
          price: 499,
          image: "sofa-2.png",
        },
        {
          id: 3,
          name: "sofa 3",
          price: 499,
          image: "sofa-3.png",
        },
        {
          id: 4,
          name: "sofa 4",
          price: 499,
          image: "sofa-4.png",
        },
        {
          id: 5,
          name: "sofa 5",
          price: 499,
          image: "sofa-5.png",
        },
        {
          id: 6,
          name: "sofa 6",
          price: 499,
          image: "sofa-6.png",
        },
        {
          id: 7,
          name: "sofa 7",
          price: 499,
          image: "sofa-7.png",
        },
        {
          id: 8,
          name: "sofa 8",
          price: 499,
          image: "sofa-8.png",
        },
        {
          id: 9,
          name: "sofa 9",
          price: 499,
          image: "sofa-9.png",
        },
      ],
    };
  },
  computed: {
    ...mapState("products", ["data_product"]),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("products", ["getDataProducts"]),
    async getProducts() {
      await this.getDataProducts();

      console.log(this.data_product);
    },
  },
};
</script>

<style>
</style>