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
  cursor: pointer;
  background-color: $grey-50;
  padding: 1.25rem;
  transition: 0.3s;
  @media (min-width: $viewport-tablet) {
    padding: 3.125rem 2.5rem 1.875rem;
  }
  @media (min-width: $viewport-desktop) {
    padding: 4.1875rem 3.125rem 2.5rem;
  }
  &:hover {
    background-color: $dark_green-200;
    color: $white;
    .card__content {
      color: $white;
    }
  }
  &__header {
    margin-bottom: 1.25rem;
  }
  &__content {
    transition: 0.3s;
    color: $grey-800;
  }
}
</style>
