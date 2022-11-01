<script setup>
defineProps({
  steps: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section class="step">
    <div
      class="step__inner"
      v-for="(step, index) in steps"
      :key="`step_${index}`"
    >
      <div class="title">
        <h1>0{{ index + 1 }}</h1>
        <h3>
          {{ step.title }}
        </h3>
      </div>
      <p>
        {{ step.description }}
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.step {
  padding: 4rem 1.25rem;
  background-color: $dark_green-200;
  color: $white;
  display: grid;
  grid-template-columns: 12fr;
  grid-gap: 4rem 0;
  justify-content: space-between;
  @media (min-width: $viewport-tablet) {
    padding: 6.25rem 3.75rem;
  }
  @media (min-width: $viewport-desktop) {
    grid-gap: 2rem;
    padding: 6.25rem;
    grid-template-columns: repeat(3, 290px);
  }
  @media (min-width: $viewport-md-desktop) {
    padding: 13.25rem 9.25rem;
  }
  &__inner {
    margin-top: 3.125rem;
  }
  .title {
    position: relative;
    h1 {
      position: absolute;
      bottom: 0;
      font-size: 8.125rem;
      line-height: 0.54;
      color: rgba(255, 255, 255, 0);
      -webkit-text-stroke: 0.6px $white;
    }
    h3 {
      margin-bottom: 1.3125rem;
      padding-bottom: 0.625rem;
    }
  }
}
</style>
