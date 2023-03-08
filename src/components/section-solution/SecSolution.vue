<template>
  <div class="bg-section bg-solution q-pt-xl">
    <div class="container">
      <small-heading-sec class="q-mt-xl" headngText="Why Mersvo?" />

      <heading-sec
        :class="styleHeading"
        headingTxt="We invent software Solutions for Corporate enterprise"
      />
      <div class="cardsHome-container">
        <card-sec
          icon="/src/assets/Development1 - icon.svg"
          headingCard="Smart Development"
          cardPrag="Engage Automation and modern tools to build highly integrated solution that is born from customer experiences and tackles customers’ pain points with suite of applications that talks to each other."
          colorHeding="white"
        />
        <card-sec
          icon="/src/assets/Vector1.svg"
          headingCard="Fast Scalable development"
          cardPrag="Scalable framework that scale well from small enterprise customers with high integration and dynamic application requirements to high end large enterprise solutions."
          colorHeding="white"
        />
        <card-sec
          icon="/src/assets/Vector3.svg"
          headingCard="Omni-channel strategy"
          cardPrag="Our development adapts modern technologies that help us to target and address different channels to reach out to the customers in their comfort zone."
          colorHeding="white"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardSec from "../section-about/CardSec.vue";
import HeadingSec from "../shared-components/HeadingSec.vue";
import SmallHeadingSec from "../shared-components/SmallHeadingSec.vue";

const styleHeading = ref("white");
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 7rem;
}
.bg-section.bg-solution {
  position: relative;
  bottom: -2px;
  background: linear-gradient(265.86deg, #001237 -1.9%, #001237 96.4%);
  clip-path: polygon(0 0, 100% 22%, 100% 100%, 0% 100%);
}

@media screen and (max-width: 767px) {
  .bg-solution {
    text-align: center;
  }
  .bg-section.bg-solution {
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
  }
}
</style>
