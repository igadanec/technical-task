<script setup>
defineProps({
  slugLeft: {
    type: String,
    default: "",
  },
  slugRight: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="more-work">
    <router-link
      :to="slugLeft"
      class="more-work__left"
      v-thover="{ scale: 1.3 }"
    >
      <slot name="image-left" />
      <div class="overlay">
        <slot name="link-left" />
      </div>
    </router-link>
    <router-link
      :to="slugRight"
      class="more-work__right"
      v-thover="{ scale: 1.3 }"
    >
      <slot name="image-right" />
      <div class="overlay">
        <slot name="link-right" />
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.more-work {
  display: grid;
  grid-template-columns: 12fr;
  @media (min-width: $viewport-tablet) {
    grid-template-columns: 6fr 6fr;
  }
  :deep() {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      font-weight: bold;
      color: $white;
      svg {
        margin-left: 10px;
      }
    }
  }
  &__left,
  &__right {
    position: relative;
    min-height: 250px;
    max-height: 400px;
    @media (min-width: $viewport-tablet) {
      height: 400px;
    }
  }
  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(29, 29, 29, 0.3);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 0.3s;
    &:hover {
      background-color: rgba(35, 150, 180, 0.9);
    }
  }
}
</style>
