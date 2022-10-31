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
      <router-link to="/" class="logo">
        <IconLogo />
        <IconLogoText />
      </router-link>
    </div>
    <div class="header__right">
      <div class="hamburger" @click="menuOpened = true">
        <span />
        <span />
      </div>
    </div>
    <transition name="fade">
      <HeaderMenu v-if="menuOpened" @close="menuOpened = false" />
    </transition>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 113px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  &__left {
    .logo {
      display: flex;
      align-items: flex-end;
      height: 30px;
      svg {
        display: block;
        &:first-child {
          height: 30px;
        }
        &:last-child {
          margin-left: 5px;
          height: 26px;
        }
      }
    }
  }
  &__right {
    .hamburger {
      cursor: pointer;
      &:hover {
        span {
          &:first-child {
            width: 20px;
          }
          &:last-child {
            width: 34px;
          }
        }
      }
      span {
        margin-left: auto;
        display: block;
        height: 2px;
        background: $black;
        transition: 0.3s ease-out;
        &:first-child {
          width: 34px;
        }
        &:last-child {
          margin-top: 8px;
          width: 20px;
        }
      }
    }
  }
}
</style>
