<template>
  <h6 class="heading-qustion text-primary text-subtitle2">
    {{ headngText }}
  </h6>
</template>

<script setup>
// eslint-disable-next-line vue/valid-define-props
const props = defineProps({ headngText: { type: String } });
</script>

<style lang="scss" scoped>
.heading-qustion {
  font-size: 1rem;
}
@media screen and (max-width: 768px) {
  .heading-qustion {
    text-align: center;
  }
}

@media screen and (min-width: 1920px) {
  .heading-qustion {
    font-size: 1.7rem;
  }
}
</style>
