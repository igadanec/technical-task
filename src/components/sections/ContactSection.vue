<script setup></script>

<template>
  <section class="contact-section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  text-align: center;
  padding: 4rem 1.25rem;
  transition: padding 0.3s;
  @media (min-width: $viewport-tablet) {
    padding: 6.25rem 3.75rem;
  }
  @media (min-width: $viewport-desktop) {
    padding: 8.125rem 7.0625rem;
  }
  background-image: url("@/assets/images/cyan-bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  color: $white;
  :deep() {
    h2 {
      margin-bottom: 1.3125rem;
    }
    p {
      margin-bottom: 2.5625rem;
    }
    .btn {
      margin-inline: auto;
    }
  }
}
</style>
