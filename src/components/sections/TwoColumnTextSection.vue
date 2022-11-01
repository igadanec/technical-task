<script setup></script>

<template>
  <section class="two-col-text">
    <div v-if="$slots.title" class="title">
      <slot name="title" />
    </div>
    <div class="two-col-text__inner">
      <div class="two-col-text__inner--left">
        <slot name="content-left" />
      </div>
      <div class="two-col-text__inner--right">
        <slot name="content-right" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.two-col-text {
  margin-block: 1.875rem 6.125rem;
  @media (min-width: $viewport-tablet) {
    margin-block: 3.75rem 9.375rem;
  }
  @media (min-width: $viewport-laptop) {
    margin-block: 7.3125rem 15.625rem;
  }
  .title {
    margin-bottom: 1.8125rem;
    color: $cyan;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2rem 0;
    @media (min-width: $viewport-laptop) {
      grid-gap: 2rem;
    }
    &--left {
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        grid-column: 1/6;
      }
    }
    &--right {
      grid-column: 1/13;
      @media (min-width: $viewport-laptop) {
        grid-column: 7/13;
      }
      :deep() {
        p {
          margin-bottom: 1.25rem;
        }
        ul {
          margin-top: 2.9375rem;
          li {
            display: flex;
            align-items: center;
            &:not(:last-child) {
              margin-bottom: 1.375rem;
            }
            &:before {
              content: "";
              display: block;
              width: 0.6875rem;
              height: 0.0625rem;
              background-color: $cyan;
              margin-right: 1.25rem;
            }
            h5 {
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
}
</style>
