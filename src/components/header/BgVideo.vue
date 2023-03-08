<template>
  <div class="bg-video">
    <video class="bg-video__content" autoplay loop muted>
      <source src="./vid.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    // background-color: rgba(black, 0.4);
    background: linear-gradient(
      270deg,
      rgba(3, 6, 91, 0.3) 0%,
      rgba(3, 5, 92, 0.352996) 12.08%,
      rgba(3, 5, 93, 0.4) 35.42%,
      rgba(2, 10, 78, 0.687109) 55.62%,
      rgba(1, 16, 61, 0.9) 100%
    );
  }

  &__content {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
