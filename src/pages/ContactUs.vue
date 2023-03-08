<template>
  <div class="bg-contact">
    <div class="container">
      <navbar-content />

      <div class="row q-mt-md">
        <div class="col-md-6 col-xs-12">
          <div class="contact-content">
            <h2>Get in touch with our team</h2>
            <p class="lead">
              We're always happy to hear from you. please fill out the form
              below and we'll get back to you as soon as possible. Thank you for
              reaching out to us!
            </p>
            <div class="contact-container-icons-screen">
              <p class="lead">&#9866; Or contact us on following &#9866;</p>
              <div class="mail-contact q-my-md row items-center">
                <!-- <q-icon
                  class="icon-mail q-pl-xs"
                  color="white"
                  size="30px"
                  :name="outlinedEmail"
                /> -->
                <img src="../assets/gmail.png" alt="gmail logo" />

                <!-- <q-icon
                  class="icon-mail q-pl-xs"
                  size="30px"
                  :name="fasEnvelope"
                /> -->
                <span> <a href="http://">info@mersvo.com</a> </span>
              </div>
              <div class="icons-contact q-mb-xl q-mt-lg row col-2 text-right">
                <icon-container src="./src/assets/youtube.png" />
                <icon-container src="./src/assets/facebook.png" />
                <icon-container src="./src/assets/twitter.png" />
                <icon-container src="./src/assets/instagram.png" />
                <icon-container src="./src/assets/linkedin.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <form-contact />
        </div>
        <div class="contact-container-icons-tablet col-xs-12">
          <p class="lead">&#9866; Or contact us on following &#9866;</p>
          <div class="mail-contact q-my-lg row justify-center items-center">
            <!-- <q-icon
              class="icon-mail q-pl-xs"
              color="white"
              size="30px"
              :name="outlinedEmail"
            /> -->
            <!-- <q-icon class="icon-mail q-pl-xs" size="30px" :name="fasEnvelope" /> -->

            <img src="../assets/gmail.png" alt="gmail logo" />
            <span> <a href="http://">info@mersvo.com</a> </span>
          </div>
          <div class="icons-contact q-mb-md q-mt-sm row justify-center col-2">
            <icon-container src="./src/assets/youtube.png" />
            <icon-container src="./src/assets/facebook.png" />
            <icon-container src="./src/assets/twitter.png" />
            <icon-container src="./src/assets/instagram.png" />
            <icon-container src="./src/assets/linkedin.png" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavbarContent from "../components/header/NavbarContent.vue";
import Footer from "../components/footer/Footer.vue";
// import { outlinedEmail } from "@quasar/extras/material-icons-outlined";
// import { fasEnvelope } from "@quasar/extras/fontawesome-v5";

import IconContainer from "../components/footer/IconContainer.vue";
import FormContact from "../components/contact-us/FormContact.vue";
</script>

<style lang="scss" scoped>
.bg-contact {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(
      360deg,
      rgba(3, 5, 93, 0.4) 5.34%,
      rgba(2, 10, 78, 0.687109) 34.96%,
      rgba(1, 16, 61, 0.9) 100%
    ),
    url("../assets/bg-prod.png");
  background-size: cover;
  background-position: top;
  // position: relative;

  .contact-content {
    width: 75%;
    h2 {
      margin: 2rem 0 1rem;
      font-weight: 700;
      font-size: 3rem;
      line-height: 3.3rem;

      color: #ffffff;
    }
  }
  .lead {
    margin: 1.5rem 0;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.5rem;

    color: rgba($color: #fff, $alpha: 0.8);
  }

  .mail-contact {
    margin: 2.3rem 0;
    .icon-mail {
      padding: 0;
      background: white;
      // color: linear-gradient(180deg, #2560f1 0%, #7944ff 48.75%, #c623ff 100%);
    }
    span a {
      text-decoration: none;
      margin-left: 8px;
      color: white;
    }
  }
  .icons-contact {
    .contact-Icon__container {
      margin-right: 5px;
    }
  }

  .contact-container-icons-tablet {
    display: none;
  }
}

@media screen and (max-width: 1023px) {
  .bg-contact {
    height: 100vh;

    .contact-content {
      text-align: center;
      width: 70%;
      margin: 1rem auto;

      h2 {
        font-size: 2.5rem;
        line-height: 3rem;
      }
      .lead {
        margin: 2rem 0;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.3rem;
      }
    }

    .contact-container-icons-screen {
      display: none;
    }
    .contact-container-icons-tablet {
      // width: 90%;
      margin-bottom: 2rem;
      text-align: center;
      display: block;
      .lead {
        color: #000000;
        font-size: 1.4rem;
      }
      .mail-contact {
        span a {
          color: #000000;
          font-size: 1.2rem;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .bg-contact {
    .contact-content {
      text-align: center;
      width: 90%;
      margin: 1rem auto;

      h2 {
        font-size: 2rem;
        line-height: 2.5rem;
      }
      .lead {
        margin: 1.5rem 0;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.3rem;
      }
      .mail-contact {
        span a {
          font-size: 1rem;
          margin: 1rem;
        }
      }
    }
  }
}
</style>
