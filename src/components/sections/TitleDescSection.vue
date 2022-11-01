<script setup>
defineProps({
  floatText: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section class="text-section">
    <div class="text-section__header">
      <div class="title">
        <slot v-if="$slots.title" name="title" />
      </div>
      <h1 class="float-title" v-if="floatText">{{ floatText }}</h1>
    </div>
    <div v-if="$slots.description" class="text-section__content">
      <slot name="description" />
    </div>
  </section>
</template>

<style lang="scss">
.text-section {
  margin: 0 0 1.875rem;
  @media (min-width: $viewport-tablet) {
    margin: 0 3.75rem 3.4375rem;
  }
  @media (min-width: $viewport-desktop) {
    margin: 0 6.0625rem 6.875rem;
  }
  &__header {
    position: relative;
    margin-bottom: 2.5625rem;
    .title {
      max-width: 45rem;
    }
    .float-title {
      display: none;
      width: 20rem;
      overflow: hidden;
      position: absolute;
      top: 0;
      font-size: 6.875rem;
      line-height: 1;
      color: rgba(18, 18, 18, 0);
      -webkit-text-stroke: 0.6px $grey-200;
      @media (min-width: $viewport-laptop) {
        display: block;
        right: calc(-7.5rem);
      }
      @media (min-width: $viewport-desktop) {
        right: calc(-13.125rem);
      }
    }
  }
  &__content {
    max-width: 31.25rem;
    p {
      color: $grey-800;
    }
  }
}
</style>
