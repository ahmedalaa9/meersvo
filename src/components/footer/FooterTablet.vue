<template>
  <div class="bg-section">
    <div class="container">
      <nav-items class="footer-navitems" />
      <div class="row justify-between items-center q-py-sm">
        <div class="logo col-3">
          <img src="../header/mersvo-logo.png" alt="mersvo logo" />
        </div>
        <div class="icons-footer row justify-end col-9 text-right">
          <icon-container src="./../src/assets/youtube.png" />
          <icon-container src="./../src/assets/facebook.png" />
          <icon-container src="./../src/assets/twitter.png" />
          <icon-container src="./../src/assets/instagram.png" />
          <icon-container src="./../src/assets/linkedin.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavItems from "../navbar/NavItems.vue";
import IconContainer from "./IconContainer.vue";
</script>

<style lang="scss" scoped>
.bg-section {
  display: none;
  background: linear-gradient(265.86deg, #001237 -1.9%, #001237 96.4%);
  backdrop-filter: blur(234.245px);
  padding-top: 2.8rem;
  .container {
    border-top: 0.8px solid rgba(255, 255, 255, 0.5);

    .footer-navitems {
      width: 85%;
      margin: 1.3rem auto;
    }
  }
  .logo {
    img {
      width: 100%;
    }
  }
}
@media screen and (max-width: 500px) {
  .bg-section {
    .container {
      .footer-navitems {
        width: 90%;
        margin: 1.3rem auto;

        font-size: 14px !important;
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .bg-section {
    display: block !important;
  }
}
</style>
