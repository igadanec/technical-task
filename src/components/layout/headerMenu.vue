<script setup>
import IconArrowTopRight from "@/assets/icons/arrow-top-right.svg";

const emit = defineEmits(["close"]);

const links = ref({
  left: [
    {
      label: "Home",
      slug: "/",
    },
    {
      label: "Services",
      slug: "/services",
    },
    {
      label: "Contact",
      slug: "/contact",
    },
  ],
  right: [
    {
      label: "Careers",
      slug: "/careers",
    },
    {
      label: "Blog",
      slug: "/blog",
    },
  ],
});
</script>

<template>
  <div class="menu">
    <div class="menu__left" />
    <div class="menu__right">
      <div class="close" @click="emit('close')" />
      <ul class="links--left">
        <li v-for="link in links.left" :key="link.label">
          <router-link :to="link.slug"
            >{{ link.label }} <IconArrowTopRight
          /></router-link>
        </li>
      </ul>
      <div class="links--right">
        <ul>
          <li v-for="link in links.right" :key="link.label">
            <router-link :to="link.slug"
              >{{ link.label }} <IconArrowTopRight
            /></router-link>
          </li>
        </ul>
        <div class="contact">
          <a href="mailto:hello@asynclabs.co">hello@asynclabs.co</a>
          <a href="tel:+385994936071">+385 99 4936 071</a>
          <div class="contact--social">
            <a href="#">Fb.</a>
            <a href="#">Ln.</a>
            <a href="#">Tw.</a>
            <a href="#">In.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $dark_green-200;
  display: grid;
  @media (min-width: $viewport-desktop) {
    grid-template-columns: 4fr 8fr;
  }
  @media (min-width: $viewport-md-desktop) {
    grid-template-columns: 5fr 7fr;
  }
  &__left {
    display: none;
    background: url("@/assets/images/header-bg.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    @media (min-width: $viewport-desktop) {
      display: block;
    }
  }
  &__right {
    padding: 6.875rem 2rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    overflow: auto;
    height: fit-content;
    grid-gap: 2rem 0;
    @media (min-width: $viewport-desktop) {
      grid-gap: 2rem;
    }
    .close {
      cursor: pointer;
      position: absolute;
      right: 2.25rem;
      top: 2.25rem;
      width: 1.625rem;
      height: 1.625rem;
      opacity: 0.3;
      transition: 0.3s ease-in-out;
      &:hover {
        opacity: 1;
      }
      &:before,
      &:after {
        content: " ";
        position: absolute;
        left: 15px;
        height: 1.5rem;
        width: 0.125rem;
        background-color: $grey-600;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
      @media (min-width: $viewport-laptop) {
        right: 7.0625rem;
        top: 2.25rem;
      }
    }
    .links--left,
    .links--right > ul {
      height: fit-content;
      &:hover {
        a {
          opacity: 0.4;
        }
      }
      li {
        a {
          cursor: pointer;
          width: fit-content;
          display: flex;
          align-items: center;
          color: $white;
          text-decoration: none;
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 1;
            svg {
              opacity: 1;
            }
          }
          svg {
            margin-left: 10px;
            opacity: 0;
            transition: 0.3s ease-in-out;
          }
        }
      }
    }
    .links--left {
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        grid-column: 3/6;
      }
      li {
        a {
          font-size: 2.125rem;
          line-height: 1.6;
          font-weight: bold;
          @media (min-width: $viewport-laptop) {
            font-size: 2.875rem;
            line-height: 1.96;
          }
        }
      }
    }
    .links--right {
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        margin-top: 0.625rem;
        grid-column: 7/12;
      }
      li {
        a {
          font-size: 1.375rem;
          line-height: 1.5;
          @media (min-width: $viewport-laptop) {
            font-size: 1.5rem;
            line-height: 2.08;
          }
        }
      }
      .contact {
        margin-top: 7.9375rem;
        a {
          display: block;
          font-size: 16px;
          line-height: 1.88;
          color: $white;
          text-decoration: none;
          font-weight: bold;
        }
        &--social {
          margin-top: 3.5rem;
          display: flex;
          gap: 1.125rem;
        }
      }
    }
  }
}
</style>
