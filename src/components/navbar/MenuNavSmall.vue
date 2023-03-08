<template>
  <div class="nav-container">
    <div class="full-width row justify-between items-center content-center">
      <div class="logo-nav-res">
        <img :src="myLogoSrc" alt="my-logo" />
      </div>
      <div class="icon-nav-res">
        <q-icon
          @click="$emit('close-menu-nav-res')"
          :name="outlinedClose"
          size="25px"
        />
      </div>
    </div>

    <nav-items class="nav-menu-res q-mt-md" />

    <q-btn
      class="contactUsBtn q-my-xl"
      unelevated
      rounded
      color="primary"
      label="Contact Us"
    />
  </div>
</template>

<script setup>
import myLogoSrc from "../../assets/mersvo logo 1.svg";
import { outlinedClose } from "@quasar/extras/material-icons-outlined";
import NavItems from "../../components/navbar/NavItems.vue";

const emit = defineEmits(["close-menu-nav-res"]);
</script>

<style lang="scss">
.nav-container {
  background: #e5f2ff;
  padding: 1.3rem 2.5rem;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  display: block;
  transition: all 0.61s;
  position: absolute;
  top: 0;
  left: 100%;
  opacity: 0;
  // display: none;

  .icon-nav-res {
    cursor: pointer;
  }
}
.nav-container.open-nav-menu {
  opacity: 1 !important;
  display: block !important;
  transform: translateX(-100%) !important;
}

.nav-menu-res.nav-items {
  color: #001237 !important ;
  .navitem {
    width: 100%;
    border-bottom: 1px solid rgba(36, 106, 255, 0.2);
    padding: 1rem 0;
    display: block !important;

    &::before {
      display: none !important;
    }
    &:hover {
      transform: none !important;
    }
  }
}
</style>
