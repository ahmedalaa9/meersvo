<template>
  <div class="bg-prod">
    <header-prodductivity />
    <card-prod-section />
    <Footer />
    <contact-us />
  </div>
</template>

<script setup>
import ProdductivityCard from "../components/ProdductivityPage/ProdductivityCard.vue";
import HeaderProdductivity from "../components/ProdductivityPage/HeaderProdductivity.vue";
import CardProdSection from "../components/ProdductivityPage/CardProdSection.vue";
import Footer from "../components/footer/Footer.vue";
import ContactUs from "./ContactUs.vue";
</script>

<style lang="scss" scoped>
.bg-prod {
  height: 100vh;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      360deg,
      rgba(3, 5, 93, 0.4) 5.34%,
      rgba(2, 10, 78, 0.687109) 34.96%,
      rgba(1, 16, 61, 0.9) 100%
    ),
    url("../assets/bg-prod.png");
  background-size: cover;
  background-position: top;
  // position: relative;
}
</style>
