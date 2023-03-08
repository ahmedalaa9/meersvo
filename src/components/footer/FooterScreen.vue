<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-section">
    <div class="container">
      <navbar class="footer-container fit items-center row q-py-md">
        <div class="logo col-2">
          <img src="../header/mersvo-logo.png" alt="mersvo logo" />
        </div>
        <div class="footer-navitems-container col-md-5 offset-md-1">
          <nav-items class="footer-navitems" />
        </div>

        <div class="icons-footer row justify-end col-4 text-right">
          <icon-container src="./../../src/assets/youtube.png" />
          <icon-container src="./../../src/assets/facebook.png" />
          <icon-container src="./../../src/assets/twitter.png" />
          <icon-container src="./../../src/assets/instagram.png" />
          <icon-container src="./../../src/assets/linkedin.png" />
        </div>
      </navbar>
    </div>
  </div>
</template>

<script setup>
import NavItems from "../navbar/NavItems.vue";
import IconContainer from "./IconContainer.vue";
</script>

<style lang="scss" scoped>
.container {
  border-top: 0.8px solid rgba(255, 255, 255, 0.5);
}
.bg-section {
  background: linear-gradient(265.86deg, #001237 -1.9%, #001237 96.4%);
  backdrop-filter: blur(234.245px);
  padding-top: 2.8rem;
}
.footer-container {
  .logo {
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 1023px) {
  .bg-section {
    display: none;
  }
}
</style>
