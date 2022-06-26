<template>
  <div>
    <NavBar />
    <Collection />
    <NewArrival />
    <Categories />
    <Statistic />
    <Review />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Collection from "../components/Collection.vue";
import NewArrival from "../components/NewArrival.vue";
import Categories from "../components/Categories.vue";
import Statistic from "../components/Statistic.vue";
import Footer from "../components/Footer.vue";
import Banner from "../components/Banner.vue";
import Review from "../components/Review.vue";
export default {
  name: "IndexPage",
  components: {
    NavBar,
    Collection,
    NewArrival,
    Categories,
    Statistic,
    Footer,
    Banner,
    Review,
  },
};
</script>
