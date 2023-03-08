<template>
  <div>
    <div class="container">
      <NavbarContent />
      <bg-video />
      <header-content />
      <sec-about />
    </div>
    <div class="bg-section">
      <sec-solution />
    </div>

    <Footer />
    <prodductivity-page />
  </div>
</template>

<script setup>
import NavbarContent from "../components/header/NavbarContent.vue";
import BgVideo from "../components/header/BgVideo.vue";
import HeaderContent from "../components/header/HeaderContent.vue";
import SecAbout from "../components/section-about/SecAbout.vue";
import SecSolution from "../components/section-solution/SecSolution.vue";
import Footer from "../components/footer/Footer.vue";
import ProdductivityPage from "./ProdductivityPage.vue";
import ContactUS from "./ContactUS.vue";
</script>

<style lang="scss"></style>
