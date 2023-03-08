<template>
  <div class="prod-card-content col-md-4 col-sm-6 col-12 row">
    <div
      class="prod-card-content_img col-md-5 col-12"
      :style="{ 'background-image': imgCard }"
    ></div>
    <div class="prod-card-content_content q-pl-md q-pa-sm col-md-7 col-12">
      <div class="prod-card-content_content__category address-card-tablet">
        <h5>{{ category }}</h5>
      </div>
      <h6>{{ title }}</h6>
      <p>
        {{ cardPrag }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: { type: String },
  title: { type: String },
  cardPrag: { type: String },
  imgCard: { type: String },
});
</script>

<style lang="scss" scoped>
.prod-card-content {
  overflow: hidden;
  position: relative;
  border-radius: 16px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}
.prod-card-content_img {
  height: 315px;
  border-radius: 16px 0px 0px 16px;
  // background-image: url("../../assets/prodcard1.png"); // 3ayz a3mlha props !
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.prod-card-content_content {
  &__category {
    h5 {
      font-style: normal;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 27px;
      letter-spacing: 0.02em;
      color: $primary;
      // margin: 0.5rem;
    }
  }

  h6 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.2rem;
    margin: 0.6rem 0;
    color: #001237;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgba(0, 0, 0, 0.8);
  }
}
@media screen and (max-width: 600px) {
  .prod-card-content {
    max-width: 100%;
    margin-bottom: 1rem;
  }
  .address-card-tablet {
    background: linear-gradient(
      180deg,
      #2560f1 0%,
      #7944ff 48.75%,
      #c623ff 100%
    );
    border-radius: 0px 16px 16px 0px;
    position: absolute;
    top: 10px;
    left: 0;

    h5 {
      color: white;
      padding: 15px 25px;
      margin-bottom: 0;
    }
  }
  h6 {
    margin: 01rem 0;
  }
}
@media screen and (min-width: 600px) and (max-width: 1022px) {
  .prod-card-content {
    max-width: 49%;
    margin-bottom: 1rem;
  }
  .prod-card-content_img {
    border-radius: 16px 16px 0px 0px;
  }
  .address-card-tablet {
    background: linear-gradient(
      180deg,
      #2560f1 0%,
      #7944ff 48.75%,
      #c623ff 100%
    );
    border-radius: 0px 16px 16px 0px;
    position: absolute;
    top: 10px;
    left: 0;

    h5 {
      color: white;
      padding: 15px 25px;
      margin-bottom: 0;
    }
  }
}
@media screen and (min-width: 1023px) {
  .prod-card-content {
    max-width: 32%;
  }
  .prod-card-content_content {
    height: 315px;
  }
}
</style>
