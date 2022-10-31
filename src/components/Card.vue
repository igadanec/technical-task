<script setup></script>

<template>
  <div class="card">
    <div class="card__header">
      <slot name="title" />
    </div>
    <div class="card__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: $grey-50;
  padding: 1.25rem;
  @media (min-width: $viewport-tablet) {
    padding: 3.125rem 2.5rem 1.875rem;
  }
  @media (min-width: $viewport-desktop) {
    padding: 4.1875rem 3.125rem 2.5rem;
  }
  &__header {
    margin-bottom: 1.25rem;
  }
  &__content {
    color: $grey-800;
  }
}
</style>
