<template>
  <section class="product-section">
    <div class="product">
      <div class="top d-flex">
        <img :src="data.url" class="product-image" alt="" />

        <div class="icon d-flex" @click="loveState = !loveState">
          <em :class="loveState ? 'bx bxs-heart' : 'bx bx-heart'"></em>
        </div>
      </div>
    </div>

    <div class="product-detail">
      <h4 class="product-title font-cinzel">
        {{ data.title || "" }}
      </h4>
      <p class="product-des">
        {{ data.description || "" }}
      </p>
      <div class="ratings">
        <div class="rating">
          <em
            class="bx bxs-star star-large rating-detail"
            v-for="index in rating(data.rating || 0)"
            :key="index + 'star'"
          ></em>
        </div>
        <span class="rating-count">4,023 reviews</span>
      </div>
      <p class="price-detail font-cinzel">$ {{ data.price }}</p>
      <div class="btn-container">
        <button class="product-btn buy-btn">buy now</button>
        <button class="product-btn cart-btn">add to cart</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      loveState: false,
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