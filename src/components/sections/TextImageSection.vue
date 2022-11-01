<script setup></script>

<template>
  <section class="image-text">
    <div class="image-text__left">
      <slot name="content" />
    </div>
    <div class="image-text__right">
      <div class="image-text__top">
        <slot name="image-small" />
      </div>
      <div class="image-text__bottom">
        <slot name="image-large" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.image-text {
  margin-block: 7.5rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem 0;
  @media (min-width: $viewport-tablet) {
    align-items: center;
    grid-gap: 2rem 1.875rem;
  }
  &__left {
    grid-column: 1/13;
    grid-row: 2;
    @media (min-width: $viewport-desktop) {
      grid-row: initial;
      grid-column: 1/6;
    }
    :deep() {
      h2 {
        margin-bottom: 1.25rem;
        @media (min-width: $viewport-desktop) {
          margin-bottom: 2.4375rem;
        }
      }
      p {
        color: $grey-800;
        margin-bottom: 2.3125rem;
      }
      ul {
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
      .btn {
        margin-top: 3.5625rem;
      }
    }
  }
  &__top {
    display: none;
    @media (min-width: $viewport-desktop) {
      display: block;
      grid-column: 1/4;
    }
    :deep() img {
      display: block;
      width: 100%;
      height: 292px;
      object-fit: cover;
    }
  }
  &__bottom {
    margin-inline: -1.25rem;
    @media (min-width: $viewport-tablet) {
      margin-inline: -3.75rem;
    }
    @media (min-width: $viewport-desktop) {
      margin-inline: 0;
      margin-top: -11rem;
      grid-column: 2/7;
    }
    :deep() img {
      display: block;
      width: 100%;
      min-height: 12.5rem;
      max-height: 34.375rem;
      object-fit: cover;
      @media (min-width: $viewport-desktop) {
        height: 34.375rem;
      }
    }
  }
  &__right {
    grid-column: 1/13;
    grid-row: 1;
    @media (min-width: $viewport-desktop) {
      grid-row: initial;
      grid-column: 7/13;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 0 1.875rem;
    }
  }
}
</style>
