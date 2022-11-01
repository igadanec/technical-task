<script setup>
import Header from "@/components/layout/header.vue";
import IconArrowTopRight from "@/assets/icons/arrow-top-right.svg";
</script>

<template>
  <tetikus :throttleSpeed="1" borderColor="#aaaaaa" invertColor>
    <template #contents>
      <IconArrowTopRight class="cursor" />
    </template>
  </tetikus>
  <Header />
  <router-view />
</template>

<style lang="scss" scoped>
:deep() .cursor path {
  mix-blend-mode: difference;
  fill: #aaaaaa;
}
</style>
