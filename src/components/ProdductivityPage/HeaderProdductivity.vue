<template>
  <div class="header-prodductivity">
    <div class="container">
      <NavbarContent class="nav-prod" />
      <div class="header-section">
        <div class="heading-content">
          <h2>Mersvo Productivity Suite</h2>
          <p>
            Mersvo Productivity suite is a suite of applications which are made
            to boost enterprise productivity by focusing on 3 major areas
          </p>
        </div>
        <div class="feauters-content">
          <div class="feauters-content__item row items-center justify-between">
            <span class="col-1 q-px-sm feauters-content__item-num">01</span>
            <p class="col q-pt-xs q-px-xs">
              Boosting organization productivity and facilitate better
              collaboration among their staff
            </p>
          </div>
          <div class="feauters-content__item row items-center justify-between">
            <span class="col-1 q-px-sm feauters-content__item-num">02</span>
            <p class="col q-pt-xs q-px-xs">
              Enhancing performance via promoting paperless automated processes
              for day to day operation
            </p>
          </div>
          <div class="feauters-content__item row items-center justify-between">
            <span class="col-1 q-px-sm feauters-content__item-num">03</span>
            <p class="col q-pt-xs q-px-xs">
              Experience Centric platform that put user and visitor experience
              as a key for a successful smart operation
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavbarContent from "../header/NavbarContent.vue";
</script>

<style lang="scss" scoped>
.header-prodductivity {
  position: relative;
  height: 100vh;

  .nav-prod {
    z-index: 999;
    position: relative;
  }

  .header-section {
    // width: 45vw;
    margin: 0 auto;

    .heading-content {
      border-left: 3px solid #fff;
      border-bottom: 3px solid #fff;
      position: relative;
      // display: inline-block;

      &::before,
      &::after {
        content: "";
        width: 7px;
        height: 7px;
        background-color: #fff;
        position: absolute;
        border-radius: 50%;
      }
      &::before {
        top: 0;
        left: -4px;
      }
      &::after {
        bottom: -4px;
        right: -1px;
      }

      padding: 0 2rem;
      h2 {
        color: white;
        font-weight: 700;
        font-size: 3rem;
        line-height: 96px;
      }
      p {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 36px;

        color: rgba(255, 255, 255, 0.7);
      }
    }

    .feauters-content {
      border-right: 3px solid #fff;
      border-bottom: 3px solid #fff;
      position: relative;
      padding: 10px 1.8rem;

      &::before,
      &::after {
        content: "";
        width: 7px;
        height: 7px;
        background-color: #fff;
        position: absolute;
        border-radius: 50%;
      }
      &::before {
        bottom: -4px;
        left: -3px;
      }
      &::after {
        bottom: -4px;
        right: -3.5px;
      }
      &__item {
        background: rgba(0, 18, 55, 0.2);
        border: 2px solid #ffffff;
        filter: blur(0.655787px);
        backdrop-filter: blur(13.5px);
        padding: 0.5rem 1.5rem;
        border-radius: 100px 0px 0px 100px;
        vertical-align: middle;

        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        margin: 1.5rem auto;
        color: #ffffff;

        &-num {
          font-weight: 500;
          font-size: 35px;
          line-height: 40px;
          // margin: 0 1rem;
          display: inline-block;
          height: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 479px) {
  .header-prodductivity {
    .header-section {
      width: 95vw;
      margin-top: 3rem !important;
      .heading-content {
        h2 {
          text-align: center;
          font-weight: 500;
          font-size: 1.7rem;
          line-height: 28px;
        }
        p {
          text-align: center;
          font-weight: 400;
          font-size: 0.7rem;
          line-height: 15px;
        }
      }
      .feauters-content {
        &__item {
          font-weight: 400;
          font-size: 0.7rem;
          line-height: 15px;
          margin: 0.3rem auto;
          padding: 5px 1rem;
          text-align: center;

          &-num {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 479px) and (max-width: 767px) {
  .header-prodductivity {
    .header-section {
      width: 95vw;
      margin-top: 2rem !important;
      .heading-content {
        h2 {
          text-align: center;
          font-weight: 500;
          font-size: 2.4rem;
          line-height: 50px;
        }
        p {
          text-align: center;
          font-weight: 400;
          font-size: 1rem;
          line-height: 20px;
        }
      }
      .feauters-content {
        &__item {
          font-weight: 400;
          font-size: 1rem;
          line-height: 20px;
          margin: 0.5rem auto;

          &-num {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .header-prodductivity {
    .header-section {
      width: 80vw;

      .heading-content {
        h2 {
          // text-align: center;
          font-weight: 600;
          font-size: 2.4rem;
          line-height: 46px;
        }
        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 20px;
        }
      }
      .feauters-content {
        &__item {
          font-weight: 300;
          font-size: 1rem;
          line-height: 20px;
          margin: 1rem auto;
          padding: 0.1rem 1.3rem;
          &-num {
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 30px;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .header-prodductivity {
    .header-section {
      width: 60vw;

      .heading-content {
        h2 {
          font-weight: 600;
          font-size: 2.7rem;
          line-height: 2.5rem;
          margin: 2.3rem 0 1.5rem;
        }
        p {
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 1.3rem;
          margin-bottom: 1.4rem;
        }
      }
      .feauters-content {
        &__item {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.3rem;
          margin: 0.5rem auto;
          padding: 0.5rem 1.5rem;
          &-num {
            font-weight: 500;
            font-size: 1.5rem;
            line-height: 40px;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .header-prodductivity {
    .header-section {
      width: 45vw;

      .heading-content {
        h2 {
          font-weight: 600;
          font-size: 3.5rem;
          line-height: 60px;
          margin: 2rem 0 1rem;
        }
        p {
          font-weight: 400;
          font-size: 1.3rem;
          line-height: 1.5rem;
        }
      }
      .feauters-content {
        &__item {
          font-weight: 400;
          font-size: 1.3rem;
          line-height: 1.4;
          // margin: 1rem auto;
          padding: 0.5rem 1.5rem;
          &-num {
            font-weight: 500;
            font-size: 1.8rem;
            line-height: 2;
          }
        }
      }
    }
  }
}
</style>
