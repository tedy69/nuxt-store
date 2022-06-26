<template>
  <section class="add-review-section">
    <h1 class="section-title font-cinzle">add a review</h1>
    <input type="text" class="review-headline" placeholder="review headline" />
    <textarea placeholder="review" class="review-field"></textarea>
    <p class="rating-text">how much you liked the product</p>
    <div class="star-container">
      <em
        :class="checkStar(index)"
        v-for="index in 5"
        :key="index + 'star'"
        @click="rating(index)"
      ></em>
    </div>
    <button class="add-review-btn">add review</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ratingStarInput: 0,
    };
  },
  methods: {
    rating(rate) {
      this.ratingStarInput = rate;
    },
    checkStar(index) {
      if (index <= this.ratingStarInput) {
        return "bx bxs-star star-large rating-detail";
      } else {
        return "bx bx-star star-large rating-detail";
      }
    },
  },
};
</script>

<style>
</style>