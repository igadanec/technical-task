<script setup>
import IconLogo from "@/assets/icons/logo.svg";
import IconLogoText from "@/assets/icons/logo-text.svg";
import HeaderMenu from "@/components/layout/headerMenu.vue";

const route = useRoute();

let menuOpened = ref(false);

/* Close menu when route is changed */
watch(
  () => route.path,
  () => {
    menuOpened.value = false;
  }
);
</script>

<template>
  <header class="header">
    <div class="header__left">
      <router-link to="/" class="logo" v-thover="{ scale: 1.3 }">
        <IconLogo />
        <IconLogoText />
      </router-link>
    </div>
    <div class="header__right">
      <div
        v-thover="{ scale: 1.3 }"
        class="hamburger"
        @click="menuOpened = true"
      >
        <span />
        <span />
      </div>
    </div>
    <transition name="slide-left">
      <HeaderMenu v-if="menuOpened" @close="menuOpened = false" />
    </transition>
  </header>
</template>

<style lang="scss" scoped>
.slide-left-leave-active {
  transition: 0.4s ease-out;
}

.slide-left-enter-active {
  transition: 0.5s ease-in;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  padding: 1.75rem 1.25rem;
  transition: padding 0.3s;
  @media (min-width: $viewport-tablet) {
    padding: 1.75rem 3.75rem;
  }
  @media (min-width: $viewport-desktop) {
    padding: 1.75rem 7.0625rem;
  }
  &__left {
    .logo {
      cursor: initial;
      display: flex;
      align-items: flex-end;
      height: 1.875rem;
      svg {
        display: block;
        &:first-child {
          height: 1.875rem;
        }
        &:last-child {
          margin-left: 0.3125rem;
          height: 1.625rem;
        }
      }
    }
  }
  &__right {
    .hamburger {
      &:hover {
        span {
          &:first-child {
            width: 1.25rem;
          }
          &:last-child {
            width: 2.125rem;
          }
        }
      }
      span {
        margin-left: auto;
        display: block;
        height: 0.125rem;
        background: $black;
        transition: 0.3s ease-out;
        &:first-child {
          width: 2.125rem;
        }
        &:last-child {
          margin-top: 0.5rem;
          width: 1.25rem;
        }
      }
    }
  }
}
</style>
