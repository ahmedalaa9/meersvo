<template>
  <div class="container q-py-xl">
    <small-heading-sec headngText="Mersvo Productivity Suite" />

    <heading-sec headingTxt="Our Productivity-Boosting Solutions" />

    <div class="cards-container full-width justify-between row wrap">
      <prodductivity-card
        v-for="card in cardContent"
        :key="card.id"
        :imgCard="card.imgCard"
        :category="card.category"
        :title="card.title"
        :cardPrag="card.cardPrag"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProdductivityCard from "../ProdductivityPage/ProdductivityCard.vue";
import HeadingSec from "../shared-components/HeadingSec.vue";
import SmallHeadingSec from "../shared-components/SmallHeadingSec.vue";

const cardContent = ref([
  {
    id: 1,
    imgCard: "url('/src/assets/prodcard1.png')",
    category: "Organize",
    title: "Event management system",
    cardPrag:
      "Lorem ipsum dolor sit amet consectetur. Ut ultricies eget nuc vel justo sem at egestas. Auctor sem tortor accumsan nullam elit. Fames duis facilisi pellentesque.",
  },
  {
    id: 2,
    imgCard: "url('/src/assets/prodcard2.png')",
    category: "Meet",
    title: "Meeting mangement",
    cardPrag:
      "Lorem ipsum dolor sit amet consectetur. Ut ultricies eget nuc vel justo sem at egestas. Auctor sem tortor accumsan nullam elit. Fames duis facilisi pellentesque.",
  },
  {
    id: 3,
    imgCard: "url('/src/assets/prodcard3.png')",
    category: "Manage",
    title: "Mobility workspace management ",
    cardPrag:
      "Lorem ipsum dolor sit amet consectetur. Ut ultricies eget nuc vel justo sem at egestas. Auctor sem tortor accumsan nullam elit. Fames duis facilisi pellentesque.",
  },
  {
    id: 4,
    imgCard: "url('/src/assets/prodcard4.png')",
    category: "Service management ",
    title: "Event management system",
    cardPrag:
      "Lorem ipsum dolor sit amet consectetur. Ut ultricies eget nuc vel justo sem at egestas. Auctor sem tortor accumsan nullam elit. Fames duis facilisi pellentesque.",
  },
  {
    id: 5,
    imgCard: "url('/src/assets/prodcard5.png')",
    category: "Support",
    title: "Executive assistance ",
    cardPrag:
      "Lorem ipsum dolor sit amet consectetur. Ut ultricies eget nuc vel justo sem at egestas. Auctor sem tortor accumsan nullam elit. Fames duis facilisi pellentesque.",
  },
  {
    id: 6,
    imgCard: "url('/src/assets/prodcard6.png')",
    category: "Visit",
    title: "Visitor management ",
    cardPrag:
      "Lorem ipsum dolor sit amet consectetur. Ut ultricies eget nuc vel justo sem at egestas. Auctor sem tortor accumsan nullam elit. Fames duis facilisi pellentesque.",
  },
]);
</script>

<style lang="scss" scoped></style>
