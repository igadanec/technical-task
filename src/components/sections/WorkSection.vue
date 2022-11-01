<script setup>
import IconArrowTopRight from "@/assets/icons/arrow-top-right.svg";
</script>

<template>
  <section class="work">
    <div class="title">
      <h1 class="large">Work</h1>
    </div>
    <div class="work__inner">
      <div class="work__box" v-thover="{ scale: 1.3 }">
        <h2 class="mobile">Mobile App</h2>
        <img
          src="@/assets/images/services/digital-design/phone.webp"
          alt="phone"
        />
        <div class="work__box--overlay">
          <h2>Mobile App</h2>
        </div>
      </div>
      <div class="work__box" v-thover="{ scale: 1.3 }">
        <h2 class="mobile">Design App</h2>
        <img src="@/assets/images/services/design-small.webp" alt="design" />
        <div class="work__box--overlay">
          <h2>Design App</h2>
        </div>
      </div>
    </div>
    <div class="work__inner">
      <div class="work__box" v-thover="{ scale: 1.3 }">
        <h2 class="mobile">Marketing App</h2>
        <img
          src="@/assets/images/services/marketing-small.webp"
          alt="marketing"
        />
        <div class="work__box--overlay">
          <h2>Marketing App</h2>
        </div>
      </div>
      <div class="work__box" v-thover="{ scale: 1.3 }">
        <h2 class="mobile">Software App</h2>
        <img
          src="@/assets/images/services/software-small.webp"
          alt="software"
        />
        <div class="work__box--overlay">
          <h2>Software App</h2>
        </div>
      </div>
    </div>
    <router-link class="link" to="/work">
      See al projects
      <IconArrowTopRight />
    </router-link>
  </section>
</template>

<style lang="scss" scoped>
.work {
  margin-bottom: 3.75rem;
  @media (min-width: $viewport-tablet) {
    margin-bottom: 18.5625rem;
  }
  .link {
    display: block;
    margin-top: 3.125rem;
    text-decoration: none;
    font-size: 1.125rem;
    color: $dark_green-200;
    font-weight: bold;
    :deep() svg {
      margin-left: 0.5625rem;
      path {
        fill: $dark_green-200;
      }
    }
    @media (min-width: $viewport-tablet) {
      margin-top: -110px;
    }
  }
  .title {
    margin-bottom: 3.5rem;
    @media (min-width: $viewport-tablet) {
      margin-bottom: 0;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 2rem;
    }
    .large {
      grid-column: 6/13;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: 12fr;
    &:nth-child(2) {
      margin-bottom: 3.125rem;
    }
    @media (min-width: $viewport-tablet) {
      grid-template-columns: repeat(12, 1fr);
      grid-gap: 2rem;
      &:nth-child(2) {
        margin-bottom: 6.25rem;
      }
    }
    &:nth-child(2) {
      .work__box {
        &:first-child {
          @media (min-width: $viewport-tablet) {
            grid-column: 1/5;
            img {
              height: 26.25rem;
            }
          }
        }
        &:last-child {
          @media (min-width: $viewport-tablet) {
            margin-top: 12.5rem;
            grid-column: 6/13;
            img {
              height: 20rem;
            }
          }
        }
      }
    }
    &:nth-child(3) {
      .work__box {
        &:first-child {
          @media (min-width: $viewport-tablet) {
            grid-column: 1/7;
            img {
              height: 20rem;
            }
          }
        }
        &:last-child {
          @media (min-width: $viewport-tablet) {
            margin-top: 6.25rem;
            grid-column: 8/13;
            img {
              height: 26.25rem;
            }
          }
        }
      }
    }
  }
  &__box {
    position: relative;
    height: fit-content;
    &:not(:last-child) {
      margin-bottom: 3.125rem;
    }
    @media (min-width: $viewport-tablet) {
      margin-bottom: 0;
    }
    .mobile {
      display: block;
      margin-bottom: 1rem;
      @media (min-width: $viewport-tablet) {
        display: none;
      }
    }
    img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    &:hover {
      .work__box--overlay {
        opacity: 1;
      }
    }
    &--overlay {
      display: none;
      text-align: center;
      padding: 0 1.25rem;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(35, 150, 180, 0.9);
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: 0.3s;
      h2 {
        color: $white;
      }
      @media (min-width: $viewport-tablet) {
        display: flex;
      }
    }
  }
}
</style>
