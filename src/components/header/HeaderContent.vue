<template>
  <div class="container row q-mt-xl">
    <div class="header-content col-7 q-mt-lg">
      <h1 class="heading">manage your business more smarter way</h1>
      <p class="lead text-body2 q-my-lg">
        Scalable custom software development solutions that will make your life
        easy, fun and more professional.
      </p>
      <div class="header-btns q-py-lg">
        <q-btn
          class="q-mr-lg q-px-xl contactUsBtn"
          size="lg"
          unelevated
          rounded
          color="primary"
          label="Contact Us"
        />
        <q-btn
          class="q-px-xl solutionBtn"
          size="lg"
          outline
          rounded
          color="white"
          label="Our Solution"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header-content {
  // height: 80vh;
  height: calc(100vh - 130px);

  .heading {
    margin-top: 2rem;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 75px;
    color: white;
    text-transform: capitalize;
  }
  .lead {
    color: rgba(white, 0.7);
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
}
.header-btns {
  .contactUsBtn,
  .solutionBtn {
    transition: all 0.6s;
  }
  .contactUsBtn:hover,
  .solutionBtn:hover {
    background-color: white !important;
    color: $primary !important;
    // outline: none !important;
    // border: white;
    .q-btn--outline:before {
      border: white;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .header-content {
    width: 90%;
    text-align: center;
    padding: 0 2rem;
    margin: 3rem auto;

    .heading {
      margin-top: 2rem;
      font-size: 3rem;
      line-height: 3.6rem;
    }
    .lead {
      font-size: 1.5rem;
      line-height: 1.6rem;
    }
    .header-btns {
      margin-top: 40px;

      .contactUsBtn,
      .solutionBtn {
        // font-size: 20px !important;
        border-radius: 50px;
        margin-bottom: 1rem;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .header-content {
    width: 67%;
    margin-top: 3%;

    .heading {
      margin-top: 1.7rem;
      font-size: 5.6rem;
      line-height: 140px;
    }
    .lead {
      font-size: 2.4rem;
      line-height: 3rem;
    }
    .header-btns {
      margin-top: 4rem;
      .contactUsBtn,
      .solutionBtn {
        font-size: 35px !important;
        border-radius: 70px;
        padding: 1rem 4rem !important;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .header-content {
    width: 90%;
    text-align: center;
    padding: 0 1rem;
    margin: 2rem auto;

    .heading {
      margin-top: 2.5rem !important;
      font-size: 1.9rem;
      line-height: 2.5rem;
    }
    .lead {
      font-size: 16px;
      line-height: 1.4rem;
      text-align: center;
    }
    .header-btns {
      margin-top: 30px;

      .contactUsBtn,
      .solutionBtn {
        font-size: 16px !important;
        border-radius: 50px;
        width: 100%;
        margin-bottom: 1.3rem;
      }
    }
  }
}
</style>
