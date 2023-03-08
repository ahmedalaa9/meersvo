<template>
  <ul class="nav-items col-md-5 offset-md-2 row justify-evenly classic">
    <li class="navitem">Home</li>
    <li class="navitem mega-container">
      <span> Solutions </span>
      <div class="mega-menu">
        <MegaMenu></MegaMenu>
      </div>
    </li>

    <li class="navitem">Careers</li>
    <li class="navitem">About US</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import MegaMenu from "../mega-menu.vue";

const showBox = ref(false);
</script>

<style lang="scss" scoped>
.nav-items {
  list-style: none;
  font-size: 1.3rem;
  color: white;

  .navitem {
    cursor: pointer;
    transition: all 0.36s;
    position: relative;

    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: $primary;
      bottom: -6px;
      opacity: 0;
      transition: all 0.4s;
    }

    &:hover {
      color: $primary;
      transform: translateY(-2.5px) scale(1.03);
      &::before {
        width: 80%;
        opacity: 1;
      }
    }
  }
}

.mega-menu {
  position: absolute;
  top: 110%;
  left: -385px;
  border-radius: 8px;
  width: 850px;
  opacity: 0;
  display: none;
  transition: all 0.6s;
}
.header-menu .mega-container:hover .mega-menu,
.header-menu .mega-menu:hover {
  padding-top: 10px;
  display: inline-block;
  opacity: 1;
}
@media screen and (max-width: 1023px) {
  .header-menu.nav-items {
    display: none;
  }
}

@media screen and (min-width: 1920px) {
  .nav-items {
    .navitem {
      font-size: 2rem !important;
    }
  }
}
</style>
