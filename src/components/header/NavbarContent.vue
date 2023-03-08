<template>
  <navbar class="nabvar-container fit row items-center q-py-md">
    <div class="logo col-md-2 col-xs-3">
      <img class="full-width" src="./mersvo-logo.png" alt="mersvo logo" />
    </div>

    <nav-items class="header-menu" />

    <div class="col-md-2 offset-md-1 offset-xs-3 col-xs-6 text-right">
      <q-btn
        class="contactUsBtn contact-nav-btn"
        unelevated
        rounded
        color="primary"
        label="Contact Us"
      />

      <q-icon
        @click="showMenuNav = true"
        class="icon-menu-res q-pl-xs"
        color="white"
        size="25px"
        :name="matMenu"
      />
    </div>
    <!-- // nav items menu in tablet and mob -->
    <menu-nav-small
      @close-menu-nav-res="showMenuNav = false"
      :class="showMenuNav ? 'open-nav-menu' : ''"
    />
  </navbar>
</template>

<script setup>
import NavItems from "../navbar/NavItems.vue";
import MenuNavSmall from "../../components/navbar/MenuNavSmall.vue";
import SolutionBox from "../mega-menu.vue";
import { matMenu } from "@quasar/extras/material-icons";
import { ref } from "vue";
const showMenuNav = ref(false);
</script>

<style lang="scss" scoped>
.contact-nav-btn {
  font-size: 1rem;
  padding: 0 10%;
  border-radius: 50px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.contactUsBtn {
  transition: all 0.6s;
}
.contactUsBtn:hover {
  background-color: white !important;
  color: $primary !important;
  outline: none;
  border: white;
}
.icon-menu-res {
  display: none;
}

@media screen and (max-width: 1023px) {
  .icon-menu-res {
    display: inline-flex;
    cursor: pointer;
  }

  .contactUsBtn {
    font-size: 15px;
    // border-radius: 50px;
    // width: 100%;
  }
}
@media screen and (min-width: 1900px) {
  .contactUsBtn {
    font-size: 1.25rem;
    border-radius: 50px;
    width: 100%;
  }
  .contact-nav-btn {
    font-size: 1.25rem;
  }
}
@media screen and (max-width: 768px) {
  .contact-nav-btn {
    display: none;
  }
}
</style>
