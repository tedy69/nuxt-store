<template>
  <div>
    <nav-bar />
    <detail-product :data="detail_product" />
    <detail-description />
    <Review />
    <Comment />
    <Similar :data="filter_product" v-if="filter_product" />
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import DetailDescription from "../../components/detail/DetailDescription.vue";
import DetailProduct from "../../components/detail/DetailProduct.vue";
import NavBar from "../../components/NavBar.vue";
import Review from "../../components/Review.vue";
import Comment from "../../components/detail/Comment.vue";
import Similar from "../../components/detail/Similar.vue";
import Footer from "../../components/Footer.vue";
export default {
  components: {
    DetailDescription,
    DetailProduct,
    NavBar,
    Review,
    Comment,
    Similar,
    Footer,
  },
  computed: {
    ...mapState("products", ["detail_product", "filter_product"]),
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions("products", ["getDetailProducts", "getDataFilterProducts"]),
    async getData() {
      await this.getDetailProducts({
        id: this.$route.params.id,
        category: this.$route.params.category,
      });
      await this.getDataFilterProducts(this.$route.params.category);
    },
  },
};
</script>

<style lang="scss">
@media (max-width: 768px) {
  .product-detail {
    width: 100%;
  }

  .product-section {
    display: flex;
    flex-direction: column;
    padding: 0px 1rem;

    .product-title {
      margin-top: 2rem;
      font-size: 28px;
    }

    .product-image {
      object-fit: cover;
      background: var(--gradient);
    }
    .product {
      border-radius: 2.5rem;
      box-shadow: var(--box-shadow-1);
      overflow: hidden;
      transition: 0.3s;

      .top {
        background: var(--gradient);
        justify-content: center;
        position: relative;
        transition: 0.3s;

        .icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 4rem;
          height: 4rem;
          background-color: var(--primary-color);
          color: var(--white-color);
          border-radius: 50%;
          font-size: 2.5rem;
          justify-content: center;
          cursor: pointer;
          opacity: 1;
          transition: 0.3s;
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .product-section {
    width: 100%;
    padding: 0px 5vw;
    display: flex;
    gap: 40px;

    .product-title {
      font-size: 28px;
    }

    .product-image {
      height: 600px;
      object-fit: cover;
      background: var(--gradient);
    }
    .product {
      border-radius: 2.5rem;
      box-shadow: var(--box-shadow-1);
      overflow: hidden;
      transition: 0.3s;

      .top {
        background: var(--gradient);
        justify-content: center;
        position: relative;
        transition: 0.3s;

        .icon {
          position: absolute;
          top: 2rem;
          right: 2rem;
          width: 4rem;
          height: 4rem;
          background-color: var(--primary-color);
          color: var(--white-color);
          border-radius: 50%;
          font-size: 2.5rem;
          justify-content: center;
          cursor: pointer;
          opacity: 1;
          transition: 0.3s;
        }
      }
    }
    .product-detail {
      width: 50vw;
    }
    .product-des {
      margin: 30px 0;
      font-family: "lato", sans-serif;
      opacity: 0.5;
      font-size: 20px;
      line-height: 30px;
      width: 50vw;
    }
  }
}

.star-large {
  font-size: 40px;
}

.ratings {
  display: flex;
}

.rating-detail {
  color: var(--primary-color);
}

.ratings .star {
  width: 30px;
  height: 30px;
}

.rating-count {
  font-family: "lato", sans-serif;
  opacity: 0.4;
  font-size: 14px;
  line-height: 40px;
  margin-left: 20px;
}

.price-detail {
  font-size: 60px;
  margin: 30px 0;
}

.font-cinzel {
  font-family: "Cinzel", sans-serif !important;
}

.product-btn {
  padding: 15px 40px;
  border: none;
  color: #fff;
  outline: none;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  text-transform: capitalize;
}

.buy-btn {
  background: var(--gradient);
  color: var(--white-color);
  box-shadow: var(--box-shadow-2);
  border-radius: 1rem;
}

.cart-btn {
  background-color: #ff5e3a;
  background-color: var(--primary-color);
  border-radius: 1rem;
}

.detail-des,
.review-section,
.add-review-section {
  width: 100%;
  padding: 100px 5vw 0;
}

.des {
  font-family: "lato", sans-serif;
  line-height: 30px;
  font-size: 20px;
  opacity: 0.5;
}

.review-headline,
.review-field {
  width: 100%;
  height: 40px;
  border: 2px solid #c9c9c9;
  margin: 10px 0;
  padding: 10px;
  line-height: 40px;
  font-family: "lato", sans-serif;
  color: #000;
  outline: none;
  text-transform: capitalize;
}

::placeholder {
  color: #c9c9c9;
}

.review-field {
  height: 160px;
  resize: none;
  padding: 0 10px;
}

.review-headline:focus,
.review-field:focus {
  border-color: #d5be8b;
}

.review-headline:focus::placeholder,
.review-field:focus::placeholder {
  color: #d5be8b;
}

.rating-text {
  font-family: "lato", sans-serif;
  color: #c9c9c9;
  text-transform: uppercase;
  margin: 10px 0;
}

.rating-star {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.add-review-btn {
  border: none;
  outline: none;
  background-color: var(--primary-color);
  border-radius: 1rem;
  padding: 10px 20px;
  color: #fff;
  font-family: "lato", sans-serif;
  font-size: 16px;
  text-transform: capitalize;
  margin-top: 30px;
  cursor: pointer;
}

.review-section {
  .review-container {
    margin-top: 3rem;
    margin-bottom: 0;
    // display: flex;
    // justify-content: space-between;

    .review-card {
      width: 250px;
      height: auto;
      font-family: "lato", sans-serif;
    }

    .user-dp {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: relative;
    }

    .user-dp img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .user-dp::before {
      content: "";
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border: 4px solid #fff;
      border-radius: 50%;
    }

    .user-dp::after {
      content: attr(data-rating);
      position: absolute;
      bottom: 0;
      color: var(--white-color);
      right: -20px;
      padding: 5px 20px;
      border-radius: 20px;
      background: linear-gradient(to bottom, #ff5151 50%, #ff5e3a);
    }

    .review-title {
      font-size: 20px;
      line-height: 25px;
      margin: 30px 0;
      text-transform: capitalize;
    }

    .review {
      opacity: 0.7;
    }
  }
  .VueCarousel-dot-container {
    text-align: center;
    margin-top: 3rem;

    .VueCarousel-dot {
      background-color: var(--primary-color);
      height: 1rem !important;
      width: 1rem !important;
      padding: 0 !important;
      margin: 0 4px;
    }

    .VueCarousel-dot--active {
      width: 3rem !important;
      border-radius: 1.5rem !important;
      padding: 0 !important;
    }
  }
}

.review-title {
  font-size: 20px;
  line-height: 25px;
  margin: 30px 0;
  text-transform: capitalize;
}

.review {
  opacity: 0.7;
}

.best-selling-product-section {
  position: relative;
  padding: 60px 5vw;
}

.section-title {
  font-family: cinzel, sans-serif;
  font-weight: bold;
  margin-bottom: 30px;
}
</style>