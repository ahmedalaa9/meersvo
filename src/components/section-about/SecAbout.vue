<template>
  <div class="section-container q-pb-xl">
    <small-heading-sec class="q-my-lg" headngText="How can mersvo help you?" />

    <heading-sec
      headingTxt="We invent software Solutions for Corporate enterprise"
    />
    <div class="cardsHome-container">
      <card-sec
        icon="/src/assets/icons8-account.gif"
        headingCard="Boost your team productivity"
        cardPrag="We help building a collaborative solutions to shape up customer experiences whether internal users or external with set of automation tools for enterprise workplace."
      />
      <card-sec
        icon="/src/assets/icons8-double-tap-gesture.gif"
        headingCard="Shape up your customer experience"
        cardPrag="We help into shaping up your customer experience with automated smart solution that seamlessly enhance your customer and visitor experience."
      />
      <card-sec
        icon="/src/assets/icons8-ok-hand.gif"
        headingCard="Build experience to remember"
        cardPrag="An Executive solution for building a WoW experience for your visitors that leaves them with something to remember."
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardSec from "../section-about/CardSec.vue";
import HeadingSec from "../shared-components/HeadingSec.vue";
import SmallHeadingSec from "../shared-components/SmallHeadingSec.vue";

const cardContent = ref([
  {
    icon: "",
    headingCard: "",
    cardPraag: "",
  },
]);
</script>

<style lang="scss">
.cardsHome-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
}

@media screen and (max-width: 767px) {
  .cardsHome-container {
    text-align: center !important;
  }
  .section-container {
    text-align: center;
  }
  .cardsHome-container {
    grid-template-columns: 1fr;
    // grid-auto-columns: auto;
  }
}
</style>
