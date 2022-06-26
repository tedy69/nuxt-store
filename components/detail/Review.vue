<template>
  <section class="review-section">
    <h1 class="section-title font-cinzle">Reviews</h1>
    <div class="review-container container">
      <carousel v-bind="options">
        <slide class="review-card carousel-item">
          <div class="user-dp" data-rating="4.9">
            <img src="~assets/img/user 1.png" alt="" />
          </div>
          <h2 class="review-title">best quality more than my expectation</h2>
          <p class="review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            placeat ipsum quasi vitae, maxime ipsam.
          </p>
        </slide>
        <slide class="review-card carousel-item">
          <div class="user-dp" data-rating="4.9">
            <img src="~assets/img/user 2.png" alt="" />
          </div>
          <h2 class="review-title">on time delivery with best packaging</h2>
          <p class="review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            placeat ipsum quasi vitae, maxime ipsam.
          </p>
        </slide>
        <slide class="review-card carousel-item">
          <div class="user-dp" data-rating="4.9">
            <img src="~assets/img/user 3.png" alt="" />
          </div>
          <h2 class="review-title">very helpful customer support</h2>
          <p class="review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            placeat ipsum quasi vitae, maxime ipsam.
          </p>
        </slide>
        <slide class="review-card carousel-item">
          <div class="user-dp" data-rating="4.9">
            <img src="~assets/img/user 4.png" alt="" />
          </div>
          <h2 class="review-title">very easy to refund/return products</h2>
          <p class="review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            placeat ipsum quasi vitae, maxime ipsam.
          </p>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
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
    };
  },
};
</script>

<style>
</style>