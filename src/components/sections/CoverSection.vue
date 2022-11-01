<script setup></script>

<template>
  <section class="cover">
    <slot name="image" />
    <div class="cover--overlay">
      <slot name="title" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cover {
  position: relative;
  &--overlay {
    padding: 0 1.25rem;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(29, 29, 29, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :deep() {
    img {
      display: block;
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
    h1 {
      color: $white;
    }
  }
}
</style>
