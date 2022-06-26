<template>
  <header class="header">
    <nav class="navbar">
      <div class="row container d-flex">
        <div class="logo d-flex pointer" @click="$router.push('/')">
          <img src="~assets/img/logo.svg" alt="logo" width="50" />
          <h3>Nuxt Store</h3>
        </div>

        <div class="nav-list d-flex" ref="nav">
          <a class="pointer" @click="$router.push('/#')">Home</a>
          <a class="pointer" @click="$router.push('/#collection')"
            >Collection</a
          >
          <a class="pointer" @click="$router.push('/#new-arrival')"
            >New Arrival</a
          >
          <a class="pointer" @click="$router.push('/#statistic')">Statistic</a>
          <a class="pointer" @click="$router.push('/#about-us')">About Us</a>
          <div class="close" @click="closeNav">
            <em class="bx bx-x"></em>
          </div>
          <a class="user-link">Login</a>
        </div>

        <div class="icons d-flex">
          <div class="icon d-flex"><em class="bx bx-search"></em></div>
          <div class="icon user-icon d-flex">
            <em class="bx bx-user"></em>
          </div>
          <div class="icon d-flex">
            <em class="bx bx-bell"></em>
            <span></span>
          </div>
        </div>

        <div class="hamburger" @click="showNav">
          <em class="bx bx-menu-alt-right"></em>
        </div>
      </div>
    </nav>

    <Banner v-if="$nuxt.$route.path === '/'" />
  </header>
</template>

<script>
import Banner from "./Banner.vue";
export default {
  components: { Banner },
  methods: {
    showNav() {
      this.$refs.nav.classList.toggle("show");
    },
    closeNav() {
      this.$refs.nav.classList.remove("show");
    },
  },
};
</script>

<style>
.search-listing {
  width: 100%;
  height: auto;
  margin-top: 60px;
  padding: 60px 5vw;
}

.product-container {
  flex-wrap: wrap;
}

.product-card {
  width: 30%;
  margin: 20px 0;
  border: 10px solid #f2f2f2 !important;
}

.product-price {
  position: absolute;
  font-family: "lato", sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-transform: capitalize;
  font-size: 50px;
  opacity: 0;
  transition: 0.5s;
}

.product-card:hover .product-price {
  opacity: 1;
}
</style>