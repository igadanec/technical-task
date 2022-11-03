<script setup>
import IconLogo from "@/assets/icons/logo.svg";
import IconLogoText from "@/assets/icons/logo-text.svg";
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="logo">
        <IconLogo />
        <IconLogoText />
      </div>
      <ul class="nav">
        <li>
          <router-link v-thover="{ scale: 1.3 }" to="/about">About</router-link>
        </li>
        <li>
          <router-link v-thover="{ scale: 1.3 }" to="/projects"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link v-thover="{ scale: 1.3 }" to="/blog">Blog</router-link>
        </li>
        <li>
          <router-link v-thover="{ scale: 1.3 }" to="/contact"
            >Contact</router-link
          >
        </li>
      </ul>
      <ul class="social">
        <li>
          <a v-thover="{ scale: 1.3 }" href="#">About</a>
        </li>
        <li>
          <a v-thover="{ scale: 1.3 }" href="#">Projects</a>
        </li>
        <li>
          <a v-thover="{ scale: 1.3 }" href="#">Blog</a>
        </li>
        <li>
          <a v-thover="{ scale: 1.3 }" href="#">Contact</a>
        </li>
      </ul>
      <ul class="address">
        <li>
          <p>Async d.o.o.</p>
        </li>
        <li>
          <p>Lipovečka 1,</p>
        </li>
        <li>
          <p>10000 Zagreb,</p>
        </li>
        <li>
          <p>Croatia</p>
        </li>
      </ul>
      <a v-thover="{ scale: 1.3 }" class="mail" href="mailto:hello@asynclabs.co"
        >hello@asynclabs.co</a
      >
    </div>
    <div class="rights">
      <p>© Async Labs. All rights reserved 2020.</p>
      <router-link v-thover to="/privacy-policy">Privacy Policy</router-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 30px 1.25rem;
  background-color: $dark_green-200;
  color: $white;
  @media (min-width: $viewport-tablet) {
    padding: 6.125rem 3.75rem;
  }
  @media (min-width: $viewport-desktop) {
    padding: 6.125rem 7.0625rem;
  }
  &__inner {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(12, 1fr);
    .logo {
      display: flex;
      align-items: flex-end;
      height: 1.875rem;
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        grid-column: 1/3;
      }
      svg {
        display: block;
        &:first-child {
          height: 1.875rem;
          :deep() path {
            fill: $white;
          }
        }
        &:last-child {
          margin-left: 0.3125rem;
          height: 1.625rem;
          :deep() path {
            fill: $white;
          }
        }
      }
    }
    ul {
      li {
        a {
          text-decoration: none;
          color: $white;
          line-height: 2;
        }
      }
    }
    .nav {
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        grid-column: 4/6;
      }
    }
    .social {
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        grid-column: 6/8;
      }
    }
    .address {
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        grid-column: 8/10;
      }
    }
    .mail {
      grid-column: 1/13;
      text-decoration: none;
      color: $white;
      @media (min-width: $viewport-laptop) {
        grid-column: 11/13;
      }
    }
  }
  .rights {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2.625rem;
    gap: 1.5rem;
    @media (min-width: $viewport-tablet) {
      flex-direction: row;
      margin-top: 5.625rem;
    }
    a {
      text-decoration: none;
      color: $white;
    }
  }
}
</style>
